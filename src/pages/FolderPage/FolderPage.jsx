import React, { useCallback, useEffect, useState } from 'react';
import { SectionWrap } from '../Common.styled';
import LinkInput from '../../components/LinkInput/LinkInput';
import * as S from './FolderPage.styled';
import { getLinks, getFolders } from '../../apis/api';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import MenuButton from '../../components/MenuButton/MenuButton';
import AddIcon from '../../assets/images/add_icon.svg';
import AddWhiteIcon from '../../assets/images/add_white_icon.svg';
import ShareIcon from '../../assets/images/share_icon.png';
import PenIcon from '../../assets/images/pen_icon.png';
import DeleteIcon from '../../assets/images/delete_icon.png';
import Modal from '../../components/Modal/Modal';

export default function FolderPage() {
  const [folderNames, setFolderNames] = useState();
  const [folders, setFolders] = useState();
  const [currentFolder, setCurrentFolder] = useState({
    name: '전체',
  });
  const [items, setItems] = useState([]);
  const [itemCountsInEachFolder, setItemCountsInEachFolder] = useState();
  const [isVisibleAddFolderModal, setIsVisibleAddFolderModal] = useState(false);
  const [isVisibleShareFolderModal, setIsVisibleShareFolderModal] =
    useState(false);
  const [isVisibleChangeFolderNameModal, setIsVisibleChangeFolderNameModal] =
    useState(false);
  const [isVisibleDeleteFolderModal, setIsVisibleDeleteFolder] =
    useState(false);

  const CONTROLS = [
    {
      name: '공유',
      icon: ShareIcon,
      onClick: () => {
        setIsVisibleShareFolderModal(true);
      },
    },
    {
      name: '이름 변경',
      icon: PenIcon,
      onClick: () => {
        setIsVisibleChangeFolderNameModal(true);
      },
    },
    {
      name: '삭제',
      icon: DeleteIcon,
      onClick: () => {
        setIsVisibleDeleteFolder(true);
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
    const nextFolderNames = data.map((item) => item.name);
    const nextItemCounts = data.map((item) => item.link.count);
    setFolderNames(nextFolderNames);
    setItemCountsInEachFolder(nextItemCounts);
  };

  const handleLoadItems = useCallback(async () => {
    const nextItems = await getLinks(currentFolder.id);
    setItems(nextItems);
  }, [currentFolder.id]);

  const handleAddFolderButtonClick = () => {
    setIsVisibleAddFolderModal(true);
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
        <LinkInput
          folderNames={folderNames}
          itemCountsInEachFolder={itemCountsInEachFolder}
        />
      </S.StyledTopWrap>
      <SectionWrap>
        <Search />
        <S.MenuWrap>
          <S.MenuList>
            <MenuButton
              currentFolder={currentFolder}
              folderName='전체'
              onClick={handleMenuButtonClick}
            />
            {folderNames?.map((folderName, index) => (
              <MenuButton
                key={index}
                currentFolder={currentFolder}
                folderName={folderName}
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
        {items && (
          <CardList
            items={items}
            folderNames={folderNames}
            itemCountsInEachFolder={itemCountsInEachFolder}
          />
        )}
      </SectionWrap>
      {isVisibleAddFolderModal && (
        <Modal
          title='폴더 추가'
          input
          button='추가하기'
          onClose={setIsVisibleAddFolderModal}
        />
      )}
      {isVisibleShareFolderModal && (
        <Modal
          title='폴더 공유'
          semiTitle={currentFolder.name}
          folderId={currentFolder.id}
          onClose={setIsVisibleShareFolderModal}
        />
      )}
      {isVisibleChangeFolderNameModal && (
        <Modal
          title='폴더 이름 변경'
          input={currentFolder.name}
          button='변경하기'
          onClose={setIsVisibleChangeFolderNameModal}
        />
      )}
      {isVisibleDeleteFolderModal && (
        <Modal
          title='폴더 삭제'
          semiTitle={currentFolder.name}
          button='삭제하기'
          onClose={setIsVisibleDeleteFolder}
        />
      )}
    </>
  );
}
