import React, { useCallback, useEffect, useState } from 'react';
import { StyledSectionWrap } from '../Common.styled';
import LinkInput from '../../components/LinkInput/LinkInput';
import * as S from './FolderPage.styled';
import { getFoldersItems, getFoldersMenu } from '../../api';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import MenuButton from '../../components/MenuButton/MenuButton';
import AddIcon from '../../assets/add_icon.png';
import AddWhiteIcon from '../../assets/add_white_icon.png';
import ShareIcon from '../../assets/share_icon.png';
import PenIcon from '../../assets/pen_icon.png';
import DeleteIcon from '../../assets/delete_icon.png';

const CONTROLS = [
  {
    name: '공유',
    icon: ShareIcon,
  },
  {
    name: '이름 변경',
    icon: PenIcon,
  },
  {
    name: '삭제',
    icon: DeleteIcon,
  },
];

export default function FolderPage() {
  const [menus, setMenus] = useState();
  const [folder, setFolder] = useState('전체');
  const [items, setItems] = useState([]);

  const handleMenuButtonClick = async (e) => {
    setFolder(e.target.value);
  };

  const handleLoadMenu = async () => {
    const nextMenu = await getFoldersMenu();
    setMenus(nextMenu);
  };

  const handleLoadItems = useCallback(async () => {
    const nextItems = await getFoldersItems(folder);
    setItems(nextItems);
  }, [folder]);

  useEffect(() => {
    handleLoadMenu();
  }, []);

  useEffect(() => {
    handleLoadItems();
  }, [folder, handleLoadItems]);

  return (
    <>
      <S.StyledTopWrap>
        <LinkInput />
      </S.StyledTopWrap>
      <StyledSectionWrap>
        <Search />
        <S.StyledMenuWrap>
          <S.StyledMenuList>
            <MenuButton
              item='전체'
              value='전체'
              currentFolder={folder}
              onClick={handleMenuButtonClick}
            />
            {menus?.map((menu, index) => (
              <MenuButton
                key={index}
                currentFolder={folder}
                item={menu}
                value={menu}
                onClick={handleMenuButtonClick}
              />
            ))}
          </S.StyledMenuList>
          <S.StyledAddButton>
            폴더 추가
            <S.StyledAddIcon src={AddIcon} alt='+' />
          </S.StyledAddButton>
        </S.StyledMenuWrap>
        {folder !== '전체' && (
          <S.StyledTitleWrap>
            <S.StyledTitle>{folder}</S.StyledTitle>
            <S.StyledControlWrap>
              {CONTROLS.map((control, index) => (
                <S.StyledControl key={index}>
                  <S.StyledControlIcon src={control.icon} alt='' />
                  {control.name}
                </S.StyledControl>
              ))}
            </S.StyledControlWrap>
          </S.StyledTitleWrap>
        )}
        {!items && <S.StyledNoData>저장된 링크가 없습니다</S.StyledNoData>}
        {items && <CardList items={items} />}
      </StyledSectionWrap>
      <S.StyledMobileAddButton>
        폴더 추가
        <S.StyledAddIcon src={AddWhiteIcon} alt='+' />
      </S.StyledMobileAddButton>
    </>
  );
}
