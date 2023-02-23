import komoverseAxiosIns from '@/helper/headers';
import { USER_REGISTER } from '@/helper/url';

export const userRegister = async (body: string) => {
  const { data } = await komoverseAxiosIns.post(USER_REGISTER, body);
  return data;
};
