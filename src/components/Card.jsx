import { CardContainer, Sort, CardGrid, CardImage, CardContent, CardContentText, ATag } from './CardStyled.jsx';
import fetchData from './apis/GetApi.jsx';
import { useEffect, useState } from 'react';
import { timeAgo } from './utils/CardUtil.jsx';

function Card() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData('api/sample/folder')
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Sort>
      <CardGrid>
        {data?.folder.links.map((link, i) => (
          <CardContainer key={i}>
            <ATag href={link.url}>
              <CardImage style={{ backgroundImage: `url(${link.imageSource})` }} />
            </ATag>
            <CardContent>
              <CardContentText size={13} color="gray60" className="card__createdAt">
                {timeAgo(link.createdAt)}
              </CardContentText>
              <CardContentText size={16} color="black" className="card__description">
                {link.description}
              </CardContentText>
              <CardContentText size={14} color="gray100" className="card__writingTime">
                {link.createdAt.slice(0, 10)}
              </CardContentText>
            </CardContent>
          </CardContainer>
        ))}
      </CardGrid>
    </Sort>
  );
}

export default Card;
