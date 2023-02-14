import komoverseAxiosIns from 'helper/headers';
import { SLIDESHOW } from 'helper/url';

export const getSlideshow = async () => {
  const { data } = await komoverseAxiosIns.get(SLIDESHOW);
  return data.data;
};
