export function gameDetailsTransformer(data: any) {
  return {
    ...data.data,
    tabsEnabled: data.tabs_enabled,
  };
}

export function gameMarketItemsTransformer(data: any) {
  return {
    ...data.data,
  };
}
