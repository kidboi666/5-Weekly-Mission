import { memo } from 'react';
import { BookMarkBtnList } from '../../pages/folder/folderStyle';
import Button from '../common/atoms/Button';
import { IFolderMenuButtonApi } from '../../pages/folder/interface';

interface IButtonList {
  $menu: IFolderMenuButtonApi | null;
  $loading: boolean;
  $btnActive: number;
  onClick: (id:number) => void;
}

function FolderButtonList({
  $menu,
  $loading,
  $btnActive,
  onClick,
}: IButtonList) {

  return (
    <BookMarkBtnList>
      {$loading ? null : (
        <>
          <Button
            $id={'all'}
            $btnClass={`button--outlined ${$btnActive === -1 ? 'active' : ''}`}
            onclick={() => onClick(-1)}
          >
            전체
          </Button>
          {$menu &&
            $menu.data?.map((item, i) => (
              <Button
                key={item.id}
                $id={`${item.id}`}
                $btnClass={`button--outlined ${
                  $btnActive === i ? 'active' : ''
                }`}
                onclick={() => onClick(item.id)}
              >
                {item.name}
              </Button>
            ))}
        </>
      )}
    </BookMarkBtnList>
  );
}

export default memo(FolderButtonList);
