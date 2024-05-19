import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import Image from "next/image";
import copyToClipboard from "@/utils/copyToClipboard";
import facebookIcon from "@/assets/icons/facebook_icon.svg";
import linkIcon from "@/assets/icons/link.svg";
import KakaoButton from "@/components/KakaoButton/KakaoButton";
import * as S from "@/components/Modal/ModalContents/ShareFolder.styled";
import { openToast } from "@/redux/reducers/toast";
import { ModalProps } from "../ModalTypes";

const ShareFolder = ({ title }: ModalProps) => {
  const { selectedFolderId, selectedFolder } = useAppSelector((state) => state.modal.props);
  const dispatch = useAppDispatch();

  const onClick = () => {
    copyToClipboard(selectedFolderId);
    dispatch(openToast("copyUrl"));
  };

  return (
    <>
      <h3>{title}</h3>
      <h4>{selectedFolder}</h4>
      <S.ShareContainer>
        <KakaoButton />
        <div>
          <Image src={facebookIcon} alt={facebookIcon} />
          <p>페이스북</p>
        </div>
        <div onClick={onClick}>
          <Image src={linkIcon} alt={linkIcon} />
          <p>링크 복사</p>
        </div>
      </S.ShareContainer>
    </>
  );
};

export default ShareFolder;
