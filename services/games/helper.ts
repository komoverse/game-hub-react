export function gemaDetailsTransformer(data: any) {
  return {
    ...data.data,
    tabsEnabled: data.tabs_enabled
  }
}