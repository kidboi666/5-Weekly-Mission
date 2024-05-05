import React, { useCallback, useEffect, useState } from 'react';
import { SectionWrap } from '../Common.styled';
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
import Modal from '../../components/Modal/Modal';

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
  const [itemCount, setItemCount] = useState();

  console.log('menus', menus);
  console.log('folder', folder);
  console.log('items', items);
  console.log('itemCount', itemCount);

  const handleMenuButtonClick = async (e) => {
    setFolder(e.target.value);
  };

  const handleLoadMenu = async () => {
    const data = await getFoldersMenu();
    const nextMenu = data.map((item) => item.name);
    const nextItemCount = data.map((item) => item.link.count);
    setMenus(nextMenu);
    setItemCount(nextItemCount);
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
      {/* <Modal
        width='360'
        title='폴더 이름 변경'
        // semiTitle='폴더명'
        // input='즐겨찾기'
        button='삭제하기'
        // share
        folders={['코딩팁', '유용', 'dd', 'ddd', 'ddd']}
      /> */}
      <S.StyledTopWrap>
        <LinkInput folders={menus} counts={itemCount} />
      </S.StyledTopWrap>
      <SectionWrap>
        <Search />
        <S.MenuWrap>
          <S.MenuList>
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
          </S.MenuList>
          <S.AddButton>
            폴더 추가
            <S.AddIcon src={AddIcon} alt='+' />
          </S.AddButton>
        </S.MenuWrap>
        {folder !== '전체' && (
          <S.TitleWrap>
            <S.Title>{folder}</S.Title>
            <S.ControlWrap>
              {CONTROLS.map((control, index) => (
                <S.Control key={index}>
                  <S.ControlIcon src={control.icon} alt='' />
                  {control.name}
                </S.Control>
              ))}
            </S.ControlWrap>
          </S.TitleWrap>
        )}
        {!items?.length && <S.NoData>저장된 링크가 없습니다</S.NoData>}
        {items && <CardList items={items} />}
      </SectionWrap>
      <S.MobileAddButton>
        폴더 추가
        <S.AddIcon src={AddWhiteIcon} alt='+' />
      </S.MobileAddButton>
    </>
  );
}
