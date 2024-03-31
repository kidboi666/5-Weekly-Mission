import { useEffect } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import FolderInfo from '../../components/FolderInfo';

import styled from 'styled-components';
import useGetData from '../../components/hooks/useGetData';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1060px;
  margin: auto;

  @media screen and (max-width: 1023px) {
    width: auto;
    margin-left: 32px;
    margin-right: 32px;
  }

  @media screen and (max-width: 767px) {
    margin-right: 32px;
    margin-left: 32px;
  }
`;

const CardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample/folder';

function Folder() {
  const [data, isLoading, error, fetchData] = useGetData(BASE_URL);

  useEffect(() => {
    fetchData(BASE_URL);
  }, [BASE_URL]);
  console.log(data);

  return (
    <>
      <Header />
      <FolderInfo />
      <main>
        <MainContainer>
          <Input />
          {data ? (
            <CardContainer>
              {data.folder.links ? (
                data.folder.links.map((link) => (
                  <Card
                    key={link.id}
                    url={link.url}
                    src={link.imageSource}
                    desc={link.description}
                    createdAt={link.createdAt}
                  />
                ))
              ) : (
                <p>로딩 중..</p>
              )}
            </CardContainer>
          ) : (
            <p>로딩중....</p>
          )}
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}

export default Folder;
