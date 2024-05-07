import { memo } from 'react';
import { BoxLinkSearch } from '../../pages/folder/folderStyle';
import Input from '../common/atoms/Input';

interface ISearch {
  $inputIconImg: string;
  onchange: (value: string) => void;
}

function SearchInputBox({ $inputIconImg, onchange }: ISearch) {
  return (
    <BoxLinkSearch>
      <Input
        $inputClass={'input__link--search'}
        $placeholder={'링크를 검색해 보세요.'}
        $beforeBgIcon={$inputIconImg}
        $btnShow={true}
        $btnClass={'button--modal-close'}
        $clickEvent={'reset'}
        onchange={onchange}
      >
        <img src="/assets/icon/icon_close.svg" alt="닫기" />
      </Input>
    </BoxLinkSearch>
  );
}

export default memo(SearchInputBox);
