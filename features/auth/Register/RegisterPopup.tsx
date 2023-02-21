import Dialog from '@mui/material/Dialog';

import { COLOR } from '@/utils/globalVariable';
import FormRegistrationAccount from './FormRegistrationAccount';

const RegisterPopup = () => {
  return (
    <Dialog
      open={true}
      sx={{
        '& .MuiDialog-paper': {
          width: '502px',
          backgroundColor: COLOR.backgroundRoot,
          backgroundImage: 'none',
          borderRadius: '10px',
          padding: '36px 42px',
        },
      }}
    >
      <FormRegistrationAccount />
      {/* <RegisterFormInput
          id="wallet_pubkey"
          label="Solana Wallet Address (optional)"
          required={false}
          error={undefined}
        >
          <StyledInput {...register('wallet_pubkey')} />
        </RegisterFormInput>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              size="small"
              sx={{
                marginTop: '8px',
                color: COLOR.baseGreen,
                background: '#1F1F1F',
                border: '0.3px solid #646464',

                '&:hover': {
                  background: '#1F1F1F',
                },
              }}
            >
              Connect Phantom Wallet
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="caption">
              or manually copy wallet address if you&lsquo;re not using Phantom
            </Typography>
          </Grid>
        </Grid> */}
    </Dialog>
  );
};

export default RegisterPopup;
