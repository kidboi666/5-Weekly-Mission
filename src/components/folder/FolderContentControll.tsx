import { memo } from 'react';
import { ShareBox, ShareListBtn } from '../../pages/folder/folderStyle';
import { SubTitle } from '../../styles/commonStyle';
import Button from '../common/atoms/Button';

const folderControlBtn = [
  {
    id: 'fcb1',
    name: '공유',
    imgSrc: '/assets/icon/icon_gray_share.svg',
    body: 'folderShare',
  },
  {
    id: 'fcb2',
    name: '이름 변경',
    imgSrc: '/assets/icon/icon_gray_pen.svg',
    body: 'folderChangeName',
  },
  {
    id: 'fcb3',
    name: '삭제',
    imgSrc: '/assets/icon/icon_gray_delete.svg',
    body: 'folderDelete',
  },
];

interface iControll {
  $title: string;
  onclick: (type: any) => void;
}

function FolderContentControll({ $title, onclick }: iControll) {
  const handleModalOpen = (type: any) => {
    onclick(type);
  };
  return (
    <ShareBox>
      <SubTitle>{$title}</SubTitle>
      {$title === '전체' || (
        <ShareListBtn>
          {folderControlBtn.map((btn) => (
            <Button
              key={btn.id}
              $id={btn.id}
              $btnClass={'button--icon-before'}
              $BeforButtonIcon={btn.imgSrc}
              $clickEvent={() => handleModalOpen(`${btn.body}`)}
            >
              {btn.name}
            </Button>
          ))}
        </ShareListBtn>
      )}
    </ShareBox>
  );
}

export default memo(FolderContentControll);
