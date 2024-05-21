import { BookMarkBtnList } from '@/styles/folderStyle';
import { memo } from 'react';
import Button from '../common/atoms/Button';
import { IFolderMenuButtonApi } from './interface';

interface IButtonList {
  $menu: IFolderMenuButtonApi | null;
  $activeBtnId: number;
  onClick: (id: number) => void;
}

function FolderButtonList({ $menu, $activeBtnId, onClick }: IButtonList) {
  return (
    <BookMarkBtnList>
      <Button
        $id={`-1`}
        $btnClass={`button--outlined ${$activeBtnId === -1 ? 'active' : ''}`}
        onclick={() => onClick(-1)}>
        전체
      </Button>
      {$menu &&
        $menu.data?.map((item) => (
          <Button
            key={item.id}
            $id={`${item.id}`}
            $btnClass={`button--outlined ${$activeBtnId === item.id ? 'active' : ''}`}
            onclick={() => onClick(item.id)}>
            {item.name}
          </Button>
        ))}
    </BookMarkBtnList>
  );
}

export default memo(FolderButtonList);
