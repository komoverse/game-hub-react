import _intersection from 'lodash.intersection';

import { IFilterOption } from './types';

export function mapFilters(
  data: Array<{
    nft: {
      attributes_array: Array<{ [key: string]: string }>;
    };
  }>
) {
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

export function flattenMarketItemsAttributes(data: any) {
  return data.map((item: any) => {
    const attrs = item.nft.attributes_array.flat();
    let finalAttrs: string[] = [];

    attrs.forEach((el: any) => {
      finalAttrs.push(el.value);
    });

    return {
      ...item,
      attributes: finalAttrs,
    };
  });
}

function sortByDate(data: any, sortKey: string) {
  switch (sortKey) {
    case 'DATE_DESC':
      return data.sort(function (a: any, b: any) {
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
      return data.sort(function (a: any, b: any) {
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
      break;
  }
}

function sortByPrice(data: any, sortKey: string) {
  switch (sortKey) {
    case 'PRICE_DESC':
      return data.sort((a: any, b: any) => b.price - a.price);
    case 'PRICE_ASC':
      return data.sort((a: any, b: any) => a.price - b.price);
    default:
      break;
  }
}

export function mapMarketItems(
  data: any,
  selectedFilter: string[],
  searchKeyword: string,
  sortKey: string,
  isDisplayUserItems: boolean,
  userWalletAddres: string
) {
  let finalItems: any[] = [];
  finalItems = flattenMarketItemsAttributes(data);

  finalItems = finalItems.filter((item: any) => {
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

  if (isDisplayUserItems && userWalletAddres) {
    finalItems = finalItems.filter(
      (item) => item.seller_address === userWalletAddres
    );
  }

  return finalItems;
}
