import Cookies from 'js-cookie';
import isEmpty from 'lodash/isEmpty';
import encryption from './encryption';

const secureCookie = {
  getCookie: (name: string) => {
    const data = Cookies.get(encryption.encryptWithMD5(name));
    let state;
    if (!isEmpty(data)) {
      const result = encryption.decryptWithAES(data as string);
      try {
        state = JSON.parse(result);
      } catch (error) {
        state = result;
      }

      return state;
    }
  },
  setCookie: (name: string, data: any, expired?: any) => {
    return Cookies.set(
      encryption.encryptWithMD5(name),
      encryption.encryptWithAES(data),
      expired
    );
  },
  clearCookie: (name: string) => {
    return Cookies.remove(encryption.encryptWithMD5(name));
  },
};

export default secureCookie;
