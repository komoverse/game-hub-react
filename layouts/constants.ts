import { SidebarHeader } from './sidebar/types';

export const APPBAR_MOBILE = '64px';
export const APPBAR_DESKTOP = '70px';
export const SIDEBAR_WIDTH = '280px';

// TODO: change link for partnership and community
export const komoverseSocialMedia = [
  {
    header: 'resource',
    list: [
      // {
      //   icon: 'ph:handshake-fill',
      //   url: '/partnership',
      //   title: 'Apply for partnership',
      // },
      {
        icon: 'ic:round-people',
        url: 'https://discord.com/invite/komoverse',
        title: 'Join our Community',
      },
      {
        icon: 'mdi:twitter',
        url: 'https://twitter.com/komoverse',
        title: 'Follow us on Twitter',
      },
      {
        icon: 'simple-icons:gitbook',
        url: 'https://wiki.komoverse.io/',
        title: 'Check our komopedia',
      },
      {
        icon: 'ion:newspaper',
        url: '/news',
        title: 'News',
      },
      {
        icon: 'ic:outline-school',
        url: '/academy',
        title: 'Academy',
      },
      {
        icon: 'ri:code-box-fill',
        url: '/developers',
        title: 'Developers',
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
