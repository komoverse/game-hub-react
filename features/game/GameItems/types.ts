import { Dispatch, SetStateAction } from 'react';

import { IMarketCollection } from '@/types/game/market';

export interface IFilterOption {
  [key: string]: { values: Array<string>; isOpen?: boolean };
}

export interface ISidebarFilterProps {
  collections: IMarketCollection[] | undefined;
  currCollection: string;
  setCurrCollection: Dispatch<SetStateAction<string>>;
  filters: { [key: string]: { values: Array<string>; isOpen?: boolean } };
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
