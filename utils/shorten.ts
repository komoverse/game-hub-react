export const shortenWalletAddress = (address: string) =>
  `${address?.slice(0, 5)}...${address?.slice(address?.length - 3)}`;

export const shortenTitleGame = (title: string) => {
  if (title?.length > 12) {
    return `${title?.slice(0, 12)}...`;
  }
  return title;
};

export const shortenArbitraryText = (text: string, truncate: number) => {
  if (text.length > truncate) {
    return `${text.slice(0, truncate)}...`;
  }
  return text;
};

export const shortedDescription = (text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};
