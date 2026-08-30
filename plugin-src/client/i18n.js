import * as React from 'react';

export const IM_LOCALE_NAMESPACE = 'dsh-im';

const EN = Object.freeze({
  '$locale': 'en',
  'IM机器人': 'IM bots',
  'IM机器人设置': 'IM bot settings',
  'IM 渠道': 'IM channels',
  '让 DeepSeek Harness 触手可及': 'DeepSeek Harness, always within reach',
  '（实验功能）': '(Experimental)',
  '本机主动连接公网 Office；Harness 不开放端口。协议 Hook 固定为 ': 'This machine connects outward to the public Office; Harness exposes no port. Protocol hooks: ',
  '尚未配置': 'Not configured',
  '已连接 Office': 'Connected to Office',
  '已配置': 'Configured',
  '等待重连': 'Waiting to reconnect',
  '凭据缺失': 'Credential missing',
  '最近心跳': 'Last heartbeat',
  '最近事件': 'Last event',
  '重连次数': 'Reconnects',
  '运行 Job': 'Running Jobs',
  '完成 Job': 'Completed Jobs',
  '尚无': 'None yet',
  '设备连接': 'Device connection',
  'Token 只写入本机凭据存储': 'Token is written only to the local credential store',
  '粘贴 Office 一次性凭据': 'Paste the one-time Office credential',
  '已安全保存；留空保持不变': 'Stored securely; leave blank to keep it',
  '最大并发': 'Max concurrency',
  'Heartbeat 秒数': 'Heartbeat seconds',
  'Workspace 映射': 'Workspace mappings',
  '每行 alias=/本机/绝对路径；Office 只能看到 alias。': 'One alias=/local/absolute/path per line; Office sees only aliases.',
  'Instruction Preset 映射': 'Instruction preset mappings',
  '每行 alias=指令；新增 preset 不需要改 Office 代码。': 'One alias=instruction per line; new presets require no Office code change.',
  '保存并连接': 'Save and connect',
  '测试连接': 'Test connection',
  '测试中…': 'Testing…',
  '重新连接': 'Reconnect',
  '移除连接': 'Remove connection',
  '连接测试通过。': 'Connection test passed.',
  '配置已保存。': 'Configuration saved.',
  '协议 Hook 预览': 'Protocol hook preview',
  '由 Base URL 自动派生，不单独填写': 'Derived from Base URL; no separate input',
  'Base URL 无效': 'Invalid Base URL',
  'Office Hook 尚未部署时，配置会安全保存并自动重试；出现 HTTP 404 代表协议端点待上线，不代表 Harness 故障。': 'Configuration is saved and retried while Office hooks are unavailable; HTTP 404 means the protocol endpoint is pending, not a Harness failure.',
  'Workspace 映射每行必须使用 alias=value': 'Each workspace mapping must use alias=value',
  'Instruction Preset 映射每行必须使用 alias=value': 'Each instruction preset mapping must use alias=value',
  'action-items=转换为负责人、截止和验收明确的工单': 'action-items=Turn this into accountable tasks with deadlines and acceptance criteria',
  '帮助与反馈 · 前往 GitHub': 'Help & feedback · Open GitHub',
  '微信': 'WeChat',
  '微信机器人': 'WeChat bot',
  '微信设置': 'WeChat settings',
  '群聊响应方式': 'Group response mode',
  '仅在 @机器人时响应（推荐）': 'Only respond when @mentioned (recommended)',
  '响应所有群消息': 'Respond to all group messages',
  '重新授权': 'Reauthorize',
  '去授权': 'Authorize',
  '重新授权群消息权限': 'Reauthorize group-message permission',
  '授权群消息权限': 'Authorize group-message permission',
  '正在准备授权…': 'Preparing authorization…',
  '正在准备…': 'Preparing…',
  '私聊始终响应；群聊仅处理明确 @当前机器人的消息。群消息权限已开通，再次切换无需授权。': 'Direct messages always work; group chats require an explicit @mention of this bot. The group-message permission is already granted, so switching again needs no authorization.',
  '已开通“获取群组中所有消息”权限（im:message.group_msg）；机器人会处理群聊中的所有可见消息。': 'The “Read all messages in associated group chat” scope (im:message.group_msg) is granted; the bot processes every visible group message.',
  '私聊始终响应；群聊仅处理明确 @当前机器人的消息。': 'Direct messages always work; group chats require an explicit @mention of this bot.',
  '群聊响应方式修改失败，请重试。': 'Could not update the group response mode. Try again.',
  '群消息权限授权失败，请重试。': 'Could not authorize group-message permission. Try again.',
  '扫码接入机器人': 'Scan QR code',
  '正在接入': 'Connecting',
  '手动接入': 'Manual setup',
  '收起凭据': 'Hide credentials',
  '收起接入': 'Hide setup',
  '接入机器人': 'Connect bot',
  '开始接入': 'Start setup',
  '在线': 'online',
  '运行正常': 'Connected',
  '正在连接': 'Connecting',
  '正在连接…': 'Connecting…',
  '连接未就绪': 'Not connected',
  '连接中': 'Connecting',
  '连接中断': 'Disconnected',
  '需要处理': 'Needs attention',
  '状态未知': 'Unknown status',
  '离线': 'Offline',
  '已断开': 'Disconnected',
  '消息通道': 'Message channel',
  '查看消息通道说明': 'View message channel details',
  '最近检查': 'Last checked',
  '当前工作区': 'Current workspace',
  '选择目录': 'Choose folder',
  '选择机器人工作区目录': 'Select bot workspace folder',
  '当前目录': 'Current folder',
  '主目录': 'Home',
  '正在准备目录选择器…': 'Preparing folder picker…',
  '正在读取目录…': 'Loading folders…',
  '这个目录中没有子文件夹。': 'This folder has no subfolders.',
  '此目录的子文件夹过多，仅显示前一部分。': 'This folder has too many subfolders; only the first group is shown.',
  '无法读取目录，请重试。': 'Could not load the folder. Try again.',
  '重试': 'Retry',
  '显示隐藏文件夹': 'Show hidden folders',
  '切换后会清除这个机器人的旧会话映射。': 'Switching clears this bot’s previous session mappings.',
  '切换中…': 'Switching…',
  '选择此目录': 'Select this folder',
  '工作区绝对路径': 'Absolute workspace path',
  '/绝对路径/到/工作区': '/absolute/path/to/workspace',
  '修改': 'Change',
  '保存': 'Save',
  '保存中…': 'Saving…',
  '未设置': 'Not set',
  '工作区修改失败，请重试。': 'Could not update the workspace. Try again.',
  '请输入工作区绝对路径。': 'Enter an absolute workspace path.',
  '工作区必须是绝对路径。': 'The workspace must be an absolute path.',
  '工作区路径不存在。': 'The workspace path does not exist.',
  '工作区路径必须指向一个目录。': 'The workspace path must point to a directory.',
  '找不到要修改的机器人。': 'The bot could not be found.',
  'Agent Preset': 'Agent Preset',
  '查看 Agent Preset 说明': 'View Agent Preset help',
  '跟随 Host 默认': 'Follow the Host default',
  '（已不可用）': ' (unavailable)',
  '只影响新建会话；若当前聊天已有会话，先发送 /new，再发送普通消息生效。': 'This affects only new sessions. If the current chat already has a session, send /new, then send a regular message to apply it.',
  '当前 Agent Preset 已不可用，请选择其他 Preset 或跟随 Host 默认。': 'The current Agent Preset is unavailable. Choose another preset or follow the Host default.',
  'Agent Preset 修改失败，请重试。': 'Could not update the Agent Preset. Try again.',
  '请选择 Agent Preset。': 'Choose an Agent Preset.',
  'Agent Preset 无效。': 'The Agent Preset is invalid.',
  'Agent Preset 不存在或不可用。': 'The Agent Preset does not exist or is unavailable.',
  '尚未检查': 'Not checked yet',
  '刚刚': 'Just now',
  '检查连接': 'Check connection',
  '检查中…': 'Checking…',
  '连接检查失败，请稍后重试。': 'Connection check failed. Try again later.',
  '测试消息已发送，请到对应机器人会话中确认。': 'Test message sent. Check the matching bot conversation.',
  '连接检查完成。机器人尚未收到可用于测试的私聊消息。': 'Connection check completed. The bot has not received a direct message it can use for testing.',
  '连接检查完成，但测试消息发送失败。': 'Connection check completed, but the test message could not be sent.',
  '微信连接检查完成，测试消息已发送。': 'WeChat connection check completed and the test message was sent.',
  '微信连接检查完成，但测试消息发送失败。': 'WeChat connection check completed, but the test message could not be sent.',
  '重试连接': 'Reconnect',
  '重试中…': 'Retrying…',
  '移除接入': 'Remove connection',
  '确认移除接入': 'Remove connection',
  '确认移除': 'Remove',
  '正在移除…': 'Removing…',
  '保留机器人': 'Keep bot',
  '保留账号': 'Keep account',
  '取消': 'Cancel',
  '关闭': 'Close',
  '立即重试': 'Retry now',
  '重新读取': 'Reload',
  '重新生成二维码': 'Generate a new QR code',
  '重新生成二维码后继续': 'Generate a new QR code',
  '刷新二维码': 'Refresh QR code',
  '刷新中…': 'Refreshing…',
  '换一个二维码': 'Get another QR code',
  '继续连接': 'Continue connecting',
  '绑定并连接': 'Connect',
  '正在绑定…': 'Connecting…',
  '验证并连接': 'Verify and connect',
  '正在验证并连接…': 'Verifying and connecting…',
  '正在验证…': 'Verifying…',
  '操作失败，请稍后重试': 'The operation failed. Try again later.',
  '请稍后重试': 'Try again later.',
  '当前二维码有效时间': 'QR code expires in',
  '二维码有效时间': 'QR code expires in',
  '二维码已过期': 'QR code expired',
  '二维码已失效': 'QR code expired',
  '二维码已过期\n请重新生成': 'QR code expired\nGenerate a new one',
  '二维码图片正在生成…': 'Generating QR code…',
  '二维码正在生成…': 'Generating QR code…',
  '二维码正在自动刷新…': 'Refreshing QR code…',
  '二维码未就绪，请打开授权链接': 'The QR code is not ready. Open the authorization link.',
  '二维码图片未就绪，请使用备用链接。': 'The QR code is not ready. Use the alternate link.',
  '二维码图片未就绪，请重新生成。': 'The QR code is not ready. Generate a new one.',
  '等待刷新': 'Waiting to refresh',
  '正在刷新二维码': 'Refreshing QR code',
  '打开备用链接': 'Open alternate link',
  '生成二维码': 'Generate QR code',
  '生成微信二维码': 'Generate WeChat QR code',
  '正在生成二维码…': 'Generating QR code…',
  '正在准备授权二维码': 'Preparing authorization QR code',
  '正在准备权限授权二维码': 'Preparing permission authorization QR code',
  '正在准备微信二维码': 'Preparing WeChat QR code',
  '正在添加新机器人': 'Adding a new bot',
  '扫码只会新增一个机器人，已接入的机器人会继续正常收发消息。': 'Scanning adds one bot. Existing bots will continue to send and receive messages.',
  '刷新二维码后继续': 'Refresh the QR code to continue',
  '核对应用名称与权限范围，并确认创建': 'Review the app name and permissions, then confirm',
  '保持本页打开，等待新机器人的长连接就绪': 'Keep this page open until the bot connection is ready',
  '取消添加': 'Cancel',
  '核对现有应用，并确认“获取群组中所有消息”权限': 'Review the existing app and confirm the “Read all messages in associated group chat” permission',
  '保持本页打开，等待权限生效并自动切换响应方式': 'Keep this page open while the permission takes effect and the response mode switches automatically',
  '取消授权': 'Cancel authorization',
  '已确认，正在启用全部消息模式': 'Confirmed. Enabling all-message mode',
  '权限配置已提交，正在保存设置并重连此机器人；此阶段无法取消，其他机器人不会中断。': 'The permission update was submitted. Saving the setting and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.',
  '权限配置已提交，正在启用全部消息模式并重连此机器人；此阶段无法取消，其他机器人不会中断。': 'The permission update was submitted. Enabling all-message mode and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.',
  '群消息权限没有开通完成': 'Group-message permission was not granted',
  '核对现有应用名称，并确认只新增卡片回调': 'Review the existing app name and confirm that only the card callback is added',
  '保持本页打开，等待卡片按钮修复完成': 'Keep this page open until card-button repair finishes',
  '取消修复': 'Cancel repair',
  '已确认，正在完成卡片按钮修复': 'Confirmed. Finishing card-button repair',
  '正在准备修复二维码': 'Preparing the repair QR code',
  '配置已提交，正在验证卡片按钮回调并重连此机器人；此阶段无法取消，其他机器人不会中断。': 'The update was submitted. Verifying the card callback and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.',
  '卡片按钮没有修复完成': 'Card-button repair did not finish',
  '修复卡片按钮': 'Repair card buttons',
  '等待扫码…': 'Waiting for scan…',
  '此机器人': 'this bot',
  '用于为${botName}开通群消息权限的一次性授权二维码': 'One-time QR code for granting group-message permission to ${botName}',
  '正在为「${botName}」开通群消息权限': 'Granting group-message permission to “${botName}”',
  '${targetBotName}已开通群消息权限，并启用“响应所有群消息”。': '${targetBotName} now has group-message permission and “Respond to all group messages” is enabled.',
  '${targetBot.bot.name}已开通群消息权限，并启用“响应所有群消息”。': '${targetBot.bot.name} now has group-message permission and “Respond to all group messages” is enabled.',
  '已取消卡片按钮修复。': 'Card-button repair was cancelled.',
  '已取消群消息权限授权。': 'Group-message permission authorization was cancelled.',
  '卡片按钮已更新，但暂时无法确认机器人连接状态': 'The card callback was updated, but the bot connection could not be confirmed yet',
  '群消息权限已更新，但暂时无法确认机器人连接状态': 'The group-message permission was updated, but the bot connection could not be confirmed yet',
  '已确认，正在连接新机器人': 'Confirmed. Connecting the new bot',
  '正在安全保存凭据并检查新机器人的消息通道，其他机器人不会中断。': 'Saving credentials and checking the new bot connection. Existing bots will not be interrupted.',
  '新机器人没有添加完成': 'The new bot was not added',
  '机器人已经创建，但暂时无法确认连接状态': 'The bot was created, but its connection could not be confirmed yet',
  '机器人仍未连接': 'The bot is still offline',
  '机器人尚未连接': 'The bot is not connected yet',
  '长连接运行正常': 'Persistent connection is healthy',
  '长连接': 'Persistent connection',
  '应用标识已安全保存': 'App identifier stored securely',
  '机器人标识已安全保存': 'Bot identifier stored securely',
  '已安全保存': 'Stored securely',
  '已接入的微信账号': 'Connected WeChat accounts',
  '已接入的机器人': 'Connected bots',
  '使用手机微信扫描二维码': 'Scan with WeChat on your phone',
  '扫一次码，就能在微信里使用 Harness': 'Scan once to use Harness in WeChat',
  '打开手机微信并扫描左侧二维码': 'Open WeChat on your phone and scan the QR code',
  '在微信中确认连接该机器人': 'Confirm the bot connection in WeChat',
  '保持本页打开，等待机器人自动连接': 'Keep this page open while the bot connects',
  '等待微信扫码': 'Waiting for WeChat scan',
  '需要配对码': 'Pairing code required',
  '输入手机微信显示的数字': 'Enter the number shown in WeChat',
  '微信配对码': 'WeChat pairing code',
  '已扫码，请在手机上确认': 'Scanned. Confirm on your phone',
  '配对码已提交，正在等待微信确认。': 'Pairing code submitted. Waiting for WeChat confirmation.',
  '这是微信附加的安全确认步骤。配对码只用于本次扫码轮询，不会写入配置或日志。': 'This is an additional WeChat confirmation step. The pairing code is used only for this connection and is never stored.',
  '正在保存凭据并验证 Harness 与微信长轮询。': 'Saving credentials and verifying the WeChat connection.',
  '微信已确认，正在启动消息连接': 'Confirmed in WeChat. Starting the message connection',
  '微信已授权，但无法读取现有登录凭据。请检查 DSH 凭据存储。': 'WeChat was authorized, but the existing login credential could not be read. Check the DSH credential store.',
  '微信已授权，但登录凭据无法写入 DSH 凭据存储。请检查凭据存储是否可写。': 'WeChat was authorized, but the login credential could not be written to the DSH credential store. Check that the store is writable.',
  '微信已授权，但账号配置无法写入本机。请检查 DSH_HOME 目录权限。': 'WeChat was authorized, but the account configuration could not be saved locally. Check the DSH_HOME directory permissions.',
  '微信已授权，但无法初始化账号状态或工作区。请检查 DSH_HOME 和工作区目录。': 'WeChat was authorized, but the account state or workspace could not be initialized. Check DSH_HOME and the workspace directory.',
  '微信已授权，但插件无法连接本机 Harness。请检查 dsh web 地址和端口。': 'WeChat was authorized, but the plugin could not connect to the local Harness. Check the dsh web address and port.',
  '微信已授权，但 Harness 健康检查超时。请确认 dsh web 未阻塞。': 'WeChat was authorized, but the Harness health check timed out. Confirm that dsh web is not blocked.',
  '微信已授权，但 Harness 拒绝了本机健康检查。请检查 Host 信任配置。': 'WeChat was authorized, but Harness denied the local health check. Check the Host trust configuration.',
  '微信已授权，但找不到 Harness 健康检查接口。请确认 Harness 与插件版本兼容。': 'WeChat was authorized, but the Harness health endpoint was not found. Confirm that Harness and the plugin are compatible.',
  '微信已授权，但 Harness 健康检查返回服务错误。请查看 dsh web 日志。': 'WeChat was authorized, but the Harness health check returned a service error. Check the dsh web logs.',
  '微信已授权，但 Harness 返回了无法识别的响应。请确认 Harness 与插件版本兼容。': 'WeChat was authorized, but Harness returned an unrecognized response. Confirm that Harness and the plugin are compatible.',
  '微信已授权，但 Harness 拒绝了健康检查请求。请查看 dsh web 日志。': 'WeChat was authorized, but Harness rejected the health-check request. Check the dsh web logs.',
  '微信已授权，但 Harness 健康检查发生未知错误。请查看 dsh web 日志。': 'WeChat was authorized, but the Harness health check failed unexpectedly. Check the dsh web logs.',
  '微信已授权，但消息连接初始化失败。请查看 dsh web 日志后重试。': 'WeChat was authorized, but the message connection could not be initialized. Check the dsh web logs and try again.',
  '微信已授权，但激活过程中发生未知错误。请查看 dsh web 日志。': 'WeChat was authorized, but an unknown error occurred during activation. Check the dsh web logs.',
  '微信已绑定，可以开始向已绑定的机器人发消息。': 'WeChat is connected and ready for messages.',
  '这个微信账号已经绑定并保持在线。': 'This WeChat account is connected and online.',
  '微信账号及本机凭据已移除。': 'The WeChat account and local credentials were removed.',
  '已取消微信绑定。': 'WeChat setup was cancelled.',
  '正在联系腾讯微信 iLink 服务。': 'Contacting the WeChat iLink service.',
  'iLink 长轮询': 'iLink long polling',
  '扫一次码，自动创建并连接机器人': 'Scan once to create and connect a bot',
  '在授权页点击“一键创建新机器人”': 'Select “Create new bot” on the authorization page',
  'Stream 长连接': 'Stream persistent connection',
  '在腾讯授权页面确认创建智能机器人': 'Confirm bot creation on the Tencent authorization page',
  '返回这里等待连接完成': 'Return here and wait for the connection to complete',
  'WebSocket 长连接': 'WebSocket persistent connection',
  '在腾讯授权页面确认创建或绑定机器人': 'Confirm bot creation or connection on the Tencent authorization page',
  '点击“关联设备”并扫描左侧二维码': 'Select “Link a device” and scan the QR code',
  '正在建立安全的关联设备会话。': 'Creating a secure linked-device session.',
  '关联设备正在接入 DeepSeek Harness。': 'Linking the device to DeepSeek Harness.',
  'Bot API 长轮询': 'Bot API long polling',
  ' Gateway 长连接': ' Gateway persistent connection',
  'Gateway 长连接': 'Gateway persistent connection',
  ' Socket Mode 长连接': ' Socket Mode persistent connection',
  'Socket Mode 长连接': 'Socket Mode persistent connection',
  '先通过 @BotFather 获取 Bot Token，再在这里完成接入。': 'Get a Bot Token from @BotFather, then connect it here.',
  '填写 @BotFather 生成的 Bot Token': 'Enter the Bot Token from @BotFather',
  '访问模式': 'Access mode',
  '访问设置': 'Access settings',
  '群聊全部忽略，私聊仅允许白名单用户。': 'All group messages are ignored; only allowlisted users may send DMs.',
  '保持原有行为：私聊直接响应，群聊在被提及或回复时响应。': 'Keep the original behavior: respond to DMs and to group mentions or replies.',
  '安全模式': 'Safe mode',
  '兼容模式': 'Compatible mode',
  '已生效：安全模式': 'Active: Safe mode',
  '已生效：兼容模式': 'Active: Compatible mode',
  '模式': 'Mode',
  '兼容模式（默认）': 'Compatible mode (default)',
  '安全模式（私聊白名单）': 'Safe mode (private-chat allowlist)',
  '每行一个数字 User ID': 'One numeric User ID per line',
  '白名单仅属于当前机器人。': 'This allowlist belongs only to the current bot.',
  '兼容模式下暂不使用白名单，切换模式时会保留。': 'Compatible mode does not enforce the allowlist; it is retained when modes change.',
  '白名单为空；保存后该机器人会拒绝所有入站消息。': 'The allowlist is empty; this bot will reject all inbound messages after saving.',
  '正在保存…': 'Saving…',
  '保存访问设置': 'Save access settings',
  'User ID 必须是 1–16 位正整数，每行一个。': 'Each User ID must be a 1–16 digit positive integer on its own line.',
  '先在 Developer Portal 创建 Bot 并邀请到服务器，再在这里完成接入。': 'Create a bot in the Developer Portal and invite it to your server, then connect it here.',
  '复制 Manifest': 'Copy manifest',
  '已复制 Manifest': 'Manifest copied',
  'Bot Token 来自 OAuth & Permissions；App Token 来自 Basic Information，并且必须包含 connections:write。': 'Get the Bot Token from OAuth & Permissions and the App Token from Basic Information. The App Token must include connections:write.',
  '使用官方 App Manifest 快速配置机器人，再填写 Bot Token 与 App Token 建立本地 Socket Mode 连接。': 'Configure the bot with the official app manifest, then enter the Bot Token and App Token to start a local Socket Mode connection.',
  'Bot Token 与 App Token': 'Bot Token and App Token',
  '填写 Bot Token': 'Enter Bot Token',
  '扫码接入微信机器人': 'Connect WeChat bot by QR code',
  '取消绑定': 'Cancel setup',
  '取消接入': 'Cancel setup',
  '二维码由腾讯微信 iLink 服务签发。用手机微信扫描并确认后，账号凭据会直接写入 Harness Host，浏览器不会收到 bot_token。': 'The QR code is issued by Tencent WeChat iLink. After you scan and confirm, account credentials are written directly to the Harness Host and are never exposed to the browser.',
  '请在手机上核对并确认授权。部分账号会额外显示一个配对数字，页面会在需要时提示输入。': 'Review and confirm authorization on your phone. Some accounts may also require a pairing number.',
  '扫码由腾讯官方页面完成，不需要手动填写 AppID 或 AppSecret。扫码成功后，机器人会自动连接 DeepSeek Harness。': 'Scanning is completed on Tencent’s official page. No AppID or AppSecret is required, and the bot connects automatically.',
  '扫码由腾讯官方页面完成，不需要手动填写 Bot ID 或 Secret。创建成功后，机器人会自动连接 DeepSeek Harness。': 'Scanning is completed on Tencent’s official page. No Bot ID or Secret is required, and the bot connects automatically.',
  '从此 Harness 移除这个微信账号？': 'Remove this WeChat account from Harness?',
  '这会停止消息连接，并删除本机保存的 bot_token、账号配置和会话映射。其他微信账号不受影响。': 'This stops the message connection and removes the locally stored bot_token, account configuration, and session mappings. Other WeChat accounts are not affected.',
  '这会停止消息连接，并删除本机保存的应用凭据、机器人配置及会话映射。腾讯平台中的机器人不会被自动删除。': 'This stops the message connection and removes the locally stored app credentials, bot configuration, and session mappings. The bot on Tencent’s platform is not deleted.',
  '正在读取微信连接状态…': 'Loading WeChat connection status…',
  '${totals.connected} / ${totals.configured} 在线': '${totals.connected} / ${totals.configured} online',
  '二维码已过期\\n请重新生成': 'QR code expired\\nGenerate a new one',
  '机器人已创建，正在建立消息连接': 'Bot created. Starting the message connection',
  '已接入 ${totals.configured} 个机器人，其中 ${totals.connected} 个在线': '${totals.connected} of ${totals.configured} bots online',
  '尚未接入机器人': 'No bot connected yet',
  '请刷新后重新扫码': 'Refresh and scan again',
  '${connected ? "检查连接" : "重试连接"}${bot.name}': '${connected ? "Check connection" : "Reconnect"} ${bot.name}',
  '已取消添加机器人。': 'Adding the bot was cancelled.',
  '${bot.name}操作失败，请查看机器人状态。': '${bot.name} operation failed. Check the bot status.',
  '无法读取连接状态': 'Could not load connection status',
  '${channel}${connectionSummary}运行正常': '${channel}${connectionSummary} is healthy',
  '${channel} 服务没有返回有效的机器人列表': '${channel} did not return a valid bot list',
  '使用 Bot Token 接入 ${channel} 机器人': 'Connect a ${channel} bot with a Bot Token',
  '${model.totals.connected} / ${model.totals.configured} 在线': '${model.totals.connected}/${model.totals.configured} online',
  ' Bot API 长轮询': ' Bot API long polling',
  '微信扫码服务没有返回有效的绑定任务': 'WeChat did not return a valid setup attempt',
  '微信绑定没有完成': 'WeChat setup did not complete',
  '微信连接正常': 'WeChat connection is healthy',
  '微信连接未就绪': 'WeChat connection is not ready',
  '当前模型不支持图片，请用 /models 查看可用模型，再用 /model <序号> 切换后重发。': 'The current model does not support images. Use /models to list models, then /model <number> to switch and resend.',
  '图片超过宿主允许的大小，请压缩后重试。': 'The image exceeds the Host size limit. Compress it and try again.',
  '图片分辨率过高，请压缩后重试。': 'The image resolution is too high. Compress it and try again.',
  '图片内容无效或格式不受支持，请重新发送。': 'The image is invalid or unsupported. Send it again.',
  '未能读取图片内容，请重新发送。': 'The image could not be read. Send it again.',
  '图片格式与实际内容不一致，请重新发送。': 'The declared image format does not match its content. Send it again.',
  '一次发送的图片数量超过宿主限制，请减少后重试。': 'The message exceeds the Host image-count limit. Remove some images and try again.',
  '图片总大小超过宿主限制，请减少图片或压缩后重试。': 'The images exceed the Host total-size limit. Remove or compress some images and try again.',
  '图片下载地址发生了重定向，暂时无法读取。': 'The image download redirected and cannot be read.',
  '图片超过 5 MB，请压缩后重试。': 'The image exceeds 5 MB. Compress it and try again.',
  '一次发送的图片总大小过大，请减少图片数量或压缩后重试。': 'The images are too large in total. Remove or compress some images and try again.',
  '图片下载失败，请重新发送后再试。': 'The image download failed. Send it again.',
  '暂不支持该图片格式，请发送 JPEG、PNG、WebP 或 GIF 图片。': 'This image format is unsupported. Send a JPEG, PNG, WebP, or GIF image.',
  '消息处理失败，请稍后重试。': 'Message processing failed. Try again later.',
  '微信服务没有返回有效的账号列表': 'WeChat did not return a valid account list',
  '尚未绑定微信': 'No WeChat account connected yet',
  '用于把微信机器人绑定到 DeepSeek Harness 的一次性二维码': 'One-time QR code for connecting a WeChat bot to DeepSeek Harness',
  '保持本页打开，等待消息长轮询变为在线': 'Keep this page open until long polling is online',
  '微信二维码已生成，请使用手机微信扫描。': 'WeChat QR code generated. Scan it with WeChat on your phone.',
  '移除失败：${presentError(error).message}': 'Removal failed: ${presentError(error).message}',
  '无法读取微信状态': 'Could not load WeChat status',
});

