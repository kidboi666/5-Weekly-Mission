import { TIME_IN_MILLISECONDS } from "./constant";

/**
 * 주어진 생성 일자 문자열로부터 경과 시간을 계산하여 사람이 읽을 수 있는 형식으로 반환하는 함수입니다.
 *
 * @param {string} createdAt - 생성 일자 문자열입니다.
 * @returns {string} 사람이 읽을 수 있는 형식의 경과 시간 문자열입니다.
 *
 * @example
 * const elapsedTime = getElapsedTime("2022-01-01T00:00:00Z");
 * console.log(elapsedTime); // "1 year ago", "2 months ago", 등
 */
export const getElapsedTime = (createdAt: string) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now.getTime() - createdAtDate.getTime();
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)} years ago`;
  }
  if (year <= elapsedTime) {
    return `1 year ago`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  }
  if (month <= elapsedTime) {
    return `1 month ago`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }
  if (day <= elapsedTime) {
    return `1 day ago`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }
  if (hour <= elapsedTime) {
    return `1 hour ago`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }
  return `1 minute ago`;
};
