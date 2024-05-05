import React, { useCallback, useEffect, useState } from 'react';
import { SectionWrap } from '../Common.styled';
import LinkInput from '../../components/LinkInput/LinkInput';
import * as S from './FolderPage.styled';
import { getFoldersItems, getFoldersMenu } from '../../api';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import MenuButton from '../../components/MenuButton/MenuButton';
import AddIcon from '../../assets/add_icon.svg';
import AddWhiteIcon from '../../assets/add_white_icon.svg';
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
  const [folders, setFolders] = useState();
  const [currentFolder, setCurrentFolder] = useState({
    name: '전체',
  });
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState();
  const [addFolderModalVisible, setAddFolderModalVisible] = useState(false);

  console.log(currentFolder);

  const handleMenuButtonClick = async (e) => {
    if (e.target.value === '전체') {
      setCurrentFolder({
        name: '전체',
      });
      return;
    }
    setCurrentFolder(
      folders.filter((folder) => folder.name === e.target.value).splice(0, 1)[0]
    );
  };

  const handleLoadMenu = async () => {
    const data = await getFoldersMenu();
    setFolders(data);
    const nextMenu = data.map((item) => item.name);
    const nextItemCount = data.map((item) => item.link.count);
    setMenus(nextMenu);
    setItemCount(nextItemCount);
  };

  const handleLoadItems = async () => {
    const nextItems = await getFoldersItems(currentFolder.id);
    setItems(nextItems);
  };

  const handleAddFolderButtonClick = () => {
    setAddFolderModalVisible(true);
  };

  useEffect(() => {
    handleLoadMenu();
  }, []);

  useEffect(() => {
    handleLoadItems();
  }, [currentFolder]);

  return (
    <>
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
              currentFolder={currentFolder}
              onClick={handleMenuButtonClick}
            />
            {menus?.map((menu, index) => (
              <MenuButton
                key={index}
                currentFolder={currentFolder}
                item={menu}
                value={menu}
                onClick={handleMenuButtonClick}
              />
            ))}
          </S.MenuList>
          <S.AddButton onClick={handleAddFolderButtonClick}>
            폴더 추가
            <img src={AddIcon} alt='+' />
            <img src={AddWhiteIcon} alt='+' />
          </S.AddButton>
        </S.MenuWrap>
        {currentFolder?.name !== '전체' && (
          <S.TitleWrap>
            <S.Title>{currentFolder?.name}</S.Title>
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
      {addFolderModalVisible && (
        <Modal
          width='360'
          title='폴더 추가'
          input
          button='추가하기'
          setVisible={setAddFolderModalVisible}
        />
      )}
    </>
  );
}
