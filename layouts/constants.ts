import { SidebarHeader } from './sidebar/types';

export const APPBAR_MOBILE = '64px';
export const APPBAR_DESKTOP = '70px';
export const SIDEBAR_WIDTH = '280px';

export const komoverseSocialMedia = [
  {
    header: 'resource',
    list: [
      {
        icon: 'ic:baseline-discord',
        url: 'https://discord.com/invite/komoverse',
        title: 'Join our community',
      },
      {
        icon: 'ri:facebook-fill',
        url: 'https://www.facebook.com/komoverse',
        title: 'Follow us on Facebook',
      },
      {
        icon: 'mdi:twitter',
        url: 'https://twitter.com/komoverse',
        title: 'Follow us on Twitter',
      },
      {
        icon: 'mdi:instagram',
        url: 'https://www.instagram.com/komoverse/',
        title: 'Follow us on Instagram',
      },
      {
        icon: 'tabler:speakerphone',
        url: '/news',
        title: 'News',
      },
      {
        icon: 'ph:handshake-fill',
        url: '/partnership',
        title: 'Partnership',
      },
      {
        icon: 'ic:outline-school',
        url: '/academy',
        title: 'Academy',
      },
    ],
  },
];

export const sidebarHeader: SidebarHeader = {
  mint_schedule: {
    icon: 'ic:outline-rocket-launch',
    title: 'mints',
    path: 'mint',
  },
  tournament: {
    icon: 'ic:outline-emoji-events',
    title: 'tournaments',
    path: 'tournament',
  },
  trending: {
    icon: 'ic:baseline-trending-up',
    title: 'trending',
    path: 'trending',
  },
  random_play_now: {
    icon: 'ic:outline-sports-esports',
    title: 'play now',
    path: 'play-now',
  },
  resource: {
    icon: 'ic:outline-school',
    title: 'resource',
    path: '',
  },
};
