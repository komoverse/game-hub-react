import React from 'react';
import { Box, DialogContent, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import { FormProvider, TextFieldComponent } from '@/components/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordDefaultValues, ForgotPasswordSchema } from './schema';
import { LoadingButton } from '@mui/lab';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import actionModalAuth from '@/store/modalAuth/action';
import { useMutation } from 'react-query';
import { MutationKey } from '@/types/general';
import { forgotPassword } from '@/services/auth';
import actionToast from '@/store/toast/action';
import { ForgotPasswordDto } from '@/types/auth';

const ForgotPassword = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: MutationKey.FORGOT_PASSWORD,
    mutationFn: (email: ForgotPasswordDto) => forgotPassword(email!),
    onSuccess: (data) => {
      const { messages } = data;
      actionModalAuth.clearModalAuth();
      actionToast.setToast({
        display: true,
        message: messages,
        type: 'success',
      });
    },
  });

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: forgotPasswordDefaultValues,
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;

  const handleForgotPassword = (email: ForgotPasswordDto) => mutate(email);

  return (
    <DialogContent sx={{ textAlign: 'center' }}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">
          {t('auth.forgotPasswordDescription')}
        </Typography>
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(handleForgotPassword)}
        >
          <Stack spacing={2}>
            <TextFieldComponent name="email" label={t('form.email')} />
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
                {t('button.continue')}
              </LoadingButton>
            </Box>
          </Stack>
        </FormProvider>
      </Stack>
    </DialogContent>
  );
};

export default ForgotPassword;
