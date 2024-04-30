import { TIME_IN_MILLISECONDS } from "./constant";

export const getElapsedTime = (createdAt) => {
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;
  const elapsedTime = new Date() - new Date(createdAt);

  if (elapsedTime >= year * 2) {
    return `${Math.floor(elapsedTime / year)} years ago`;
  }
  if (elapsedTime >= year) {
    return `1 year ago`;
  }
  if (elapsedTime >= month * 2) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  }
  if (elapsedTime >= month) {
    return `1 month ago`;
  }
  if (elapsedTime >= day * 2) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }
  if (elapsedTime >= day) {
    return `1 day ago`;
  }
  if (elapsedTime >= hour * 2) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }
  if (elapsedTime >= hour) {
    return `1 hour ago`;
  }
  if (elapsedTime >= minute * 2) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }
  return "1 minute ago";
};
