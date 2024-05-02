import { memo } from 'react';
import { BookMarkBtnList } from '../../pages/folder/folderStyle';
import Button from '../common/atoms/Button';
import { IFolderMenuButtonApi } from '../../pages/folder/interface';

interface IButtonList {
  $menu: IFolderMenuButtonApi | null;
  $loading: boolean;
  $btnActive: number;
  onClick: (api: string, index: number) => void;
}

function FolderButtonList({
  $menu,
  $loading,
  $btnActive,
  onClick,
}: IButtonList) {
  console.log($menu);
  const handleClick = (api: string, index: number) => {
    onClick(api, index);
  };
  return (
    <BookMarkBtnList>
      {$loading ? null : (
        <>
          <Button
            $id={'all'}
            $btnClass={`button--outlined ${$btnActive === -1 ? 'active' : ''}`}
            $clickEvent={() => handleClick('all', -1)}
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
                $clickEvent={() => handleClick(`${item.id}`, i)}
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
