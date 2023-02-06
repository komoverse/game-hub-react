import _intersection from "lodash.intersection";

import { IFilterOption } from "./types";

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

export function mapMarketItems(
  data: any,
  selectedFilter: string[],
  searchKeyword: string
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

  return finalItems;
}