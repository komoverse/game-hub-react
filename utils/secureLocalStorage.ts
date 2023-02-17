import isEmpty from 'lodash/isEmpty';
import encryption from './encryption';

const secureLocalStorage = {
  getItem: (name: string) => {
    const data =
      typeof window !== 'undefined' &&
      localStorage.getItem(encryption.encryptWithMD5(name));

    let state;
    if (!isEmpty(data)) {
      const result = encryption.decryptWithAES(data as any);
      try {
        state = JSON.parse(result);
      } catch (error) {
        state = result;
      }

      return state;
    }
  },
  setItem: (name: string, data: any) => {
    return localStorage.setItem(
      encryption.encryptWithMD5(name),
      encryption.encryptWithAES(data)
    );
  },
  clearItem: (name: string) => {
    return localStorage.removeItem(name);
  },
};

export default secureLocalStorage;
