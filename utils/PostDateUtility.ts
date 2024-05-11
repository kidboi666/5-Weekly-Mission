export function formatDate(value: string) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

export function calculatePostTimeElapsed(value: string) {
  const now: Date = new Date();
  const date: Date = new Date(value);
  const timeDifference: number = (now.getTime() - date.getTime()) / 1000;

  const years: number = Math.floor(timeDifference / YEAR);
  const remainingAfterYears: number = timeDifference % YEAR;

  const months: number = Math.floor(remainingAfterYears / MONTH);
  const remainingAfterMonths: number = remainingAfterYears % MONTH;

  const days: number = Math.floor(remainingAfterMonths / DAY);
  const remainingAfterDays: number = remainingAfterMonths % DAY;

  const hours: number = Math.floor(remainingAfterDays / HOUR);
  const remainingAfterHours: number = remainingAfterDays % HOUR;

  const minutes: number = Math.floor(remainingAfterHours / MINUTE);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 1) {
    return `${Math.floor(timeDifference)} minutes ago`;
  } else return "1 minute ago";
}
