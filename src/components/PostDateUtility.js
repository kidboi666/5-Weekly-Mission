export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function calculatePostTimeElapsed(value) {
  const now = new Date();
  const date = new Date(value);
  const timeDifference = (now - date) / 1000 / 60;
  let message = "";
  if (timeDifference < 1439) {
    message = `${Math.floor(timeDifference / 60)} hours ago`;
  } else if (timeDifference < 119) {
    message = "1 hour ago";
  } else if (timeDifference < 60) {
    message = `${Math.floor(timeDifference)} minutes ago`;
  } else if (timeDifference < 2) {
    message = "1 minute ago";
  }
  return message;
}
