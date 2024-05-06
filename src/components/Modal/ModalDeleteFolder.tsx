import ModalFrame from "./ModalFrame";
import DeleteButton from "./DeleteButton";

const ModalDeleteFolder = ({
  info,
  onClick,
}: {
  info?: string;
  onClick: () => void;
}) => {
  return (
    <ModalFrame name="폴더 삭제" onClick={onClick}>
      <DeleteButton info={info} />
    </ModalFrame>
  );
};

export default ModalDeleteFolder;
