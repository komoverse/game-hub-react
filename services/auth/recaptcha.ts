import axios from 'axios';

export const validateRecaptcha = async (body: { token: string }) => {
  const { data } = await axios.post('/api/recaptcha', body);
  return data.data;
};
