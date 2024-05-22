import { Cta } from "@/src/ui";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import {
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  forwardRef,
} from "react";

const cx = classNames.bind(styles);

type LinkFormProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

/**
 * LinkForm 컴포넌트는 사용자가 링크를 추가하기 위해 URL을 입력할 수 있는 폼을 렌더링합니다.
 *
 * @component
 * @example
 * const [url, setUrl] = useState("");
 * 
 * const handleChange = (e) => setUrl(e.target.value);
 * const handleSubmit = (e) => {
 *   e.preventDefault();
 *   console.log("Submitted URL:", url);
 * };
 * 
 * return (
 *   <LinkForm
 *     value={url}
 *     onChange={handleChange}
 *     onSubmit={handleSubmit}
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.value - 텍스트 입력의 현재 값입니다.
 * @param {ChangeEventHandler<HTMLInputElement>} props.onChange - 입력 값 변경을 처리하는 콜백 함수입니다.
 * @param {FormEventHandler<HTMLFormElement>} props.onSubmit - 폼 제출을 처리하는 콜백 함수입니다.
 * @param {React.Ref<HTMLFormElement>} ref - 폼 요소에 전달할 ref입니다.
 * 
 * @returns {JSX.Element} 사용자가 링크를 추가하기 위해 URL을 입력하는 폼 컴포넌트입니다.
 */

export const LinkForm = forwardRef<HTMLFormElement, LinkFormProps>(
  ({ value, onChange, onSubmit }: LinkFormProps, ref) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    };

    return (
      <form ref={ref} className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <img className={cx("icon")} src="images/link.svg" alt="링크 아이콘" />
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
            value={value}
            onChange={onChange}
          />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    );
  }
);
