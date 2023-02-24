import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PublicKey } from '@solana/web3.js';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

import { attachWalletAddress } from '@/services/auth/wallet';
import actionModalWallet from '@/store/modalWallet/action';
import actionToast from '@/store/toast/action';

import RegistrationInput from '../Register/InputForm/RegistrationInput';
import { RegistrationCustomInput } from '../Register/InputForm/styles';
import { StyledForm } from './styles';

const FormConnectWallet = () => {
  const validationSchema = Yup.object().shape({
    wallet_pubkey: Yup.string().required('Wallet address required'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function validateSolAddress(address: string) {
    try {
      let pubkey = new PublicKey(address);
      let isSolana = PublicKey.isOnCurve(pubkey.toBuffer());
      return isSolana;
    } catch (error) {
      return false;
    }
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: attachWalletAddress,
    onSuccess(data) {
      actionModalWallet.setModalWallet({
        display: false,
        modalType: 'INITIAL',
      });
    },
    onError(error: any) {
      const { messages } = error.response.data;

      actionToast.setToast({ display: true, message: messages, type: 'error' });
    },
  });

  const onSubmit = (values: any) => {
    const isValidAddr = validateSolAddress(values.wallet_pubkey);

    if (!isValidAddr) {
      setError(
        'wallet_pubkey',
        { type: 'focus', message: 'Invalid wallet address' },
        { shouldFocus: true }
      );
      return;
    }

    mutate(values);
  };

  const submit = handleSubmit(onSubmit);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <StyledForm onSubmit={submit}>
        <Typography variant="body2">
          Solana Wallet created public key
        </Typography>

        <RegistrationInput
          id="wallet_pubkey"
          required={false}
          error={errors['wallet_pubkey']}
        >
          <RegistrationCustomInput {...register('wallet_pubkey')} />
        </RegistrationInput>

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          disabled={!isValid}
          loading={isLoading}
          sx={{
            marginTop: '24px',
            color: '#fff',
            background:
              'radial-gradient(293.74% 1431.43% at -18.64% -62.88%, #99EC13 0%, #088F2E 63.54%, #054D19 100%)',
            borderRadius: 1,
          }}
        >
          Continue
        </LoadingButton>
      </StyledForm>
    </Box>
  );
};

export default FormConnectWallet;
