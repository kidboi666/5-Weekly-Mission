import { formatDistanceToNowStrict, formatISO } from 'date-fns';

export function diffDate(target) {
  const result = formatDistanceToNowStrict(target, { addSuffix: true });
  return result;
}

export function formatDate(target) {
  const result = formatISO(target, {
    representation: 'date',
  });
  return result;
}
