import * as React from 'react';

import {
  WeixinLogoGlyph,
} from './channel-logos.js';
import { WeixinSettingsTab } from './channels/weixin/index.js';
import { WEIXIN_RPC_CHANNEL } from './channels/weixin/api.js';
import { installWeixinStyles } from './channels/weixin/styles.js';
import { en, h, IM_LOCALE_NAMESPACE, setImTranslator, zh } from './i18n.js';
import { installImStyles } from './styles.js';
import { WorkspaceDirectoryPickerContext } from './workspace-editor.js';

export const name = 'im-settings';
export const inject = ['slots', 'connection', 'locale', 'workspaces'];

const CHANNELS = Object.freeze([
  { id: 'weixin', label: '微信' },
]);

function WeixinLogo() {
  return h('span', { className: 'dim-logo dim-logoWeixin', 'aria-hidden': 'true' },
    h(WeixinLogoGlyph));
}

function ChannelLogo({ channel }) {
  if (channel === 'weixin') return h(WeixinLogo);
  return null;
}

export function IMSettingsTab({
  weixinRpcCall,
  workspaceDirectoryPicker,
}) {
  const [selected, setSelected] = React.useState('weixin');
  const githubTooltipId = React.useId();
  const active = CHANNELS.find((channel) => channel.id === selected) ?? CHANNELS[0];
  return h(WorkspaceDirectoryPickerContext.Provider, { value: workspaceDirectoryPicker },
    h('section', { className: 'dim-page', 'aria-label': 'IM机器人设置' },
    h('header', { className: 'dim-title' },
      h('div', { className: 'dim-brand' },
        h('strong', { className: 'dim-brandName' }, 'DSH-IM'),
        h('p', null, '让 DeepSeek Harness 触手可及')),
      h('span', { className: 'dim-githubAction' },
        h('a', {
          className: 'dim-githubLink',
          href: 'https://github.com/xmanrui/dsh-im',
          target: '_blank',
          rel: 'noopener noreferrer',
          'aria-label': 'dsh-im GitHub',
          'aria-describedby': githubTooltipId,
        },
        h('span', null, 'GitHub'),
        h('span', { className: 'dim-githubArrow', 'aria-hidden': 'true' }, '↗')),
        h('span', {
          id: githubTooltipId,
          className: 'dim-githubTooltip',
          role: 'tooltip',
        }, '帮助与反馈 · 前往 GitHub')),
    ),
    h('div', { className: 'dim-layout' },
      h('nav', { className: 'dim-rail', role: 'tablist', 'aria-label': 'IM 渠道' },
        CHANNELS.map((channel) => h('button', {
          key: channel.id,
          type: 'button',
          role: 'tab',
          id: `dim-tab-${channel.id}`,
          className: 'dim-channel',
          'aria-selected': channel.id === active.id,
          'aria-controls': `dim-panel-${channel.id}`,
          onClick: () => setSelected(channel.id),
        },
        h(ChannelLogo, { channel: channel.id }),
        h('span', { className: 'dim-channelCopy' },
          h('strong', null, channel.label),
          channel.note ? h('small', { className: 'dim-channelNote' }, channel.note) : null,
        )))),
      h('div', { className: 'dim-divider', 'aria-hidden': 'true' }),
      h('main', {
        className: 'dim-panel',
        role: 'tabpanel',
        id: `dim-panel-${active.id}`,
        'aria-labelledby': `dim-tab-${active.id}`,
      }, active.id === 'weixin'
        ? h(WeixinSettingsTab, { rpcCall: weixinRpcCall })
        : null),
    ),
  ));
}

export function apply(ctx) {
  ctx.effect(
    () => ctx.locale.register(IM_LOCALE_NAMESPACE, { zh, en }),
    'im-settings: bilingual dictionaries',
  );
  const t = ctx.locale.bind(IM_LOCALE_NAMESPACE);
  setImTranslator(t);

  ctx.effect(() => {
    const disposers = [
      installWeixinStyles(),
      installImStyles(),
    ];
    return () => {
      for (const dispose of disposers.reverse()) dispose();
    };
  }, 'im-settings: install combined channel styles');

  const weixinRpcCall = (endpoint, payload, signal) =>
    ctx.connection.rpc.call(WEIXIN_RPC_CHANNEL, endpoint, payload, signal);
  const workspaceDirectoryPicker = Object.freeze({
    listDirectory: (path, signal) => ctx.workspaces.listDirectory(path, signal),
    pickDirectory: () => ctx.workspaces.pickDirectory(),
  });

  ctx.slots.inject('settings.plugins.tab', () => ctx.slots.register({
    name: 'settings.plugins.tab',
    id: 'im',
    order: 20,
    label: () => t('IM机器人'),
    locale: IM_LOCALE_NAMESPACE,
    inject: () => ({
      weixinRpcCall,
      workspaceDirectoryPicker,
    }),
  }, IMSettingsTab));
}
