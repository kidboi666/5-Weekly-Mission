import React, { useCallback, useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import { getFolders, getLinks, getUser } from '../../apis/api';
import { SectionWrap, TopWrap } from '../../styles/CommonPage.styled';
import * as S from '../../styles/SharedPage.styled';
import Profile from '../../components/Profile/Profile';
import CardList from '../../components/CardList/CardList';
import { useRouter } from 'next/router';

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

  const router = useRouter();
  const { folderId } = router.query as unknown as ParamsType;

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
