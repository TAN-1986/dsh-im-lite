/**
 * 通用 IM 告警发送服务（2026-08-23）
 *
 * 把"给用户发一条微信通知"变成 harness 的通用能力，任何系统都能用：
 *
 * 1. HTTP 端点（外部进程用，如量化 runner / cron）:
 *      POST http://127.0.0.1:<webServer.port>/dsh-im/send
 *      Content-Type: application/json
 *      {"text": "🟢 开仓 BTC/USDT ..."}
 *    仅绑定 loopback（本机），且校验可选 Bearer token（见配置 sendToken）。
 *
 * 2. Agent Tool（harness 内任何 agent 预设用）:
 *      工具名 im_send_message，参数 { text }
 *
 * 依赖 weixin controller 的 sendMessage()（对 owner 发文本）。
 */

const SEND_ROUTE_PATH = '/dsh-im/send';
const SEND_TOOL_NAME = 'im_send_message';

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 64 * 1024) {
        reject(new Error('body too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  res.end(body);
}

/**
 * 安装通用发送能力。
 * @param ctx Cordis context（需含 webServer / tools / systemPrompt）
 * @param weixinHandle { controller } 微信 production controller
 * @param config { sendToken? } 可选：HTTP 端点 Bearer token（未配置=仅本机无鉴权）
 */
export function installSendMessage(ctx, weixinHandle, config = {}) {
  const controller = weixinHandle?.controller;
  if (!controller || typeof controller.sendMessage !== 'function') {
    throw new TypeError('im-send requires a weixin controller with sendMessage()');
  }
  const token = typeof config.sendToken === 'string' && config.sendToken.trim()
    ? config.sendToken.trim()
    : null;
  const disposers = [];

  // ── 1. HTTP 端点（外部进程） ──────────────────────────────────
  if (typeof ctx?.webServer?.register === 'function') {
    const disposeRoute = ctx.webServer.register({
      kind: 'exact',
      path: SEND_ROUTE_PATH,
      async handler(req, res) {
        try {
          if (req.method !== 'POST') {
            sendJson(res, 405, { ok: false, error: { code: 'method-not-allowed', message: 'POST only.' } });
            return;
          }
          if (token) {
            const auth = req.headers.authorization ?? '';
            if (auth !== `Bearer ${token}`) {
              sendJson(res, 401, { ok: false, error: { code: 'unauthorized', message: 'Missing or invalid token.' } });
              return;
            }
          }
          const body = await readJsonBody(req);
          const text = isRecord(body) && typeof body.text === 'string' ? body.text.trim() : '';
          if (!text) {
            sendJson(res, 400, { ok: false, error: { code: 'bad-request', message: 'text is required.' } });
            return;
          }
          await controller.sendMessage(text);
          sendJson(res, 200, { ok: true, value: { sent: true } });
        } catch (error) {
          sendJson(res, 502, {
            ok: false,
            error: { code: 'send-failed', message: error?.message ?? String(error) },
          });
        }
      },
    });
    disposers.push(disposeRoute);
  }

  // ── 2. Agent Tool（harness 内 agent 调用） ─────────────────────
  const tool = Object.freeze({
    name: SEND_TOOL_NAME,
    description: 'Send an IM notification (WeChat) to the user\'s phone. Use for trade alerts, monitoring alarms, or any urgent notice.',
    parameters: {
      type: 'object',
      additionalProperties: false,
      properties: {
        text: {
          type: 'string',
          description: 'The message text to send (plain text, supports emoji).',
        },
      },
      required: ['text'],
    },
    async execute(args) {
      const text = typeof args?.text === 'string' ? args.text.trim() : '';
      if (!text) throw new Error('text is required');
      await controller.sendMessage(text);
      return { sent: true };
    },
  });

  if (typeof ctx?.tools?.register === 'function') {
    disposers.push(ctx.tools.register(tool));
    if (typeof ctx?.systemPrompt?.section === 'function') {
      disposers.push(ctx.systemPrompt.section({
        name: 'dsh-im:send-message',
        order: 116,
        text: `When the user asks to push a notification/alert to their phone (WeChat), call ${SEND_TOOL_NAME} with the text.`,
      }));
    }
  }

  return () => {
    for (const dispose of disposers) dispose();
  };
}
