export const formatFollowerCount = (count: number) => {
  if (count >= 1000000000) {
    return (count / 1000000000).toFixed(1) + 'b';
  } else if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'm';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  } else {
    return count?.toString();
  }
};
