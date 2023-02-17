import lang from './language/reducer';
import detailNft from './detailNft/reducer';
import transactionHistory from './historyTransaction/reducer';
import pagination from './pagination/reducer';
import sidebar from './sidebar/reducer';
import market from './market/reducer';
import modalAuth from './modalAuth/reducer';
import wallets from './wallets/reducer';
import login from './auth/reducer';

const reducers = {
  lang,
  detailNft,
  transactionHistory,
  pagination,
  sidebar,
  market,
  modalAuth,
  wallets,
  login,
};

export default reducers;
