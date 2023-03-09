import { LoginDto } from '@/types/auth';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  komo_username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  remember_me: Yup.bool(),
});

const logindDfaultValues: LoginDto = {
  komo_username: '',
  password: '',
  otp: '',
  remember_me: false,
};

export { LoginSchema, logindDfaultValues };
