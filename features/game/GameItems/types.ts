import { Dispatch, SetStateAction } from "react";

export interface IFilterOption {
  [key: string]: { values: Array<string>; isOpen?: boolean };
}

export interface IMarketItems {
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
    attributes: {
      Head: string;
      Headpiece: string;
      Armor: string;
      Weapon: string;
      Overlay: string;
    };
    attributes_array: {
      trait_type: string;
      value: string;
    }[];
  };
  list_state: string;
  created_at: string;
}

export interface ISidebarFilterProps {
  collections: any[];
  currCollection: string;
  setCurrCollection: Dispatch<SetStateAction<string>>;
  filters: { [key: string]: { values: Array<string>, isOpen?: boolean } };
}

export interface ISidebarFilterField {
  isOpen: boolean;
  attributes: string;
  options: string[];
  setExpand: () => void;
}

export interface ICollectionItemProps {
  image: string;
  name: string;
  volume: number;
  floor: number;
}
