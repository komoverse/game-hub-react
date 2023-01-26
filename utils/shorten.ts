export const shortenWalletAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 3)}`;

export const shortenTitleGame = (title: string) => {
  if (title.length > 12) {
    return `${title.slice(0, 12)}...`;
  }
  return title;
};
