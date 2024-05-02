import { memo } from 'react';
import { LinkAddHeadInner } from '../../pages/folder/folderStyle';
import Input from '../common/atoms/Input';

function LinkAddHeader({ $inputIconImg }: { $inputIconImg: string }) {
  return (
    <LinkAddHeadInner>
      <Input
        $inputClass={'input__link--add'}
        $placeholder={'링크를 추가해 보세요'}
        $beforeBgIcon={$inputIconImg}
        $btnShow={true}
        $btnText={'추가하기'}
        $btnClass={'button--gradient mideum'}
      />
    </LinkAddHeadInner>
  );
}

export default memo(LinkAddHeader);
