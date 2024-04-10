import AddLink from '../components/addLink';
import Footer from '../components/footer';
import GNB from '../components/gnb';
import styled from 'styled-components';
import SearchBar from '../components/searchBar';
import { useEffect, useState } from 'react';
import { getLinkData } from '../api/api';
import Menu from '../components/menu';
import plusIcon from '../assets/plusIcon.svg';
import Card from '../components/card';
import shareIcon from '../assets/share.svg';
import penIcon from '../assets/pen.svg';
import deleteIcon from '../assets/delete.svg';

function Folder() {
  const [data, setData] = useState();
  const [selectedItem, setSelectedItem] = useState('전체');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLinkData();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <FolderMain>
      <GNB isStickyDisabled={false} />
      <FolderFrame>
        <AddLink />
      </FolderFrame>
      <FolderContent>
        <SearchBar />
        <MenuArea>
          <Menu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <AddFolder>
            폴더 추가 <PlusImg src={plusIcon} />
          </AddFolder>
        </MenuArea>
        <FolderTitleArea>
          <FolderTitle>{selectedItem}</FolderTitle>
          {selectedItem === '전체' ? (
            <></>
          ) : (
            <ActiveIconItems>
              <ActiveIcon>
                <IconImg src={shareIcon} alt="공유" />
                <IconText>공유</IconText>
              </ActiveIcon>
              <ActiveIcon>
                <IconImg src={penIcon} alt="이름 변경" />
                <IconText>이름 변경</IconText>
              </ActiveIcon>
              <ActiveIcon>
                <IconImg src={deleteIcon} alt="삭제" />
                <IconText>삭제</IconText>
              </ActiveIcon>
            </ActiveIconItems>
          )}
        </FolderTitleArea>
        <FolderList>
          {data &&
            data.data.map((link, index) => <Card key={index} link={link} />)}
        </FolderList>
      </FolderContent>
      <Footer />
    </FolderMain>
  );
}

export default Folder;

const FolderMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

const FolderFrame = styled.div`
  display: flex;
  padding: 60px 320px 90px 320px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: #f0f6ff;
`;

const FolderContent = styled.div`
  padding: 40px 190px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and (max-width: 1124px) {
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 32px;
    align-items: center;
  }
`;

const MenuArea = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1124px) {
    align-items: center;
    align-self: stretch;
    width: 700px;
  }
`;

const AddFolder = styled.p`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

const PlusImg = styled.img`
  width: 16px;
  height: 16px;
`;

const FolderList = styled.div`
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

const FolderTitleArea = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1124px) {
    width: 700px;
  }
`;

const FolderTitle = styled.h1`
  color: #000;

  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const ActiveIconItems = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ActiveIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 18px;
  height: 18px;
`;

const IconText = styled.p`
  color: #9fa6b2;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
