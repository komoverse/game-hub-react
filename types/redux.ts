export interface ReduxState {
  pagination: {
    page: number;
  };
  detailNft: object;
  transactionHistory: object;
  sidebar: {
    value: Array<{}>;
  };
}
