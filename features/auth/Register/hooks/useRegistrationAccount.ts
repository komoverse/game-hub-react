import { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { emailValidation, komoAccountUsernameValidation } from '@/utils/regex';
import { userRegister } from '@/services/auth/register';
import { validateRecaptcha } from '@/services/auth/recaptcha';
import actionLogin from '@/store/auth/action';
import actionModalAuth from '@/store/modalAuth/action';
import actionModalWallet from '@/store/modalWallet/action';
import actionToast from '@/store/toast/action';
import { t } from 'i18next';

function useRegistrationAccount() {
  const recaptchaRef = useRef<any>(null);
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false);

  const validateRecaptchaMutation = useMutation({
    mutationFn: validateRecaptcha,
    onSuccess() {
      setIsRecaptchaValid(true);
    },
    onError() {
      return;
    },
  });

  async function onValidateRecaptcha() {
    const recaptchaValue = recaptchaRef.current?.getValue();
    validateRecaptchaMutation.mutate({ token: recaptchaValue });
  }

  function onExpiredRecaptcha() {
    setIsRecaptchaValid(false);
  }

  const validationSchema = Yup.object()
    .shape({
      komo_username: Yup.string()
        .required(t('form.required', { field: t('form.username') }) as string)
        .matches(
          komoAccountUsernameValidation,
          t('form.invalid', { field: t('form.username') }) as string
        ),
      email: Yup.string()
        .required(t('form.required', { field: t('form.email') }) as string)
        .matches(
          emailValidation,
          t('form.invalid', { field: t('form.email') }) as string
        ),
      password: Yup.string().required(
        t('form.required', { field: t('form.password') }) as string
      ),
      confirm_password: Yup.string()
        .required(
          t('form.required', { field: t('form.confirmPassword') }) as string
        )
        .when('password', (password, schema, confirm_password) => {
          if (!password || !confirm_password.value) {
            return schema.required();
          }
          return schema.test(
            'password confirm',
            t('form.notMatch', { field: t('form.password') }) as string,
            (value) => {
              return value === password[0];
            }
          );
        }),
      country_code: Yup.string().required(
        t('form.required', { field: t('form.country') }) as string
      ),
      is_agree_to_policy: Yup.bool().oneOf(
        [true],
        t('form.required', { field: 'This Field' }) as string
      ),
      game_newsletter_subscribe: Yup.bool(),
    })
    .required();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const registrationMutation = useMutation({
    mutationFn: userRegister,
    onSuccess(data) {
      actionLogin.setAuthLogin(data);
      actionModalAuth.clearModalAuth();
      actionModalWallet.setModalWallet({ display: true, modalType: 'INITIAL' });
    },
    onError(error: any) {
      const { messages } = error.response.data;

      actionToast.setToast({ display: true, message: messages, type: 'error' });
    },
  });

  async function onSubmit(values: any) {
    const payload = {
      ...values,
      game_newsletter_subscribe: values.game_newsletter_subscribe ? 1 : 0,
    };
    registrationMutation.mutate(payload);
  }

  const submit = handleSubmit(onSubmit);

  return {
    submit,
    register,
    isSubmitting: registrationMutation.isLoading,
    isValid,
    errors,
    getValues,
    recaptchaRef,
    isRecaptchaValid,
    onValidateRecaptcha,
    onExpiredRecaptcha,
  };
}

export default useRegistrationAccount;
