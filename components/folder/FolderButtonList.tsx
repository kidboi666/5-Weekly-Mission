import { BookMarkBtnList } from '@/pages/folder/folderStyle';
import { memo } from 'react';
import Button from '../common/atoms/Button';
import { IFolderMenuButtonApi } from '@/pages/folder/interface';

interface IButtonList {
  $menu: IFolderMenuButtonApi | null;
  $btnActive: number | string;
  onClick: (id:number) => void;
}

function FolderButtonList({
  $menu,
  $btnActive,
  onClick,
}: IButtonList) {

  return (
    <BookMarkBtnList>
      <Button
        $id={-1}
        $btnClass={`button--outlined ${$btnActive === -1 ? 'active' : ''}`}
        onclick={() => onClick(-1)}
      >
        전체
      </Button>
      {$menu &&
        $menu.data?.map((item) => (
          <Button
            key={item.id}
            $id={`${item.id}`}
            $btnClass={`button--outlined ${
              $btnActive === item.id ? 'active' : ''
            }`}
            onclick={() => onClick(item.id)}
          >
            {item.name}
          </Button>
        ))}
    </BookMarkBtnList>
  );
}

export default memo(FolderButtonList);
