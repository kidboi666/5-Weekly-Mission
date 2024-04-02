import Header from './Header';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import { useEffect, useState } from 'react';
import { getUserData, getFolderData } from './Api';
import Top from './Top';
import styled from 'styled-components';
import Favorite from './Favorite';
import { useData } from '../Hooks/useData';
import UserFolderInfo from './UserFolderInfo';
import AddLink from './AddLink';

const TopMargin = styled.div`
  margin-top: 93px;
`;

const FooterMargin = styled.div`
  margin-top: 60px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

function App() {
  const [user, getUser] = useData(getUserData);
  const [folder, getFolder] = useData(getFolderData);
  const [isLogIn, setIsLogIn] = useState(true);

  const getData = async () => {
    try {
      await getUser();
      await getFolder();
      setIsLogIn(true);
    } catch (err) {
      setIsLogIn(false);
    }
  };

  useEffect(() => {
    getData();
  }, [isLogIn]);

  return (
    <>
      <GlobalStyle />
      <Header
        isLogIn={isLogIn}
        email={user?.email}
        img={user?.profileImageSource}
      />
      <TopMargin></TopMargin>
      <Top>
        {0 ? (
          <UserFolderInfo
            name={folder?.folder?.owner?.name}
            profileImg={folder?.folder?.owner?.profileImageSource}
            folderName={folder?.folder?.name}
          />
        ) : (
          <AddLink />
        )}
      </Top>
      <Favorite items={folder?.folder?.links} />
      <FooterMargin></FooterMargin>
      <Footer />
    </>
  );
}

export default App;
