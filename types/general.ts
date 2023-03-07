import { InsightDto } from './game';

export type ModalTProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export enum TypeMessage {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export type ToastProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  position?: {
    vertical: any;
    horizontal: any;
  };
  type?: 'warning' | 'success' | 'error' | 'info';
};

export interface ErrorResponseDto {
  status: number | string;
  message: string;
}

export enum TopPlayersRowClassnames {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
  FOURTH = 'fourth',
  MORE_THAN_FOUR = 'more-than-four',
}

export enum TopPlayersCellClassnames {
  RANK = 'rank',
  PLAYER_NAME = 'player-name',
  SCORE = 'score',
}

export enum Provider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  DISCORD = 'discord',
}

export type TypeAuthLogin = {
  success: boolean;
  message?: string;
  token?: string;
};

export type SSLoginProps = {
  query: {
    success: boolean;
    token: string;
    message: string;
  };
};

export enum QueryKey {
  LIST_REVIEWS = 'listReviews',
  LIST_FEATURED = 'listFeatured',
  LIST_MARKET_RECENT = 'listMarketRecent',
  GET_MARKET_ITEM_BY_ID = 'getMarketItemById',
  LIST_COUNTRY_CODE = 'listCountryCode',
  LIST_MINT_PHASE = 'listMintPhase',
  GAME_DETAILS = 'gameDetails',
  MARKET_COLLECTION = 'marketCollection',
  COLLECTION_ITEMS = 'collectionItems',
  SEARCH_CONTENT = 'searchContent',
  SIDEBAR_MENU = 'sidebarMenu',
  PORTFOLIO = 'portfolio',
  PROFILE = 'profile',
  SLIDESHOW = 'slideshow',
  GAME_INSIGHT = 'gameInsight',
  MARKET_ACTIVITY = 'gameMarketActivity',
}

export enum MutationKey {
  LIKE_REVIEW = 'likeReview',
  DISLIKE_REVIEW = 'dislikeReview',
  SUBMIT_REVIEW = 'submitReview',
  LOGIN_SOCMED = 'loginSocmed',
  WEB_LOGIN = 'webLogin',
  EDIT_REVIEW = 'editReview',
}

export type ChartProps = {
  data: InsightDto | any;
  source: string;
};

export enum Socmed {
  DISCORD = 'discord',
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
}

export type TooltipChartProps = {
  active: boolean;
  payload: any;
  label: string;
};
