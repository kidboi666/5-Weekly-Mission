export const useFormattingDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  const day = date.getDate();

  const formattedDate = `${year}.${month < 10 ? "0" : ""}${month}.${day < 10 ? "0" : ""}${day}`;
  return formattedDate;
};
