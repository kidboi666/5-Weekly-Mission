import "./CardList.css";
import Card from "../Card/Card";

function CardList({ cardListData }) {
    return (
        <ul className="card-list">
            {cardListData.map(({ createdAt, description, id, title, url, imageSource }) => {
                const card = { createdAt, description, id, title, url, imageSource };

                return <Card card={card} key={id} />;
            })}
        </ul>
    );
}

export default CardList;
