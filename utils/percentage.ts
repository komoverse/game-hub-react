export const formatPercent = (percent: number, format: string) =>
  Intl.NumberFormat(format, {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(percent / 100);
