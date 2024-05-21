const { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } = require('date-fns');

export function calculateTimeAgo(created_at: string) {
  const currentDate = new Date();
  const createdAtDate = new Date(created_at);

  // differenceInOOOO (시작날짜, 게시글시간) 분으로 반환
  const yearsDifference = differenceInYears(currentDate, createdAtDate);
  const monthsDifference = differenceInMonths(currentDate, createdAtDate);
  const daysDifference = differenceInDays(currentDate, createdAtDate);
  const hoursDifference = differenceInHours(currentDate, createdAtDate);
  const minutesDifference = differenceInMinutes(currentDate, createdAtDate);

  if (minutesDifference <= 59) {
    return `${minutesDifference} minute${minutesDifference < 2 ? '' : 's'} ago`;
  }
  if (hoursDifference <= 23) {
    return `${hoursDifference} hour${hoursDifference < 2 ? '' : 's'} ago`;
  }
  if (daysDifference <= 30) {
    return `${daysDifference} day${daysDifference < 2 ? '' : 's'}  ago`;
  }
  if (monthsDifference <= 11) {
    return `${monthsDifference} month${monthsDifference < 2 ? '' : 's'} ago`;
  }

  const years = Math.floor(yearsDifference);
  return `${years} year${years < 2 ? '' : 's'} ago`;
}
