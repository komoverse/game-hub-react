export interface ListFeaturedDto {
  id: string;
  video_title: string;
  thumbnail_url: string;
  youtube_url: string;
  created_at: string;
}

export interface ListRecentDto {
  created_at: string;
  image_url: string;
  listing_currency: number;
  listing_id: string;
  listing_price: string;
  name: string;
  seller_address: string;
}

export interface ScheduleEvents {
  type: EventTypes;
  game_id: string;
  game_name: string;
  logo_image_url: string;
  start_time: string;
  end_time: string;
  tournament_name: string;
}

export interface MintScheduleDto extends ScheduleEvents {
  phase_name: string;
  mint_start_date: string;
  mint_end_date: string;
}

export interface TournamentScheduleDto extends ScheduleEvents {
  tournament_id: string;
  tournament_name: string;
  start_time: string;
  end_time: string;
}

export enum EventTypes {
  MINTS = 'mint_schedule',
  TOURNAMENTS = 'tournament',
}

export interface ProfileDto {
  country: string;
  email: string;
  game_newsletter_subscribe: number;
  in_game_display_name: string;
  is_verified: number;
  komo_username: string;
  primary_language: string;
  profile_picture_url: string | null;
  sc_wallet_fail_count: number;
  semi_custodial_wallet_pubkey: string;
  shard: number;
  wallet_pubkey: string;
}
