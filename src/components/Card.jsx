import CardImage from "./CardImage";
import CardContent from "./CardContent";
import "../css/Card.css";

function Card() {
  return (
    <div className="wrap-card">
      <CardImage />
      <CardContent />
    </div>
  );
}

export default Card;
