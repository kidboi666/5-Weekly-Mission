import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import AddLinkInput from '../../components/AddLinkInput';
import FilteringButton from '../../components/FilteringButton';
import styled from 'styled-components';
import useFetchData from '../../hooks/useFetchData';
import {
  FILTER,
  FOLDER_BASE_URL,
  USER_INFO_URL,
} from '../../contants/constant';

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled(Center)`
  width: 50rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const AddLinkDiv = styled(Center)`
  background-color: #f0f6ff;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyDataDiv = styled(Center)`
  height: 300px;

  & p {
    font-size: 1.5rem;
  }
`;

const AddFolderButton = styled.button`
  border: none;
  color: #6d6afe;
  background-color: white;
  cursor: pointer;
`;

const SpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const GrayFontButton = styled.button`
  border: none;
  background-color: #fff;
  color: gray;
  font-size: 0.8rem;
  cursor: pointer;
`;

function Folder() {
  const { data: userInfo, fetchData: getUserInfo } =
    useFetchData(USER_INFO_URL);
  const { data, fetchData } = useFetchData(FOLDER_BASE_URL);
  const [userInformation, setUserInformation] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [folderList, setFolderList] = useState([]);
  const [folderItem, setFolderItem] = useState({});

  useEffect(() => {
    fetchData(data);
  }, []);

  useEffect(() => {
    setUserInformation(userInfo);
    setFolderList(data);
  }, [data]);

  console.log(userInformation);

  const handleStarClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    console.log(isFavorite + '에서 ' + !isFavorite + ' 으로 바뀜');
  };

  return (
    <>
      <Header position='' url={USER_INFO_URL} />
      <AddLinkDiv>
        <AddLinkInput />
      </AddLinkDiv>
      <main>
        <Section>
          <InputDiv>
            <Input />
          </InputDiv>
        </Section>
        <section>
          {!data ? (
            <>
              <EmptyDataDiv>
                <p>저장된 링크가 없습니다</p>
              </EmptyDataDiv>
            </>
          ) : (
            <>
              <SpaceAround>
                <div>
                  {FILTER.map((el) => (
                    <FilteringButton
                      key={el.id}
                      title={el.title}
                      defaultButton={el.default}
                    />
                  ))}
                </div>
                <AddFolderButton>폴더 추가</AddFolderButton>
              </SpaceAround>
              {data && (
                <SpaceAround>
                  {/* <Title>{filteredTitle}</Title> */}

                  <div>
                    <GrayFontButton>공유</GrayFontButton>
                    <GrayFontButton>이름 변경</GrayFontButton>
                    <GrayFontButton>삭제</GrayFontButton>
                  </div>
                </SpaceAround>
              )}
              {userInformation &&
                userInformation.data.map((el) => (
                  <Card
                    key={el.id}
                    src=''
                    desc={el.name}
                    createdAt={el.created_at}
                    isFavorite={el.favorite}
                    onClick={handleStarClick}
                  />
                ))}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Folder;
