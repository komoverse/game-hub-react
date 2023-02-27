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
  dislike_comment_count: number;
  game_id: string;
  id: number;
  komo_username: string;
  like_comment_count: number;
  rating: number;
  review_comment_count: number;
  reviewer_picture_url: string;
};

export type SummaryDto = {
  overall_rating: number;
  total_reviews: number;
};

export interface ListReviewsDto {
  monthly_stats: ReviewsMonthlyStatsDto;
  reviews: {
    data: ReviewsDto[];
    total: number;
    to: number;
    current_page: number;
  };
  reviewed_by_me: string | null;
  summary: SummaryDto;
  length: number;
}

export interface ReviewFormDto {
  rating: number;
  comment: string;
}

export interface InsightDto {
  game_id: string;
  twitter_followers: number | null;
  discord_member: number | null;
  discord_active: number | null;
  telegram_member: number | null;
  telegram_active: number | null;
}
