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
