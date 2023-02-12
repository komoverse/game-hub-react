import komoverseAxiosIns from '@/helper/headers';
import { SSO_LOGIN, WALLET_LOGIN } from '@/helper/url';
import { LoginSocmedDto, WalletsDto } from '@/types/auth';

export const loginSocmed = async (value: LoginSocmedDto) => {
  const { provider, token, otp } = value;
  const params = `?provider=${provider}&token=${token}`;

  const { data } = await komoverseAxiosIns.post(SSO_LOGIN + params);
  return data.data;
};

export const loginWallet = async (value: WalletsDto) => {
  const { account } = value;
  const params = `?wallet_pubkey=${account}`;

  const { data } = await komoverseAxiosIns.post(WALLET_LOGIN + params);
  return data.data;
};
