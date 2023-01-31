export interface NftDetailDto {
  animation_url: string;
  attributes: {
    Armor: string;
    Head: string;
    Headpiece: string;
    Overlay: string;
    Weapon: string;
  };
  attributes_array: Array<{ trait_type: string; value: string }>;
  cached_animation_url: string;
  cached_image_uri: string;
  collection: {
    address: string;
    verified: boolean;
  };
  creators: Array<{ address: string; share: number; verified: boolean }>;
  description: string;
  external_url: string;
  files: Array<{ type: string; uri: string }>;
  image_uri: string;
  is_loaded_metadata: boolean;
  is_mutable: boolean;
  metadata_uri: string;
  mint: string;
  name: string;
  owner: string;
  primary_sale_happened: boolean;
  royalty: number;
  symbol: string;
  update_authority: string;
}

export interface MarketItemDto {
  created_at: string;
  currency_symbol: string;
  list_state: string;
  marketplace_address: string;
  network: string;
  nft: NftDetailDto;
  nft_address: string;
  price: number;
  receipt: string;
  seller_address: string;
  seller_username: string;
}
