import addImg from "@/public/link.svg";
import styles from "./AddLinkInput.module.css";
import InputBtn from "./InputBtn";
import Image from "next/image";

const AddLinkInput: React.FC = () => {
  return (
    <div className={styles.AddLinkFormWrap}>
      <form className={styles.AddLinkForm}>
        <div className={styles.AddLinkForm__wrap}>
          <Image
            className={styles.AddLinkForm__Img}
            src={addImg}
            alt="링크추가"
          />
          <input
            id={styles.AddLinkForm__Input}
            type="text"
            placeholder="링크를 추가해 보세요."
          />
          <button className={styles.AddLinkForm__addBtn}>
            <InputBtn>추가하기</InputBtn>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLinkInput;
