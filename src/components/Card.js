import styled from "styled-components";
import formatDate from "../utils/formatDate";
const StyledCard = styled.div`
    width: 325px;
    height: 327px;

    display: flex;
    flex-direction: column;
    width: 32.5rem;
    height: 32.7rem;
    box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
    border-radius: 1.5rem;

    @media (min-width: 768px) {
    width: 34rem;
    height: 33.4rem;
    }
`
const StyledImg = styled.img`
width: 100%;
height: 140px;
flex-shrink: 0;
border-radius: 15px 15px 0px 0px;
background: #D9D9D9;
`

const StyledContents = styled.div`
display: flex;
width: 340px;
padding: 15px 20px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
border-radius: 0px 0px 15px 15px;
background: #FFF;
`

const StyledTime = styled.div`
color: #666;
font-family: Pretendard;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Styleddescription = styled.div`
height: 49px;
align-self: stretch;
overflow: hidden;
color: #000;
text-overflow: ellipsis;
white-space: nowrap;
font-family: Pretendard;
font-size: 16px;
line-height: 24px; /* 150% */
margin: 0;
`
const StyledDate = styled.div`
height: 19px;
align-self: stretch;
overflow: hidden;
color: #333;
text-overflow: ellipsis;
white-space: nowrap;

/* Linkbrary/body2-regular */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

function Card ({img, title, date, description}) {    
    const imgStyle = {
        "background": `url(${img}) lightgray 50% / cover no-repeat`
    }
    
    const formatedDate = formatDate(date)
    const ymdDate = date.substring(0, date.indexOf('T')).replace(/-/g, '.')
      
    return (
        <StyledCard>
            <StyledImg style={imgStyle}/>
            <StyledContents>
                <StyledTime>{formatedDate}</StyledTime>
                <Styleddescription>{title}</Styleddescription>
                <Styleddescription>{description}</Styleddescription>
                <StyledDate>{ymdDate}</StyledDate>
            </StyledContents>
        </StyledCard>
    );
};

export default Card;