export const en = EN;
export const zh = Object.freeze(Object.fromEntries(
  Object.keys(EN).map((key) => [key, key === '$locale' ? 'zh' : key]),
));

let translate = (key) => key;

export function setImTranslator(next) {
  translate = typeof next === 'function' ? next : (key) => key;
}

export function isEnglish() {
  return translate('$locale') === 'en';
}

function channelName(value) {
  return localizeText(value);
}

function translateDynamic(text) {
  let match = /^(\d+) \/ (\d+) 在线$/.exec(text);
  if (match) return `${match[1]}/${match[2]} online`;
  match = /^已接入 (\d+) 个机器人，其中 (\d+) 个在线$/.exec(text);
  if (match) return `${match[2]} of ${match[1]} bots online`;
  match = /^正在读取\s*(.+?)\s*机器人状态…$/.exec(text);
  if (match) return `Loading ${channelName(match[1])} bot status…`;
  match = /^无法读取\s*(.+?)\s*机器人状态$/.exec(text);
  if (match) return `Could not load ${channelName(match[1])} bot status`;
  match = /^尚未接入\s*(.+?)\s*机器人$/.exec(text);
  if (match) return `No ${channelName(match[1])} bot connected yet`;
  match = /^已接入的\s*(.+?)\s*机器人$/.exec(text);
  if (match) return `Connected ${channelName(match[1])} bots`;
  match = /^手动接入(.+)机器人$/.exec(text);
  if (match) return `Connect ${channelName(match[1])} bot manually`;
  match = /^(.+) 设置$/.exec(text);
  if (match) return `${channelName(match[1])} settings`;
  match = /^从 DeepSeek Harness 移除“(.+)”？$/.exec(text);
  if (match) return `Remove “${match[1]}” from DeepSeek Harness?`;
  match = /^从 DeepSeek Harness 移除(.+)$/.exec(text);
  if (match) return `Remove ${match[1]} from DeepSeek Harness`;
  match = /^用于修复(.+)卡片按钮的一次性授权二维码$/.exec(text);
  if (match) return `One-time QR code for repairing card buttons for ${match[1]}`;
  match = /^用于为(.+)开通群消息权限的一次性授权二维码$/.exec(text);
  if (match) return `One-time QR code for granting group-message permission to ${match[1]}`;
  match = /^正在修复「(.+)」$/.exec(text);
  if (match) return `Repairing “${match[1]}”`;
  match = /^正在为「(.+)」开通群消息权限$/.exec(text);
  if (match) return `Granting group-message permission to “${match[1]}”`;
  match = /^修复(.+)的卡片按钮$/.exec(text);
  if (match) return `Repair card buttons for ${match[1]}`;
  match = /^(.+)的卡片按钮已修复。$/.exec(text);
  if (match) return `Card buttons repaired for ${match[1]}.`;
  match = /^(.+)已开通群消息权限，并启用“响应所有群消息”。$/.exec(text);
  if (match) return `${match[1]} now has group-message permission and “Respond to all group messages” is enabled.`;
  match = /^(检查连接|重试连接)(.+)$/.exec(text);
  if (match) return `${localizeText(match[1])} ${match[2]}`;
  match = /^移除(.+)$/.exec(text);
  if (match) return `Remove ${match[1]}`;
  match = /^这会停止消息连接，并删除本机保存的 (.+)、机器人配置及会话映射。(.+)中的机器人不会被自动删除。$/.exec(text);
  if (match) {
    return `This stops the message connection and removes the locally stored ${localizeText(match[1])}, bot configuration, and session mappings. The bot in ${localizeText(match[2])} is not deleted.`;
  }
  match = /^二维码剩余 (.+)$/.exec(text);
  if (match) return `QR code expires in ${match[1]}`;
  match = /^最近一条消息处理失败：(.+)$/.exec(text);
  if (match) return `Latest message failed: ${localizeText(match[1])}`;
  match = /^图片下载失败（HTTP (.+)），请重新发送后再试。$/.exec(text);
  if (match) return `The image download failed (HTTP ${match[1]}). Send it again.`;
  match = /^一次最多只能处理 (\d+) 张图片。$/.exec(text);
  if (match) return `A message can contain at most ${match[1]} images.`;
  match = /^状态刷新失败：(.+)$/.exec(text);
  if (match) return `Status refresh failed: ${match[1]}`;
  match = /^状态自动刷新失败：(.+)$/.exec(text);
  if (match) return `Automatic status refresh failed: ${match[1]}`;
  match = /^操作失败：(.+)$/.exec(text);
  if (match) return `Operation failed: ${match[1]}`;
  match = /^连接检查失败：(.+)$/.exec(text);
  if (match) return `Connection check failed: ${match[1]}`;
  match = /^移除失败：(.+)$/.exec(text);
  if (match) return `Removal failed: ${match[1]}`;

  const phrases = [
    ['机器人', 'bot'], ['账号', 'account'], ['应用', 'app'], ['凭据', 'credentials'],
    ['服务返回了无法识别的响应', 'service returned an unrecognized response'],
    ['服务没有返回有效的机器人列表', 'service did not return a valid bot list'],
    ['操作失败，请稍后重试', 'operation failed; try again later'],
    ['操作失败', 'operation failed'], ['连接尚未就绪', 'connection is not ready'],
    ['没有接入完成', 'was not connected'], ['没有绑定完成', 'was not connected'],
    ['设置页缺少 RPC 连接', 'settings are missing an RPC connection'],
    ['设置', 'settings'], ['连接检查完成', 'connection check completed'],
    ['仍未连接，插件会继续自动重试', 'is still offline; the plugin will keep retrying'],
    ['已重新连接', 'reconnected'], ['移除失败，请重试', 'could not be removed; try again'],
    ['已连接，可以开始聊天', 'is connected and ready to chat'],
    ['已连接，可以开始发送消息', 'is connected and ready for messages'],
    ['服务请求失败', 'service request failed'], ['连接遇到问题', 'connection encountered a problem'],
    ['正在读取', 'Loading '], ['连接状态', 'connection status'], ['二维码', 'QR code'],
  ];
  let output = text;
  for (const [source, target] of phrases) output = output.replaceAll(source, target);
  return output;
}

export function localizeText(value) {
  if (typeof value !== 'string') return value;
  const exact = translate(value);
  if (exact !== value || !isEnglish()) return exact;
  return translateDynamic(value);
}

const LOCALIZED_PROPS = Object.freeze([
  'aria-label',
  'alt',
  'placeholder',
  'title',
]);

function localizeChild(child) {
  if (typeof child === 'string') return localizeText(child);
  if (Array.isArray(child)) return child.map(localizeChild);
  return child;
}

export function h(type, props, ...children) {
  let localizedProps = props;
  if (props) {
    for (const key of LOCALIZED_PROPS) {
      if (typeof props[key] === 'string') {
        localizedProps = localizedProps === props ? { ...props } : localizedProps;
        localizedProps[key] = localizeText(props[key]);
      }
    }
  }
  return React.createElement(type, localizedProps, ...children.map(localizeChild));
}
