import "../css/CardContent.css";

function CardContent() {
  return (
    <div className="card-content">
      <div className="wrap-card-content-time-kebab">
        <span className="card-content-time">10</span>
        <img
          className="kebab-img"
          src="/images/kebab.png"
          alt="더보기 이미지"
        />
      </div>
      <p className="card-content-description">내용</p>
      <span className="card-content-createdAt">만든 날짜</span>
    </div>
  );
}

export default CardContent;
