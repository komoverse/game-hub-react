export interface PhaseDto {
  allowlist: string;
  candy_machine_id: string;
  created_at: string;
  currency: string;
  game_id: string;
  id: number;
  learn_more_url: string;
  mint_end_date: string;
  mint_price: number;
  mint_start_date: string;
  nft_sample_url: string;
  phase_name: string;
  supply: number;
}

export interface MintPhaseDto {
  candy_machine_address: string;
  cm_collection_title: string;
  cm_update_authority: string;
  game_id: string;
  mint_guide_url: string;
  nft_sample_url: string;
  phase: PhaseDto[];
}

export type ReviewsMonthlyStatsDto = {
  average_rating: number;
  review_month: string;
};

export type ReviewsDto = {
  comment: string;
  created_at: string;
  dislike_count: number | string;
  game_id: string;
  id: number;
  komo_username: string;
  like_count: number | string;
  rating: number;
  review_comment_count: number;
  reviewer_picture_url: string;
  like: boolean;
  dislike: boolean;
};

export type SummaryDto = {
  overall_rating: number;
  total_reviews: number;
};

export type OverallSumaryDto = {
  overall_rating: number;
  total_reviews: number;
};

export type RatingSummaryDto = {
  rating: number;
  total_rating: number;
};

export type LikeDislikeByMeDto = {
  id: number;
  game_review_id: number;
  komo_username: string;
  like: number;
  dislike: number;
  created_at: string | null;
  updated_at: string | null;
  game_reviews: {
    id: number;
    komo_username: string;
    game_id: number;
    rating: number;
    comment: string;
    reviewer_picture_url: string;
    created_at: string | string;
  };
};

export type ReviewByMeDto = {
  id: number;
  komo_username: string;
  game_id: string;
  rating: number;
  comment: string;
  reviewer_picture_url: string;
  created_at: string;
  like_comment_count: number;
  dislike_comment_count: number;
};

export interface ListReviewsDto {
  disliked_by_me: LikeDislikeByMeDto[] | null;
  liked_by_me: LikeDislikeByMeDto[] | null;
  monthly_stats: ReviewsMonthlyStatsDto;
  overall_summary: OverallSumaryDto;
  rating_summary: RatingSummaryDto[];
  reviews: {
    current_page: number;
    data: ReviewsDto[];
    next_page: number | null;
    total_data: number;
    total_page: number;
  };
  reviewed_by_me: ReviewByMeDto | null;
  summary: SummaryDto;
  length: number;
}

export interface ReviewFormDto {
  rating: number;
  comment: string;
}

export interface TwitterInsightDto {
  month_year: string;
  max_follower: number;
}

export interface DiscordInsightDto extends TwitterInsightDto {
  max_member: number | null;
  max_active: number | null;
}

export type TelegramInsightDto = DiscordInsightDto;

export interface InsightDto {
  data: {
    game_id: string;
    twitter_followers: number;
    discord_member: number;
    discord_active: number;
    telegram_member: number;
    telegram_active: number;
    updated_at: string;
    twitter_percent_changes: number;
    discord_percent_changes: number;
    discord_percent_active: number;
    telegram_percent_changes: number;
    telegram_percent_active: number;
  };
  graph: {
    twitter: TwitterInsightDto[];
    discord: DiscordInsightDto[];
    telegram: TelegramInsightDto[];
  };
}

export type GameDto = {
  id: number;
  game_id: string;
  type: string;
  value: string;
  created_at: string;
  updated_at: string;
};

export enum GameType {
  WEBGL = 'webGL',
  WINDOWS_X86 = 'windows_x86',
  WINDOWS_X64 = 'windows_x64',
  WINDOWS = 'windows_any',
  LINUX_DEB = 'linux_deb',
  LINUX_RPM = 'linux_rpm',
  LINUX_SOURCE = 'linux_source',
  MACOS = 'macOS',
  ANDROID_APK = 'android_apk',
  GOOGLE_PLAY_STORE = 'google_play_store',
  APPLE_APP_STORE = 'apple_app_store',
  XBOX_GAME_STORE = 'xbox_game_store',
  PLAYSTATION_STORE = 'playstation_store',
  NINTENDO_STORE = 'nintendo_store',
  EXTERNAL_URL = 'external_url',
}

export type GameListDto = {
  game_id: string;
  game_name: string;
  genre: string;
  description: string;
  logo_image_url: string;
  hero_banner_url: string;
  developer_name: string;
  web_url: string;
  twitter_url: string;
  discord_url: string;
  telegram_url: string;
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  trailer_url: string;
  created_at: string;
  review_rating: number | null;
};
