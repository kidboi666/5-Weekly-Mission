import Image from "next/image";
import starIcon from "../../assets/svg/star.svg";
import styles from "@/src/components/Card/EditableStarButton.module.css";

function EditableStarButton() {
  return (
    <button className={styles.editableStar}>
      <Image width={34} height={34} src={starIcon} alt="즐겨찾기" />
    </button>
  );
}

export default EditableStarButton;
