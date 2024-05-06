import React, { useCallback, useEffect, useState } from 'react';
import { SectionWrap } from '../Common.styled';
import LinkInput from '../../components/LinkInput/LinkInput';
import * as S from './FolderPage.styled';
import { getLinks, getFolders } from '../../api';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import MenuButton from '../../components/MenuButton/MenuButton';
import AddIcon from '../../assets/add_icon.svg';
import AddWhiteIcon from '../../assets/add_white_icon.svg';
import ShareIcon from '../../assets/share_icon.png';
import PenIcon from '../../assets/pen_icon.png';
import DeleteIcon from '../../assets/delete_icon.png';
import Modal from '../../components/Modal/Modal';

export default function FolderPage() {
  const [menus, setMenus] = useState();
  const [folders, setFolders] = useState();
  const [currentFolder, setCurrentFolder] = useState({
    name: '전체',
  });
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState();
  const [addFolderModalVisible, setAddFolderModalVisible] = useState(false);
  const [shareFolderModalVisible, setShareFolderModalVisible] = useState(false);
  const [changeFolderNameModalVisible, setChangeFolderNameModalVisible] =
    useState(false);
  const [deleteFolderModalVisible, setDeleteFolderVisible] = useState(false);

  const CONTROLS = [
    {
      name: '공유',
      icon: ShareIcon,
      onClick: () => {
        setShareFolderModalVisible(true);
      },
    },
    {
      name: '이름 변경',
      icon: PenIcon,
      onClick: () => {
        setChangeFolderNameModalVisible(true);
      },
    },
    {
      name: '삭제',
      icon: DeleteIcon,
      onClick: () => {
        setDeleteFolderVisible(true);
      },
    },
  ];

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
    const data = await getFolders();
    setFolders(data);
    const nextMenu = data.map((item) => item.name);
    const nextItemCount = data.map((item) => item.link.count);
    setMenus(nextMenu);
    setItemCount(nextItemCount);
  };

  const handleLoadItems = useCallback(async () => {
    const nextItems = await getLinks(currentFolder.id);
    setItems(nextItems);
  }, [currentFolder.id]);

  const handleAddFolderButtonClick = () => {
    setAddFolderModalVisible(true);
  };

  useEffect(() => {
    handleLoadMenu();
  }, []);

  useEffect(() => {
    handleLoadItems();
  }, [currentFolder, handleLoadItems]);

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
                <S.ControlButton key={index} onClick={control.onClick}>
                  <S.ControlIcon src={control.icon} alt='' />
                  {control.name}
                </S.ControlButton>
              ))}
            </S.ControlWrap>
          </S.TitleWrap>
        )}
        {!items?.length && <S.NoData>저장된 링크가 없습니다</S.NoData>}
        {items && <CardList items={items} />}
      </SectionWrap>
      {addFolderModalVisible && (
        <Modal
          title='폴더 추가'
          input
          button='추가하기'
          setVisible={setAddFolderModalVisible}
        />
      )}
      {shareFolderModalVisible && (
        <Modal
          title='폴더 공유'
          semiTitle={currentFolder.name}
          share
          setVisible={setShareFolderModalVisible}
        />
      )}
      {changeFolderNameModalVisible && (
        <Modal
          title='폴더 이름 변경'
          input={currentFolder.name}
          button='변경하기'
          setVisible={setChangeFolderNameModalVisible}
        />
      )}
      {deleteFolderModalVisible && (
        <Modal
          title='폴더 삭제'
          semiTitle={currentFolder.name}
          button='삭제하기'
          setVisible={setDeleteFolderVisible}
        />
      )}
    </>
  );
}
