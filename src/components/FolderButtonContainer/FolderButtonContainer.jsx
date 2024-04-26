import { useState } from 'react';
import * as S from './FolderButtonContainer.styled';
import FolderButton from '../FolderButton/FolderButton';
import AddIcon from '../../assets/add.svg';

function FolderButtonContainer({ link, setFolderName, setFolderId }) {
  const [linkSelected, setLinkSelected] = useState(false);
  const [totalBtn, setTotalBtn] = useState(true);

  const handleMenuClick = (index) => {
    const booleanArr = [...link].fill(false);
    booleanArr[index] = true;
    setLinkSelected(booleanArr);
    setTotalBtn(false);
  };

  const setTotal = () => {
    const totalArr = [...link].fill(false);
    setLinkSelected(totalArr);
    setFolderId('');
    setFolderName('');
    setTotalBtn(true);
  };

  return (
    <S.FolderMenu>
      <S.FolderButtons>
        <S.TotalFolderButton onClick={setTotal} $select={totalBtn}>
          전체
        </S.TotalFolderButton>
        {link
          ? link.map((item, index) => (
              <FolderButton
                item={item}
                key={item.name}
                setFolderId={setFolderId}
                setFolderName={setFolderName}
                isSelected={linkSelected[index]}
                handleMenuClick={handleMenuClick}
                index={index}
              />
            ))
          : null}
      </S.FolderButtons>
      <S.AddFolderButton>
        폴더 추가
        <img src={AddIcon} alt="AddIcon" />
      </S.AddFolderButton>
    </S.FolderMenu>
  );
}

export default FolderButtonContainer;
