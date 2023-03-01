import _intersection from 'lodash.intersection';

import { IMarketItem } from '@/types/game/market';

import { IFilterOption, IMappedMarketItem } from './types';

export function mapFilters(data: IMarketItem[] | undefined) {
  if (!data) {
    return {};
  }
  const attrs = data.map((item) => item.nft.attributes_array).flat();

  let finalAttrs: IFilterOption = {};

  attrs.forEach((el) => {
    if (finalAttrs[el.trait_type] === undefined) {
      finalAttrs = {
        ...finalAttrs,
        [el.trait_type]: { values: [el.value] },
      };
    } else {
      if (!finalAttrs[el.trait_type].values.includes(el.value)) {
        finalAttrs[el.trait_type].values.push(el.value);
      }
    }
  });

  return finalAttrs;
}

export function flattenMarketItemsAttributes(data: IMarketItem[] | undefined) {
  if (!data) {
    return [];
  }

  return data.map((item: IMarketItem) => {
    const attrs = item.nft.attributes_array.flat();
    let finalAttrs: string[] = [];

    attrs.forEach((el) => {
      finalAttrs.push(el.value);
    });

    return {
      ...item,
      attributes: finalAttrs,
    };
  });
}

function sortByDate(data: IMappedMarketItem[], sortKey: string) {
  switch (sortKey) {
    case 'DATE_DESC':
      return data.sort(function (a, b) {
        var key1 = new Date(a.created_at);
        var key2 = new Date(b.created_at);

        if (key1 < key2) {
          return -1;
        } else if (key1 == key2) {
          return 0;
        } else {
          return 1;
        }
      });
    case 'DATE_ASC':
      return data.sort(function (a, b) {
        var key1 = new Date(a.created_at);
        var key2 = new Date(b.created_at);

        if (key1 > key2) {
          return -1;
        } else if (key1 == key2) {
          return 0;
        } else {
          return 1;
        }
      });
    default:
      return [];
  }
}

function sortByPrice(data: IMappedMarketItem[], sortKey: string) {
  switch (sortKey) {
    case 'PRICE_DESC':
      return data.sort((a, b) => b.price - a.price);
    case 'PRICE_ASC':
      return data.sort((a, b) => a.price - b.price);
    default:
      return [];
  }
}

export function mapMarketItems(
  data: IMarketItem[] | undefined,
  selectedFilter: string[],
  searchKeyword: string,
  sortKey: string,
  isDisplayUserItems: boolean,
  userWalletAddres: string,
  semiCustodialWalletAddress: string
) {
  let finalItems: IMappedMarketItem[] = [];
  finalItems = flattenMarketItemsAttributes(data);

  finalItems = finalItems.filter((item) => {
    console.log('🚀 ~ finalItems=finalItems.filter ~ item:', item);
    const intersect = _intersection(selectedFilter, item.attributes);

    if (intersect.length !== 0 && selectedFilter !== undefined) {
      return item;
    }

    if (selectedFilter === undefined || selectedFilter.length === 0) {
      return item;
    }
  });

  finalItems = finalItems.filter((item) =>
    item.nft.name.includes(searchKeyword.toLowerCase())
  );

  if (sortKey.includes('PRICE')) {
    finalItems = sortByPrice(finalItems, sortKey);
  }

  if (sortKey.includes('DATE')) {
    finalItems = sortByDate(finalItems, sortKey);
  }

  if (isDisplayUserItems && (userWalletAddres || semiCustodialWalletAddress)) {
    finalItems = finalItems.filter(
      (item) =>
        item.seller_address === userWalletAddres ||
        item.seller_address === semiCustodialWalletAddress
    );
  }

  return finalItems;
}
