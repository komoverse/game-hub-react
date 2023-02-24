import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

import { createSemiCustodialWallet } from '@/services/auth/wallet';
import actionModalWallet from '@/store/modalWallet/action';
import actionToast from '@/store/toast/action';

import RegistrationInput from '../Register/InputForm/RegistrationInput';
import { RegistrationCustomInput } from '../Register/InputForm/styles';
import { StyledForm } from './styles';

const FormCreatePin = () => {
  const validationSchema = Yup.object().shape({
    sc_wallet_pin: Yup.string().required('Wallet address required'),
    sc_wallet_pin_confirm: Yup.string()
      .required('Wallet address required')
      .when('sc_wallet_pin', (sc_wallet_pin, schema, sc_wallet_pin_confirm) => {
        if (!sc_wallet_pin || !sc_wallet_pin_confirm.value) {
          return schema.required();
        }
        return schema.test('pin confirm', 'your pin did not match', (value) => {
          return value === sc_wallet_pin[0];
        });
      }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: createSemiCustodialWallet,
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
        <Typography variant="body2">Input 6 digit PIN do not lose</Typography>

        <RegistrationInput
          id="sc_wallet_pin"
          required={false}
          error={errors['sc_wallet_pin']}
        >
          <RegistrationCustomInput {...register('sc_wallet_pin')} />
        </RegistrationInput>

        <RegistrationInput
          id="sc_wallet_pin_confirm"
          required={false}
          error={errors['sc_wallet_pin_confirm']}
        >
          <RegistrationCustomInput {...register('sc_wallet_pin_confirm')} />
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

export default FormCreatePin;
