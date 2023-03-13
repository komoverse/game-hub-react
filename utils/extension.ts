export const getExtension = (url: string) => {
  const ext = url.split('.').pop();
  return ext;
};
