export default function dateAgo(time) {
  const today = new Date();
  const timeValue = new Date(time);

  const minutes = Math.floor(
    (today.getTime() - timeValue.getTime() + 9 * 1000 * 60 * 60) / 1000 / 60
  );
  if (minutes < 2) return "1 minute ago";
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (minutes < 2) return "1 hour ago";
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `1 day ago`;

  const months = Math.floor(days / 30);
  if (months < 1) return `1 month ago`;
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  if (years < 1) return "1 year ago";

  return `${years} years ago`;
}
