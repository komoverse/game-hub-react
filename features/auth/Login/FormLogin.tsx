import React from 'react';
import { FormProvider, Iconify, TextFieldComponent } from '@/components/index';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from '@mui/material';
import { t } from 'i18next';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useResponsive from '@/hooks/useResponsive';
import { FormProvider, Iconify, TextFieldComponent } from '@/components/index';
import { MutationKey } from '@/types/general';
import { LoginDto } from '@/types/auth';
import { webLogin } from '@/services/auth';
import actionToast from '@/store/toast/action';
import actionLogin from '@/store/auth/action';
import actionModalAuth from '@/store/modalAuth/action';

import { logindDfaultValues, LoginSchema } from './schema';
import InputCheckBox from '@/components/Form/InputCheckBox';

function getErrorMessage(error: any) {
  const errorKey = Object.keys(error.response.data.messages)[0];

  return error.response.data.messages[errorKey];
}

const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const smDown = useResponsive('down', 'sm');

  const { mutate, isLoading } = useMutation({
    mutationKey: MutationKey.WEB_LOGIN,
    mutationFn: (data: LoginDto) => webLogin(data),
    onSuccess: (data) => {
      actionLogin.setAuthLogin(data);
      actionModalAuth.clearModalAuth();
    },
    onError: (error: any) => {
      const message = getErrorMessage(error);
      actionToast.setToast({
        display: true,
        message: message,
        type: 'error',
      });
    },
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: logindDfaultValues,
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const handleLoginWeb = (data: LoginDto) => {
    mutate(data);
  };

  const handleRegister = () =>
    actionModalAuth.setModalAuth({
      modalType: 'REGISTER',
      visible: true,
    });

  const handleForgotPassword = () =>
    actionModalAuth.setModalAuth({
      modalType: 'FORGOT_PASSWORD',
      visible: true,
    });

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleLoginWeb)}>
      <Box sx={{ width: !smDown ? '300px' : '250px' }}>
        <Stack spacing={2}>
          <TextFieldComponent name="komo_username" label={t('form.username')} />
          <TextFieldComponent
            name="password"
            label={t('form.password')}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="end"
        sx={{ my: 1 }}
      >
        <Link
          variant="subtitle2"
          underline="hover"
          color={COLOR.baseLightTextGray}
          fontWeight={500}
          sx={{ cursor: 'pointer' }}
          onClick={() => handleForgotPassword()}
        >
          {t('auth.forgotPassword')}
        </Link>
      </Stack>
      <Stack direction="row">
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="outlined"
          sx={{ mr: 1, borderRadius: RADIUS.small }}
          onClick={() => handleRegister()}
        >
          {t('auth.register')}
        </Button>
        <LoadingButton
          sx={{
            ml: 1,
            color: COLOR.baseWhite,
            borderRadius: RADIUS.small,
          }}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isLoading}
        >
          {t('navbar.login')}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
};

export default FormLogin;
