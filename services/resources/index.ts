import komoverseAxiosIns from '@/helper/headers';
import { ACADEMY, NEWS } from '@/helper/url';

export const getAcademy = async (lang: string) => {
  const params = `?visibility=1&lang=${lang}`;
  const { data } = await komoverseAxiosIns.get(ACADEMY + params);
  return data.data;
};

export const getAcademyDetail = async (lang: string) => {
  const params = `?visibility=1&lang=${lang}`;
  const { data } = await komoverseAxiosIns.get(ACADEMY + params);
  return data.data;
};

export const getNews = async (lang: string) => {
  const params = `?visibility=1&lang=${lang}`;
  const { data } = await komoverseAxiosIns.get(NEWS + params);
  return data.data;
};
