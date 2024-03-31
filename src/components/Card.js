import React from 'react';
import CardNoneImg from '../assets/nocardImg.svg';

function Card() {
    return (
        <>
            <div className="card-container">
                <div className="card-img">
                    <img src={CardNoneImg} alt="내용 이미지" />
                </div>
                <div className="card-info">
                    <p>1 시간전</p>
                    <p>asd</p>
                    <p>asd</p>
                </div>
            </div>
        </>
    );
}

export default Card;
