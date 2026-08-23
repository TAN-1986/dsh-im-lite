import { apply as applyQq } from './channels/qq/index.mjs';
import { apply as applyWeixin } from './channels/weixin/index.mjs';
import { installSendMessage } from './channels/shared/send-message.mjs';
import { installOutboundArtifactTool } from '../../src/channels/shared/semantic/artifact.mjs';

export const name = 'dsh-im-host';
export const inject = [
  'connection',
  'credentials',
  'webServer',
  'typertGateway',
];

function channelConfig(config, name) {
  const channel = config[name] ?? {};
  return config.rpcAuthority === undefined
    ? channel
    : { ...channel, rpcAuthority: config.rpcAuthority };
}

export function createImHostPlugin(internals = {}) {
  const startQq = internals.applyQq ?? applyQq;
  const startWeixin = internals.applyWeixin ?? applyWeixin;
  return Object.freeze({
    name,
    inject,
    async apply(ctx, config = {}) {
      if (typeof ctx?.inject === 'function') {
        ctx.inject(['tools', 'systemPrompt'], (artifactCtx) => {
          installOutboundArtifactTool(artifactCtx);
        });
      } else {
        installOutboundArtifactTool(ctx);
      }
      await startQq(ctx, channelConfig(config, 'qq'));
      // 微信: 拿 controller 注册通用告警发送（HTTP 端点 + agent Tool）
      const weixinHandle = await startWeixin(ctx, channelConfig(config, 'weixin'));
      if (weixinHandle?.controller && typeof weixinHandle.controller.sendMessage === 'function') {
        const install = () => installSendMessage(ctx, weixinHandle, channelConfig(config, 'weixin'));
        if (typeof ctx?.inject === 'function') {
          ctx.inject(['tools', 'systemPrompt'], install);
        } else {
          ctx.effect(install, 'dsh-im: send-message service');
        }
      }
    },
  });
}

export async function apply(ctx, config = {}) {
  return createImHostPlugin().apply(ctx, config);
}
