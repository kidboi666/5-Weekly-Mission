import "../css/CardImage.css";

function CardImage() {
  return (
    <div className="wrap-img">
      <img
        className="little-star"
        src="/images/little_star.png"
        alt="즐겨찾기 별모양"
      />
      <img className="card-img" src="/images/image 7.png" alt="카드 이미지" />
    </div>
  );
}

export default CardImage;
