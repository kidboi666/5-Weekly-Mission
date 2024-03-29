export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 120) {
    return '1 minute ago';
  }
  if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast < 7200) {
    return '1 hour ago';
  }
  if (secondsPast < 86400) {
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast < 172800) {
    return '1 day ago';
  }
  if (secondsPast < 2592000) {
    return `${Math.floor(secondsPast / 86400)} days ago`;
  }
  if (secondsPast < 2678400) {
    return '1 month ago';
  }
  if (secondsPast < 31536000) {
    return `${Math.floor(secondsPast / 2592000)} months ago`;
  }
  if (secondsPast < 63072000) {
    return '1 year ago';
  }
  return `${Math.floor(secondsPast / 31536000)} years ago`;
}
