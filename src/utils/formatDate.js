function formatDate(dateString) {
    const date = new Date(dateString);
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate - date;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    const elapsedMonths = Math.floor(elapsedDays / 30);
    const elapsedYears = Math.floor(elapsedDays / 365);
  
    if (elapsedMinutes < 2) {
      return "1 minute ago";
    } else if (elapsedMinutes <= 59) {
      return `${elapsedMinutes} minutes ago`;
    } else if (elapsedHours < 24) {
      return `${elapsedHours} hours ago`;
    } else if (elapsedDays < 2) {
      return "1 day ago";
    } else if (elapsedDays <= 30) {
      return `${elapsedDays} days ago`;
    } else if (elapsedMonths < 2) {
      return "1 month ago";
    } else if (elapsedMonths <= 11) {
      return `${elapsedMonths} months ago`;
    } else if (elapsedYears < 2) {
      return "1 year ago";
    } else {
      const years = Math.floor(elapsedMonths / 12);
      return `${years} years ago`;
    }
  }
  
export default formatDate;