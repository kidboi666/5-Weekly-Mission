import "./CardList.css";
import Card from "./Card";

function CardList({ cardData }) {
    return (
        <ul className="card-list">
            {cardData.map(({ createdAt, description, id, title, url, imageSource }) => {
                const data = { createdAt, description, id, title, url, imageSource };

                return <Card data={data} key={id} />;
            })}
        </ul>
    );
}

export default CardList;
