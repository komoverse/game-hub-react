export interface IMarketCollection {
  collection_address: string;
  game_id: string;
  collection_name: string;
  thumbnail_url: string;
  num_items: number;
  num_holders: number;
  floor_price: number;
  volume: number;
  created_at: string;
  updated_at: string;
}

export interface IMarketItem {
  seller_address: string;
  price: number;
  currency_symbol: string;
  nft: {
    name: string;
    symbol: string;
    royalty: number;
    cached_image_uri: string;
    cached_animation_url: string;
    metadata_uri: string;
    description: string;
    collection: {
      address: string;
      verified: boolean;
    };
    attributes: { [key: string]: string };
    attributes_array: Array<{ trait_type: string; value: string }>;
  };
  list_state: string;
  status: string;
  created_at: string;
}
