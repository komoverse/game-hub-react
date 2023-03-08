import React from 'react';
import {
  Box,
  DialogContent,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { t } from 'i18next';
import { FormProvider, Iconify, TextFieldComponent } from '@/components/index';
import { LoadingButton } from '@mui/lab';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPasswordSchema, resetPasswordDefaultValues } from './schema';
import actionModalAuth from '@/store/modalAuth/action';
import { useMutation } from 'react-query';
import { MutationKey } from '@/types/general';
import { ResetPasswordDto } from '@/types/auth';
import { resetPassword } from '@/services/auth';
import Router, { useRouter } from 'next/router';
import actionToast from '@/store/toast/action';

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;
  const [showPassword, setShowPassword] = React.useState(false);

  const { mutate, isLoading } = useMutation({
    mutationKey: MutationKey.RESET_PASSWORD,
    mutationFn: (data: ResetPasswordDto) =>
      resetPassword(data!, token as string),
    onSuccess: (data) => {
      const { messages } = data;

      actionModalAuth.setModalAuth({
        modalType: 'LOGIN',
        visible: true,
      });

      actionToast.setToast({
        display: true,
        message: messages,
        type: 'success',
      });
      Router.replace('/');
    },
    onError: (error: any) => {
      actionToast.setToast({
        display: true,
        message: error.response.data.message.password[0],
        type: 'error',
      });
    },
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: resetPasswordDefaultValues,
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  const handleResetPassword = (data: ResetPasswordDto) => mutate(data);

  return (
    <DialogContent sx={{ textAlign: 'center' }}>
      <LockOutlinedIcon fontSize="large" />
      <Stack spacing={2}>
        <Typography variant="subtitle1">{t('auth.resetPassword')}</Typography>
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <Stack spacing={2}>
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
                        icon={
                          showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextFieldComponent
              name="password_confirmation"
              label={t('auth.confirmPassword')}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <Iconify
                        icon={
                          showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ textAlign: 'center' }}>
              <LoadingButton
                sx={{
                  color: COLOR.baseWhite,
                  borderRadius: RADIUS.small,
                  width: '50%',
                }}
                size="medium"
                type="submit"
                variant="contained"
                loading={isLoading}
              >
                {t('button.submit')}
              </LoadingButton>
            </Box>
          </Stack>
        </FormProvider>
      </Stack>
    </DialogContent>
  );
};

export default ResetPassword;
