import ModalFrame from "./ModalFrame";
import DeleteButton from "./DeleteButton";

const ModalDeleteFolder = ({ info, onClick }) => {
  return (
    <ModalFrame name="폴더 삭제" onClick={onClick}>
      <DeleteButton info={info} />
    </ModalFrame>
  );
};

export default ModalDeleteFolder;
