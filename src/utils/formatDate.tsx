import moment from "moment";

// 날짜 형식 변경 함수
const formatDate = (dateString) => {
  const date = moment(dateString);
  return date.format("YYYY.MM.DD");
};

export default formatDate;
