import { TIME_IN_MILLISECONDS } from "./constant";

/**
 * 현재 Date와 차이에 따라 주어진 규칙으로 설정하기
 * * 7주차 템플릿 코드 사용
 *
 * @author yum
 * @date 23.04
 * @param {Date | string | number} createdAt 생성 일자
 * @returns {string} 경과된 시간 문자열
 */
export const getElapsedTime = (createdAt: Date | string | number): string => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now.getTime() - createdAtDate.getTime();
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  // OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”
  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)} years ago`;
  }

  // 12달 이상은 “1 year ago”
  if (year <= elapsedTime) {
    return `1 year ago`;
  }

  // 11달 이하는 “OO months ago”
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  }

  // 31일 이상은 “1 month ago”
  if (month <= elapsedTime) {
    return `1 month ago`;
  }

  // 30일 이하는 “OO days ago”
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }

  // 24시간 이상은 “1 day ago”
  if (day <= elapsedTime) {
    return `1 day ago`;
  }

  // 23시간 이하는 “OO hours ago”
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }

  // 60분 이상은 “1 hour ago”
  if (hour <= elapsedTime) {
    return `1 hour ago`;
  }

  // 59분 이하는 “OO minutes ago”
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }

  // 2분 미만은 “1 minute ago”
  return `1 minute ago`;
};
