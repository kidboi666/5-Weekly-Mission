export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

const HOURS = 60;
const DAYS = HOURS * 24;
const MONTH = DAYS * 30;
const YEARS = MONTH * 12;

export function calculatePostTimeElapsed(value) {
  const now = new Date();
  const date = new Date(value);
  const timeDifference = (now - date) / (1000 * 60);
  if (timeDifference < 2) {
    return "1 minute ago";
  } else if (timeDifference < HOURS) {
    return `${Math.floor(timeDifference)} minutes ago`;
  } else if (timeDifference < DAYS) {
    const hours = Math.floor(timeDifference / HOURS);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifference < MONTH) {
    const days = Math.floor(timeDifference / DAYS);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (timeDifference < YEARS) {
    const months = Math.floor(timeDifference / MONTH);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(timeDifference / YEARS);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}
