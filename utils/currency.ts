export const IDR = (value: number, format: string, currency: string) => {
  return Intl.NumberFormat(format, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value as number);
};
