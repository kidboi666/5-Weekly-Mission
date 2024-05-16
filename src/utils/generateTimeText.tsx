import moment from "moment";

const MINUTES = 60;
const HOURS = 24;
const DAYS = 30;
const MONTHS = 12;

const generateTimeText = (createdAt: string) => {
    const timeDiff = moment().diff(moment(createdAt), "minutes");

    if (timeDiff < 2) {
        return "1 minute ago";
    }
    if (timeDiff <= MINUTES - 1) {
        return `${timeDiff} minutes ago`;
    }
    if (timeDiff < MINUTES * HOURS) {
        const hours = Math.floor(timeDiff / MINUTES);
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    }
    if (timeDiff <= MINUTES * HOURS * DAYS) {
        const days = Math.floor(timeDiff / (MINUTES * HOURS));
        return days === 1 ? "1 day ago" : `${days} days ago`;
    }
    if (timeDiff <= MINUTES * HOURS * DAYS * MONTHS) {
        const months = Math.floor(timeDiff / (MINUTES * HOURS * DAYS));
        return months === 1 ? "1 month ago" : `${months} months ago`;
    }
    const years = Math.floor(timeDiff / (MINUTES * HOURS * DAYS * MONTHS));
    return years === 1 ? "1 year ago" : `${years} years ago`;
};

export default generateTimeText;
