import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { Dialog, DialogContent } from '@mui/material';

import { COLOR } from '@/utils/globalVariable';
import actionModalAuth from '@/store/modalAuth/action';

import LoginOption from './Login/LoginOption';
import FormRegistrationAccount from './Register/FormRegistrationAccount';

const AuthModal = () => {
  const { visible: isVisible, modalType } = useSelector(
    (state: ReduxState) => state.modalAuth
  );
  const isLoginModal = modalType === 'LOGIN';

  const handleClose = () => actionModalAuth.setModalAuth({ visible: false });

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
      open={isVisible}
      onClose={handleClose}
    >
      <DialogContent sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        {isLoginModal ? <LoginOption /> : <FormRegistrationAccount />}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
