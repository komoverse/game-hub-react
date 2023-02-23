export const currency = (value: number, format: string, currency: string) => {
  return Intl.NumberFormat(format, {
    style: 'currency',
    currency,
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(value as number);
};
