import komoverseAxiosIns from '@/helper/headers';
import {
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  SSO_GENERATE,
  WALLET_LOGIN,
  WEB_LOGIN,
} from '@/helper/url';
import {
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
  WalletsDto,
} from '@/types/auth';
import isEmpty from 'lodash/isEmpty';

export const loginSocmed = async (provider: string) => {
  const { data } = await komoverseAxiosIns.get(
    SSO_GENERATE.replace('{{provider}}', provider)
  );
  return data.data;
};

export const loginWallet = async (value: WalletsDto) => {
  const { account } = value;
  const params = `?wallet_pubkey=${account}`;
  const { data } = await komoverseAxiosIns.post(WALLET_LOGIN + params);
  return data.data;
};

export const webLogin = async (value: LoginDto) => {
  const otp = !isEmpty(value.otp) ? `&otp=${value.otp}` : '';
  const params = `?komo_username=${value.komo_username}&password=${value.password}${otp}`;
  const { data } = await komoverseAxiosIns.post(WEB_LOGIN + params);
  return data;
};

export const forgotPassword = async ({ email }: ForgotPasswordDto) => {
  const params = `?email=${email}`;
  const { data } = await komoverseAxiosIns.get(FORGOT_PASSWORD + params);
  return data;
};

export const resetPassword = async (value: ResetPasswordDto, token: string) => {
  const params = `?password=${value.password}&password_confirmation=${value.password_confirmation}&token=${token}`;
  const { data } = await komoverseAxiosIns.post(RESET_PASSWORD + params);
  return data;
};
