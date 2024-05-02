import { memo } from 'react';
import { BoxLinkSearch } from '../../pages/folder/folderStyle';
import Input from '../common/atoms/Input';

function SearchInputBox({ $inputIconImg }: { $inputIconImg: string }) {
  return (
    <BoxLinkSearch>
      <Input
        $inputClass={'input__link--search'}
        $placeholder={'링크를 검색해 보세요.'}
        $beforeBgIcon={$inputIconImg}
      />
    </BoxLinkSearch>
  );
}

export default memo(SearchInputBox);
