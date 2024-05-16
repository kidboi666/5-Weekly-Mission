import { LinkAddHeadInner } from "@/styles/folderStyle";
import Input from "../common/atoms/Input";
import { memo } from "react";

function LinkAddHeader({$inputIconImg,}: {$inputIconImg: string;}) {
  return (
    <LinkAddHeadInner className="folder--fix">
    <div className='folder--fix-inner'>
        <Input
          $inputClass={'input__link--add'}
          $placeholder={'링크를 추가해 보세요'}
          $beforeBgIcon={$inputIconImg}
          $btnShow={true}
          $btnClass={'button--gradient mideum'}
        >
          추가하기
        </Input>
    </div>
  </LinkAddHeadInner>
  );
}

export default memo(LinkAddHeader);
