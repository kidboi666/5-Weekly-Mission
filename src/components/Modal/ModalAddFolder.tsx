import ModalFrame from "./ModalFrame";
import BlueButton from "./BlueButton";
import ModalInput from "./ModalInput";

const ModalAddFolder = ({ onClick }: { onClick: () => void }) => {
  return (
    <ModalFrame name="폴더 추가" onClick={onClick}>
      <ModalInput />
      <BlueButton>추가하기</BlueButton>
    </ModalFrame>
  );
};

export default ModalAddFolder;
