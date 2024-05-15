import ModalFrame from "./ModalFrame";
import DeleteButton from "./DeleteButton";

const ModalDeleteLink = ({
  info,
  onClick,
}: {
  info: string;
  onClick: () => void;
}) => {
  return (
    <ModalFrame name="링크 삭제" onClick={onClick}>
      <DeleteButton info={info} />
    </ModalFrame>
  );
};

export default ModalDeleteLink;
