import { AlertColor } from '@mui/material/Alert';
import { WalletsDto } from './auth';
import { ListReviewsDto } from './game';
import { TypeAuthLogin } from './general';
import {
  HistoryTransactionDto,
  HistoryTransactionPaginationDto,
  ProfileDto,
} from './home';

export interface ReduxState {
  market: { [key: string]: Array<string> };
  pagination: {
    page: number;
  };
  detailNft: object;
  sidebar: {
    value: Array<{}>;
  };
  modalAuth: {
    visible: boolean;
    modalType: 'LOGIN' | 'REGISTER' | 'FORGOT_PASSWORD' | 'RESET_PASSWORD';
  };
  modalWallet: {
    display: boolean;
    modalType: 'ATTACH' | 'PIN' | 'INITIAL';
  };
  wallets: WalletsDto;
  login: TypeAuthLogin;
  profile: ProfileDto;
  reviews: ListReviewsDto;
  toast: {
    display: boolean;
    message: string;
    type: AlertColor;
  };
  transactionHistory: {
    source: 'HISTORY_TRANSACTION' | 'ACTIVITY';
    data: HistoryTransactionDto[];
    pagination: HistoryTransactionPaginationDto;
  };
}
