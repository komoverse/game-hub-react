import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import _isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(_isBetween);
dayjs.extend(relativeTime);

dayjs.tz.setDefault('Asia/Jakarta');

export function formatDate(date: string, format: string) {
  const formatedDate = dayjs(date).format(format);

  return formatedDate;
}

export function getCurrentDate() {
  const currentDate = dayjs().format('MMM D, YYYY');

  return currentDate;
}

export function isBetween(date: string, startDate: string, endDate: string) {
  const resDate = dayjs(date);

  return resDate.isBetween(startDate, endDate, 'day', '[)');
}

export function isBefore(date: string, startDate: string) {
  const resDate = dayjs(date);

  return resDate.isBefore(startDate);
}

export function getDiff(date: string, targetDate: string) {
  const resDate = dayjs(date);

  return resDate.diff(targetDate, 'day');
}

export function dateFromNow(date: string) {
  return dayjs(date).fromNow();
}
