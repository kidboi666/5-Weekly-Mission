export function calculateTimeDiff(createdAt) {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);
  const timeDiff = currentTime.getTime() - createdTime.getTime();

  const minutesDiff = Math.round(timeDiff / (1000 * 60));

  return `${minutesDiff} 분 전`;
}
