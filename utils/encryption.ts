import CryptoJS from 'crypto-js';

const passphrase = process.env.NEXT_PUBLIC_PASSPHRASE as string;

const encryption = {
  encryptWithMD5: (text: string) => {
    return CryptoJS.MD5(text + passphrase).toString();
  },
  encryptWithAES: (text: string) => {
    return CryptoJS.AES.encrypt(text.toString(), passphrase).toString();
  },
  decryptWithAES: (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    let originalText: any;
    try {
      originalText = bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      originalText = bytes.toString();
    }
    return originalText;
  },
};

export default encryption;
