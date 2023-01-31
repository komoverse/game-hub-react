import komoverseAxiosIns from 'helper/headers';
import { SIDEBAR } from 'helper/url';
import { dataTransformer } from './helper';
import action from '@/store/sidebar/action';

export const getSidebarMenu = async () => {
  const { data } = await komoverseAxiosIns.get(SIDEBAR);
  action.setSideabar(data.data);
  return dataTransformer(data.data);
};
