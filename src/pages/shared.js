import GNB from '../components/gnb';
import Footer from '../components/footer';
import Card from '../components/card';
import SearchBar from '../components/searchBar';
import { useState, useEffect } from 'react';
import { getCardData } from '../api/api';
import { styled } from 'styled-components';

function Shared() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCardData();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GNB />
      {data && (
        <SharedFrame>
          <ShreadFrameItem src={data.folder.owner.profileImageSource} alt="코드잇" />
          <SharedUserName>{data.folder.owner.name}</SharedUserName>
          <SharedFavorites>{data.folder.name}</SharedFavorites>
        </SharedFrame>
      )}
      <SharedContent>
        <SearchBar />
        <SharedCard>{data && data.folder.links.map((link, index) => <Card key={index} link={link} />)}</SharedCard>
      </SharedContent>
      <Footer />
    </>
  );
}

export default Shared;

const SharedFrame = styled.div`
  display: flex;
  padding: 20px 0 60px;
  flex-direction: column;
  background: #f0f6ff;
  align-items: center;
`;

const ShreadFrameItem = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;

const SharedUserName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  margin-bottom: 20px;
`;

const SharedFavorites = styled.p`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SharedContent = styled.div`
  padding: 40px 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 1124px) {
    padding: 40px 32px;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 32px;
    align-items: center;
  }
`;

const SharedCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 1124px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
