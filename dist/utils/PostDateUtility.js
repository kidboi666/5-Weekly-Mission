export function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;
export function calculatePostTimeElapsed(value) {
    const now = new Date();
    const date = new Date(value);
    const timeDifference = (now.getTime() - date.getTime()) / 1000;
    const years = Math.floor(timeDifference / YEAR);
    const remainingAfterYears = timeDifference % YEAR;
    const months = Math.floor(remainingAfterYears / MONTH);
    const remainingAfterMonths = remainingAfterYears % MONTH;
    const days = Math.floor(remainingAfterMonths / DAY);
    const remainingAfterDays = remainingAfterMonths % DAY;
    const hours = Math.floor(remainingAfterDays / HOUR);
    const remainingAfterHours = remainingAfterDays % HOUR;
    const minutes = Math.floor(remainingAfterHours / MINUTE);
    if (years > 0) {
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
    else if (months > 0) {
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    }
    else if (days > 0) {
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    }
    else if (hours > 0) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }
    else if (minutes > 1) {
        return `${Math.floor(timeDifference)} minutes ago`;
    }
    else
        return "1 minute ago";
}
