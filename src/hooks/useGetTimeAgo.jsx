export const useGetTimeAgo = (createdAt) => {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDiff = currentDate - createdDate;
  const intervals = [
    { label: "year", seconds: 60 * 60 * 24 * 30 * 12 },
    { label: "month", seconds: 60 * 60 * 24 * 30 },
    { label: "day", seconds: 60 * 60 * 24 },
    { label: "hour", seconds: 60 * 60 },
    { label: "minute", seconds: 60 },
  ];

  for (const { label, seconds } of intervals) {
    const diff = Math.floor(timeDiff / 1000 / seconds);
    if (diff >= 1) {
      return diff === 1 ? `${diff} ${label} ago` : `${diff} ${label}s ago`;
    }
  }

  return "Just now";
};
