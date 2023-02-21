import { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { emailValidation, komoAccountUsernameValidation } from '@/utils/regex';
import { userRegister } from '@/services/auth/register';
import { validateRecaptcha } from '@/services/auth/recaptcha';
import actionLogin from '@/store/auth/action';

function useRegistrationAccount() {
  const recaptchaRef = useRef<any>(null);
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false);

  const validateRecaptchaMutation = useMutation({
    mutationFn: validateRecaptcha,
    onSuccess() {
      setIsRecaptchaValid(true);
    },
    onError(error: any) {
      console.log('🚀 ~ onError ~ error:', error);
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
        .required('Username is required')
        .matches(
          komoAccountUsernameValidation,
          'Please input a valid username'
        ),
      email: Yup.string()
        .required('Password is required')
        .matches(emailValidation, 'Please input a valid email address'),
      password: Yup.string().required('Password is required'),
      confirm_password: Yup.string()
        .required('password is required')
        .when('password', (password, schema, confirm_password) => {
          if (!password || !confirm_password.value) {
            return schema.required();
          }
          return schema.test(
            'password confirm',
            'your password did not match',
            (value) => {
              return value === password[0];
            }
          );
        }),
      country_code: Yup.string().required('Country is required'),
      is_agree_to_policy: Yup.bool().oneOf([true], 'Field must be checked'),
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
    },
    onError(error: any) {
      console.log('🚀 ~ onError ~ error:', error);
    },
  });

  async function onSubmit(values: any) {
    const payload = {
      ...values,
      game_newsletter_subscribe: values.game_newsletter_subscribe ? 1 : 0,
    };
    console.log('🚀 ~ onSubmit ~ payload:', payload);
    // registrationMutation.mutate(payload);
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
