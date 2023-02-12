import React from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { COLOR } from '@/utils/globalVariable'
import { Snackbar } from '@mui/material'
import { ToastProps, TypeMessage } from '@/types/general';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ open, setOpen, message, position, type }: ToastProps) => {
  const vertical = position?.vertical
  const horizontal = position?.horizontal

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const border = type === TypeMessage.ERROR ?
    `1px solid ${COLOR.baseError}` : type === TypeMessage.SUCCESS ?
      `1px solid ${COLOR.baseGreen}` : ''

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
    >
      <Alert
        sx={{
          width: '100%',
          background: COLOR.baseSemiBlack,
          color: COLOR.baseWhite,
          border: border
        }}
        onClose={handleClose}
        icon={false}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default React.memo(Toast)