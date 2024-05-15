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
 * @component
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.value - 텍스트 입력의 현재 값입니다.
 * @param {Function} props.onChange - 입력 값 변경을 처리하는 콜백 함수입니다.
 * @param {Function} props.onSubmit - 폼 제출을 처리하는 콜백 함수입니다.
 * @param {React.Ref<HTMLFormElement>} ref - 폼 요소에 전달할 ref입니다.
 * @returns {JSX.Element} 사용자가 링크 추가하기 위해 해당 입력 칸에 url작성하는 그러한 컴포넌트
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
