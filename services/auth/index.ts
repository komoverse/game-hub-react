import komoverseAxiosIns from '@/helper/headers';
import { SSO_GENERATE, WALLET_LOGIN, WEB_LOGIN } from '@/helper/url';
import { LoginDto, WalletsDto } from '@/types/auth';
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
  const params = `?komo_username=${value.komo_username}&password=${value.password}${otp}&remember_me=${value.remember_me}`;
  const { data } = await komoverseAxiosIns.post(WEB_LOGIN + params);

  return data;
};
