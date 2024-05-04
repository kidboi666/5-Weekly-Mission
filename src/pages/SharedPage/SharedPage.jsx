import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import { getSharedList } from '../../api';
import { SectionWrap, TopWrap } from '../Common.styled';
import * as S from './SharedPage.styled';
import Profile from '../../components/Profile/Profile';
import CardList from '../../components/CardList/CardList';

export default function SharedPage() {
  const [folder, setFolder] = useState([]);

  const handleLoad = async () => {
    const nextFolder = await getSharedList();
    setFolder(nextFolder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <TopWrap>
        <Profile
          src={folder?.owner?.profileImageSource}
          $size='m'
          user={folder?.owner?.name}
          $flextype='column'
        />
        <S.Title>{folder?.name}</S.Title>
      </TopWrap>
      <SectionWrap>
        <Search />
        {folder && <CardList items={folder.links} />}
      </SectionWrap>
    </>
  );
}
