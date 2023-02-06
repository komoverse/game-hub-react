export interface ReduxState {
  market: { [key: string]: Array<string> };
  pagination: {
    page: number;
  };
  detailNft: object;
  transactionHistory: object;
  sidebar: {
    value: Array<{}>;
  };
}
