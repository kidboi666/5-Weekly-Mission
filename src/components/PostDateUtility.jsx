export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function calculatePostTimeElapsed(value) {
  const now = new Date();
  const date = new Date(value);
  const timeDifference = (now - date) / (1000 * 60);
  if (timeDifference < 2) {
    return "1 minute ago";
  } else if (timeDifference <= 59) {
    return `${Math.floor(timeDifference)} minutes ago`;
  } else if (timeDifference < 60 * 24) {
    if (Math.floor(timeDifference / 60) === 1) {
      return "1 hour ago";
    } else {
      return `${Math.floor(timeDifference / 60)} hours ago`;
    }
  } else if (timeDifference <= 60 * 24 * 30) {
    if (Math.floor(timeDifference / (60 * 24)) === 1) {
      return "1 day ago";
    } else {
      return `${Math.floor(timeDifference / (60 * 24))} days ago`;
    }
  } else if (timeDifference < 60 * 24 * 30 * 12) {
    if (Math.floor(timeDifference / (60 * 24 * 30)) === 1) {
      return "1 month ago";
    } else {
      return `${Math.floor(timeDifference / (60 * 24 * 30))} months ago`;
    }
  } else if (timeDifference <= 60 * 24 * 30 * 12 * 11) {
    if (Math.floor(timeDifference / (60 * 24 * 30 * 12)) === 1) {
      return "1 year ago";
    } else {
      return `${Math.floor(timeDifference / (60 * 24 * 30 * 12))} years ago`;
    }
  } else {
    return `${Math.floor(timeDifference / (60 * 24 * 30 * 12))} years ago`;
  }
}
