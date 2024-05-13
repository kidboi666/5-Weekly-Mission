import { memo } from 'react';
import Button from '../common/atoms/Button';
import Link from 'next/link';
import { ShareBox } from '../share/shareStyle';
import { ShareListBtn } from '@/pages/folder/folderStyle';

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
  $id?:number
}

function FolderContentControll({ $title, onclick, $id }: iControll) {
  const handleModalOpen = (type: any) => {
    onclick(type);
  };
  return (
    <ShareBox>
      <Link href={`/shared/${$id}`} target='_blank'>{$title}</Link>
      {$title === '전체' || (
        <ShareListBtn>
          {folderControlBtn.map((btn) => (
            <Button
              key={btn.id}
              $id={btn.id}
              $btnClass={'button--icon-before'}
              $BeforButtonIcon={btn.imgSrc}
              onclick={() => handleModalOpen(`${btn.body}`)}
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
