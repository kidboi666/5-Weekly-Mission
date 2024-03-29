import imgCard from '../assets/reactcard.png';
import { CardContainer, CardImage, CardContent, CardContentText, Sort, CardList } from './CardStyled.jsx';
import {} from './utils/CardUtil.jsx';

function Card() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Sort>
      <CardList>
        {cards.map((card, index) => (
          <CardContainer key={index}>
            <CardImage src={imgCard} alt="" />
            <CardContent>
              <CardContentText size={13} color="gray60" className="card__createdAt">
                createdAt
              </CardContentText>
              <CardContentText size={16} color="black" className="card__description">
                Description
              </CardContentText>
              <CardContentText size={14} color="gray100" className="card__writingTime">
                writingTime
              </CardContentText>
            </CardContent>
          </CardContainer>
        ))}
      </CardList>
    </Sort>
  );
}

export default Card;
