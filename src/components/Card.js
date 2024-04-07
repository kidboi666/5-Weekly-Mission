import '../styles/card.css';
import CardNoneImg from '../assets/nocardImg.svg';
import { getTimeDifference, formatDate } from '../utils/common';

function Card({ link }) {
    const handleSiteOpen = () => {
        const url = link.url;
        window.open(url, '_blank');
    };

    return (
        <button className="card-button" onClick={handleSiteOpen}>
            <div className="card-img-area">
                <img className="card-img" src={link.imageSource ? link.imageSource : CardNoneImg} alt="내용 이미지" />
            </div>
            <div className="card-info-area">
                <p className="card-time">{getTimeDifference(link.createdAt)}</p>
                <p className="card-info">{link.title}</p>
                <p className="card-date">{formatDate(link.createdAt)}</p>
            </div>
        </button>
    );
}

export default Card;
