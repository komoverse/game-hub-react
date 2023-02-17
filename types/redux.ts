import { WalletsDto } from './auth';
import { TypeAuthLogin } from './general';

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
  modalAuth: {
    visible: boolean;
  };
  wallets: WalletsDto;
  login: TypeAuthLogin;
}
