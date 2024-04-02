const { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } = require('date-fns');

export function calculateTimeAgo(created_at:string) {
    const currentDate = new Date();
    const createdAtDate = new Date(created_at);

    // differenceInOOOO (시작날짜, 게시글시간) 분으로 반환
    const yearsDifference = differenceInYears(currentDate, createdAtDate);
    const monthsDifference = differenceInMonths(currentDate, createdAtDate);
    const daysDifference = differenceInDays(currentDate, createdAtDate);
    const hoursDifference = differenceInHours(currentDate, createdAtDate);
    const minutesDifference = differenceInMinutes(currentDate, createdAtDate);
  
    if (minutesDifference < 2) {
        return "1 minute ago";
    } else if (minutesDifference <= 59) {
        return `${minutesDifference} minutes ago`;
    } else if (hoursDifference === 1) {
        return "1 hour ago";
    } else if (hoursDifference <= 23) {
        return `${hoursDifference} hours ago`;
    } else if (daysDifference === 1) {
        return "1 day ago";
    } else if (daysDifference <= 30) {
        return `${daysDifference} days ago`;
    } else if (monthsDifference === 1) {
        return "1 month ago";
    } else if (monthsDifference <= 11) {
        return `${monthsDifference} months ago`;
    } else if (yearsDifference === 1) {
        return "1 year ago";
    } else {
        const years = Math.floor(yearsDifference);
        return `${years} years ago`;
    }

}
