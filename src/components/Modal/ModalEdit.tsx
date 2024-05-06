import ModalFrame from "./ModalFrame";
import BlueButton from "./BlueButton";
import ModalInput from "./ModalInput";

const ModalEdit = ({ onClick }: { onClick: () => void }) => {
  return (
    <ModalFrame name="폴더 이름 변경" onClick={onClick}>
      <ModalInput />
      <BlueButton>변경하기</BlueButton>
    </ModalFrame>
  );
};

export default ModalEdit;
