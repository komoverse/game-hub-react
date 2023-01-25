import komoverseAxiosIns from "helper/headers";
import { SIDEBAR } from "helper/url";
import { dataTransformer } from "./helper";

export const getSidebarMenu = async () => {
  const { data } = await komoverseAxiosIns.get(SIDEBAR);

  return dataTransformer(data.data);
};
