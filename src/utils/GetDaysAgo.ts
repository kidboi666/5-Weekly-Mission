function GetDaysAgo({ createdAt }: { createdAt: string }) {
  const currentDate = new Date();
  const todayMilliseconds = currentDate.getTime();

  const createdAtMilliseconds = Date.parse(createdAt);
  const timeDifference = todayMilliseconds - createdAtMilliseconds;
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo >= 365) {
    return `${Math.floor(daysAgo / 365)} year ago`;
  } else if (daysAgo < 365) {
    return `${Math.floor(daysAgo / 30)} months ago`;
  } else if (daysAgo < 30) {
    return `${daysAgo} days ago`;
  }
}

export default GetDaysAgo;
