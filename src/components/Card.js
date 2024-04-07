import styled from 'styled-components';
import { getTimeDifference, formatDate } from '../utils/common';
import CardNoneImg from '../assets/nocardImg.svg';

const CardButton = styled.button`
    width: 340px;
    height: 334px;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
    padding: 0;
    border: 0;
    background-color: transparent;
    border-radius: 15px;
    cursor: pointer;

    &:hover img {
        transition: all 0.2s linear;
        transform: scale(1.3);
    }
`;

const CardImgArea = styled.div`
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 15px 15px 0px 0px;
    background: #d9d9d9;
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
`;

const CardInfoArea = styled.div`
    display: flex;
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 0px 0px 15px 15px;
    background: #fff;
`;

const CardTime = styled.p`
    color: #666;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CardInfo = styled.p`
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    height: 49px;
`;

const CardDate = styled.p`
    overflow: hidden;
    color: #333;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 19px;
`;

function Card({ link }) {
    const handleSiteOpen = () => {
        const url = link.url;
        window.open(url, '_blank');
    };

    return (
        <CardButton onClick={handleSiteOpen}>
            <CardImgArea>
                <CardImg src={link.imageSource ? link.imageSource : CardNoneImg} alt="내용 이미지" />
            </CardImgArea>
            <CardInfoArea>
                <CardTime>{getTimeDifference(link.createdAt)}</CardTime>
                <CardInfo>{link.title}</CardInfo>
                <CardDate>{formatDate(link.createdAt)}</CardDate>
            </CardInfoArea>
        </CardButton>
    );
}

export default Card;
