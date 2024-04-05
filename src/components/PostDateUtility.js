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
    return `${Math.floor(timeDifference)} ${
      Math.floor(timeDifference) === 1 ? "hour" : "hours"
    } ago`;
  } else if (timeDifference < MONTH) {
    return `${Math.floor(timeDifference)} ${
      Math.floor(timeDifference) === 1 ? "day" : "days"
    } ago`;
  } else if (timeDifference < 60 * 24 * 30 * 12) {
    return `${Math.floor(timeDifference)} ${
      Math.floor(timeDifference) === 1 ? "month" : "months"
    } ago`;
  }
  return `${Math.floor(timeDifference)} ${
    Math.floor(timeDifference) === 1 ? "month" : "months"
  } ago`;
}
