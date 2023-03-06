export interface IGameDetails {
  game_id: string;
  game_name: string;
  genre: string;
  description: string;
  logo_image_url: string;
  hero_banner_type: string;
  hero_banner_url: string;
  developer_name: string;
  twitter_url?: string;
  discord_url?: string;
  telegram_url?: null;
  web_url?: string;
  facebook_url?: string;
  trailer_url?: string;
  created_at: null;
  updated_at: null;
}

export interface ITournament {
  tournament_id: string;
  game: IGameDetails;
  tournament_name: string;
  description: string;
  start_time: string;
  end_time: string;
  tournament_type: 'single_elimination' | 'leaderboard' | 'round_robin';
  participant_limit: number;
  prize_pool?: string;
  image_url?: string;
}

export interface ITournamentSingleElimination {
  round_no: number;
  match_no: number;
  next_match_no: number | null;
  participant: {
    komo_username: string;
    placeholder: string;
    status: 'W' | 'L';
  }[];
}

export interface ITournamentLeaderboard {
  column_leaderboard: string[];
  leaderboard_result: { [key: string]: string | number | boolean }[];
}

export interface ITournamentRoundRobin {
  standings: { [key: string]: { win: number; lose: number } };
  schedule: {
    id: number;
    round_no: number;
    match_no: number;
    placeholder_A: string;
    placeholder_B: string;
    komo_username_A: string;
    komo_username_B: string;
    match_winner: string | 'X';
  }[];
}

export interface ITournamentResult {
  status: string;
  tournament_data: Omit<ITournament, 'game'>;
  tournament_result:
    | ITournamentSingleElimination[]
    | ITournamentLeaderboard
    | ITournamentRoundRobin;
}
