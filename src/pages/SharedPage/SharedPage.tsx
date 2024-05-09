import React, { useCallback, useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import { getFolders, getLinks, getUser } from '../../apis/api';
import { SectionWrap, TopWrap } from '../Common.styled';
import * as S from './SharedPage.styled';
import Profile from '../../components/Profile/Profile';
import CardList from '../../components/CardList/CardList';
import { useParams } from 'react-router-dom';

export default function SharedPage() {
  const [links, setLinks] = useState([]);
  const [folderName, setFolderName] = useState();
  const [user, setUser] = useState({
    id: 0,
    created_at: '',
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  });

  interface ParamsType {
    folderId: number;
  }

  const { folderId } = useParams() as unknown as ParamsType;

  const handleLoad = useCallback(async () => {
    const nextLinks = await getLinks(folderId || 0);
    const { name: nextFolderName } = await getFolders(folderId);
    const nextUser = await getUser();
    setLinks(nextLinks);
    setFolderName(nextFolderName);
    setUser(nextUser);
  }, [folderId]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <TopWrap>
        <Profile
          src={user?.image_source}
          $size='m'
          user={user?.name}
          $flextype='column'
        />
        <S.Title>{folderName}</S.Title>
      </TopWrap>
      <SectionWrap>
        <Search />
        {links && <CardList items={links} />}
      </SectionWrap>
    </>
  );
}
