import komoverseAxiosIns from '@/helper/headers';
import { SSO_GENERATE, SSO_LOGIN, WALLET_LOGIN } from '@/helper/url';
import { LoginSocmedDto, WalletsDto } from '@/types/auth';

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
