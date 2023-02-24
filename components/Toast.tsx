import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';

import actionToast from '@/store/toast/action';

const Toast = () => {
  const {
    display: isOpen,
    message,
    type,
  } = useSelector((state: ReduxState) => state.toast);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    actionToast.setToast({ display: false });
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default React.memo(Toast);
