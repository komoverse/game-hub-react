import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReduxState } from '@/types/redux';
import { useSelector } from 'react-redux';

import { COLOR } from '@/utils/globalVariable';
import actionModalWallet from '@/store/modalWallet/action';

import FormConnectWallet from './FormConnectWallet';
import { StyledDivider, styleButton } from './styles';
import FormCreatePin from './FormCreatePin';
import { t } from 'i18next';

const WalletAndPinModal = () => {
  const { display: isDisplay, modalType } = useSelector(
    (state: ReduxState) => state.modalWallet
  );

  const changeModal = (type: string) => {
    actionModalWallet.setModalWallet({ modalType: type, display: true });
  };

  return (
    <Dialog
      sx={{
        '& .MuiDialog-container': {
          height: '100vh',
          alignItems: 'flex-start',
        },
        '& .MuiDialog-paper': {
          width: '443px',
          backgroundColor: COLOR.backgroundRoot,
          borderRadius: 3,
          border: `1px solid ${COLOR.borderSemiBlack}`,
        },
      }}
      open={isDisplay}
    >
      <DialogContent
        sx={{
          backgroundColor: COLOR.baseSemiBlack,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src="/logo.svg"
          alt="komoverse-logo"
          height={66}
          width={138}
          priority={true}
        />
        {modalType === 'INITIAL' && (
          <Box sx={{ width: 300 }} mt={4}>
            <Button
              onClick={() => changeModal('ATTACH')}
              size="large"
              sx={styleButton}
              fullWidth
            >
              {t('auth.connectWallet')}
            </Button>
            <StyledDivider>{t('auth.or')}</StyledDivider>
            <Button
              onClick={() => changeModal('PIN')}
              size="large"
              sx={styleButton}
              fullWidth
            >
              {t('auth.createPin')}
            </Button>
          </Box>
        )}
        {modalType === 'ATTACH' && <FormConnectWallet />}
        {modalType === 'PIN' && <FormCreatePin />}
      </DialogContent>
    </Dialog>
  );
};

export default WalletAndPinModal;
