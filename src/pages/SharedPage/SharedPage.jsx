import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import { getLinks, getUser } from '../../api';
import { SectionWrap, TopWrap } from '../Common.styled';
import * as S from './SharedPage.styled';
import Profile from '../../components/Profile/Profile';
import CardList from '../../components/CardList/CardList';
import { useParams } from 'react-router-dom';

export default function SharedPage() {
  const [folder, setFolder] = useState([]);
  const [user, setUser] = useState();

  const { folderId } = useParams();

  const handleLoad = async () => {
    const nextFolder = await getLinks(folderId);
    const nextUser = await getUser();
    setFolder(nextFolder);
    setUser(nextUser);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <TopWrap>
        <Profile
          src={user?.image_source}
          $size='m'
          user={user?.name}
          $flextype='column'
        />
        <S.Title>{folder?.name}</S.Title>
      </TopWrap>
      <SectionWrap>
        <Search />
        {folder && <CardList items={folder} />}
      </SectionWrap>
    </>
  );
}
