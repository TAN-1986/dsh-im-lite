# DSH-IM Lite — DeepSeek Harness 微信通道

> **本项目是 [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) 的精简修改版**
>
> - 上游项目:MIT License,Copyright (c) 2026 xmanrui(原 LICENSE 已保留,见 [LICENSE](LICENSE))
> - 本版改动:**仅保留微信渠道**,移除 QQ、飞书、钉钉、企业微信、Slack、Telegram、Discord、WhatsApp、AI Office 等其余平台
> - 新增:**微信推送告警功能**(2026-08-23,由本项目作者新增,非上游功能)

让 DeepSeek Harness 通过微信触手可及——手机直接对话、收发消息、推送告警信息到手机端。

## 功能

### 微信渠道
- 腾讯官方 iLink 协议(非逆向个人号),扫码绑定机器人,长轮询收发消息
- 私聊回复;支持文字、图片、语音、文件、视频
- "正在输入"状态提示
- **推送告警**(本版新增):harness 内任意系统可经 `im-send` 工具或 `POST /dsh-im/send` 向已绑定账号的 owner 推送任意文本,不要求机器人长轮询在线,token 有效即可送达
- **过期自动恢复**(2026-08-30):context_token 过期导致 `prepare failed`(ret=-2)时,自动清除缓存 token 并无 token 重试一次;仍失败则提示用户重新激活,不再需要手动干预

## 安装

```sh
# 从源码目录安装(本仓库)
dsh plugin --profile web add link:<本仓库绝对路径>

# 或先克隆后安装
git clone <你的仓库地址>
dsh plugin --profile web add link:$(pwd)/dsh-im-lite
```

重启 `dsh web`,打开「设置 → 插件 → IM机器人」,绑定微信。

## 使用微信推送告警

绑定微信机器人后,harness 内任意 agent/脚本可调用 `im-send` 工具或 HTTP 端点向 owner 推送消息:

```
im-send: "今天签到已完成"
```

```sh
curl -X POST http://127.0.0.1:3080/dsh-im/send \
  -H "Content-Type: application/json" \
  -d '{"text": "🟢 开仓 BTC/USDT ..."}'
```

- 发送目标是绑定时的 owner(扫码者)或配置的 `ownerUserId`
- 无需机器人实时在线,只要登录 token 有效即可送达
- 未绑定任何微信账号时调用会报错提示

## 与上游的差异

| 项目 | 上游 dsh-im | 本版 Lite |
|---|---|---|
| 渠道数 | 9 个 + AI Office | **仅微信** |
| 微信推送告警 | 无 | **有(新增)** |
| 过期 token 自动恢复 | 无 | **有(新增)** |
| 代码体积 | ~32 万行(含测试) | 精简核心 |
| 依赖 | 5 个平台 SDK | 无外部 SDK |

## 许可证

MIT License。基于 [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) 修改,上游版权归原作者所有;本版新增功能(微信推送告警)版权归本项目作者所有。完整文本见 [LICENSE](LICENSE)。

## 上游

- GitHub: [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im)
- 原始 README / 文档:见上游仓库
