import komoverseAxiosIns from '@/helper/headers';
import { ATTACH_WALLET, CREATE_SEMI_CUSTODIAL_WALLET } from '@/helper/url';

export const attachWalletAddress = async (body: string) => {
  const { data } = await komoverseAxiosIns.post(ATTACH_WALLET, body);

  return data;
};

export const createSemiCustodialWallet = async (body: string) => {
  const { data } = await komoverseAxiosIns.post(
    CREATE_SEMI_CUSTODIAL_WALLET,
    body
  );

  return data;
};
