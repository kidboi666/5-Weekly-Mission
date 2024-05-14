export const generateTimeText = (createdAt: string): string => {
  const timeDiff = Math.floor(
    (Date.now() - Date.parse(createdAt)) / (1000 * 60)
  );

  if (timeDiff < 2) {
    return "1 minute ago";
  }
  if (timeDiff <= 59) {
    return `${timeDiff} minutes ago`;
  }
  if (timeDiff < 60 * 24) {
    const hours = Math.floor(timeDiff / 60);
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  if (timeDiff <= 60 * 24 * 30) {
    const days = Math.floor(timeDiff / (60 * 24));
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (timeDiff <= 60 * 24 * 30 * 31) {
    const months = Math.floor(timeDiff / (60 * 24 * 30));
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (timeDiff < 60 * 24 * 30 * 12) {
    const years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }

  const years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
  const months = Math.floor(years * 12);
  return `${months} months ago`;
};

export const formatDate = (createdAtString: string): string => {
  const createdAt = new Date(createdAtString);
  const year = createdAt.getFullYear();
  const month = String(createdAt.getMonth() + 1).padStart(2, "0");
  const day = String(createdAt.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};
