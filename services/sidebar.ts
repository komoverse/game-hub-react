import komoverseAxiosIns from "helper/headers";
import { SIDEBAR } from "helper/url";

export const getSidebarMenu = async () => {
  const { data } = await komoverseAxiosIns.get(SIDEBAR);
  return { data: data.data };
};
