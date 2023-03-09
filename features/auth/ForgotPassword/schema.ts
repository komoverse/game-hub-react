import { ForgotPasswordDto, ResetPasswordDto } from '@/types/auth';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const forgotPasswordDefaultValues: ForgotPasswordDto = {
  email: '',
};

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  password_confirmation: Yup.string()
    .required('Confirm password is required')
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
});

const resetPasswordDefaultValues: ResetPasswordDto = {
  password: '',
  password_confirmation: '',
};

export {
  ForgotPasswordSchema,
  forgotPasswordDefaultValues,
  ResetPasswordSchema,
  resetPasswordDefaultValues,
};
