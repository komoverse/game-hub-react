import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { Dialog, DialogContent } from '@mui/material';

import { COLOR } from '@/utils/globalVariable';
import actionModalAuth from '@/store/modalAuth/action';

import LoginOption from './Login/LoginOption';
import FormRegistrationAccount from './Register/FormRegistrationAccount';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ForgotPassword/ResetPassword';

const AuthModal = () => {
  const { visible: isVisible, modalType } = useSelector(
    (state: ReduxState) => state.modalAuth
  );

  const renderModalAuth = () => {
    switch (modalType) {
      case 'LOGIN':
        return <LoginOption />;
      case 'REGISTER':
        return <FormRegistrationAccount />;
      case 'FORGOT_PASSWORD':
        return <ForgotPassword />;
      case 'RESET_PASSWORD':
        return <ResetPassword />;
      default:
        return null;
    }
  };

  const handleClose = () => actionModalAuth.setModalAuth({ visible: false });

  return (
    <Dialog
      sx={{
        '& .MuiDialogContent-root': {
          backgroundColor: COLOR.baseBackgroundLogin,
        },
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
      onClose={modalType !== 'RESET_PASSWORD' ? handleClose : undefined}
    >
      <DialogContent sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        {renderModalAuth()}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
