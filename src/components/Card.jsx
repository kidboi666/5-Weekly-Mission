import { CardContainer, Sort, CardGrid, CardImage, CardContent, CardContentText } from './CardListStyled.jsx';

function CardList() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Sort>
      <CardGrid>
        {cards.map((card, index) => (
          <CardContainer key={index}>
            <CardImage src="https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png" alt="" />
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
      </CardGrid>
    </Sort>
  );
}

export default CardList;
