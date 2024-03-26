import "./CardList.css";
import catImg from "../assets/images/cat.jpg";

function CardList({ cardData }) {
    return (
        <ul className="card-list">
            {cardData?.map(({ createdAt, description, id, title, url, imageSource }) => {
                return (
                    <li key={id}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <div className="img-box">
                                {imageSource ? (
                                    <img src={imageSource} alt={title} />
                                ) : (
                                    <img src={catImg} alt="이미지가 없습니다." />
                                )}
                            </div>
                            <div className="text-box">
                                <div className="time">{createdAt}</div>
                                <p>{description}</p>
                                <div className="date">2023.3.15</div>
                            </div>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default CardList;
