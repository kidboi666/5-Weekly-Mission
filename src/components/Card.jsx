import catImg from "../assets/images/cat.jpg";
import GetDate from "../utils/GetDate";
import GetDaysAgo from "../utils/GetDaysAgo";

function Card({ data }) {
    const { createdAt, description, id, title, url, imageSource } = data;

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
                    <div className="time">
                        <GetDaysAgo createdAt={createdAt} />
                    </div>
                    <p>{description}</p>
                    <div className="date">
                        <GetDate createdAt={createdAt} />
                    </div>
                </div>
            </a>
        </li>
    );
}

export default Card;
