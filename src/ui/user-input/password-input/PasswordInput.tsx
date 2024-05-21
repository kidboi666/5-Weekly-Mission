import {
	ChangeEventHandler,
	FocusEventHandler,
	useMemo,
	useState,
	useCallback,
  } from "react";
  import styles from "./PasswordInput.module.scss";
  import classNames from "classnames/bind";
  import { Input, InputProps } from "@/src/ui";
  import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
  
  const cx = classNames.bind(styles);
  
  type PasswordInputProps = {
	hasEyeIcon?: boolean;
  } & Omit<InputProps, "type">;
  
  /**
   * PasswordInput 컴포넌트는 비밀번호 입력 필드를 렌더링하며, 선택적으로 비밀번호 표시/숨김 기능을 제공합니다.
   *
   * @component
   * @example
   * return (
   *   <PasswordInput
   *     value="examplePassword"
   *     placeholder="비밀번호를 입력하세요"
   *     hasEyeIcon={true}
   *     hasError={false}
   *     helperText="비밀번호를 입력해주세요."
   *     onChange={(e) => console.log(e.target.value)}
   *     onBlur={() => console.log("Input lost focus")}
   *   />
   * );
   *
   * @param {Object} props - 속성 객체입니다.
   * @param {boolean} [props.hasEyeIcon=false] - 눈 모양의 아이콘을 표시하여 비밀번호 표시/숨김을 전환할 수 있는지 여부입니다.
   * @param {string | number} props.value - 해당 입력 필드에 사용자가 입력한 값이 들어가는 변수입니다.
   * @param {string} [props.placeholder] - 입력 필드에 대한 설명 문구입니다.
   * @param {boolean} [props.hasError=false] - 에러 여부를 나타냅니다. 입력이 잘못되었는지의 여부입니다.
   * @param {string} [props.helperText] - 에러 발생 시 무엇이 문제인지 알려주는 문구입니다.
   * @param {ChangeEventHandler<HTMLInputElement>} props.onChange - 사용자 입력에 따라 value의 값을 바꾸는 함수입니다.
   * @param {FocusEventHandler<HTMLInputElement>} [props.onBlur] - focus out 이벤트 핸들러입니다.
   * 
   * @returns {JSX.Element} 비밀번호 입력 필드를 렌더링하는 컴포넌트입니다.
   */
  export const PasswordInput = ({
	hasEyeIcon = false,
	value,
	placeholder,
	hasError = false,
	helperText,
	onChange,
	onBlur,
  }: PasswordInputProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  
	const inputType = useMemo(
	  () => (isPasswordVisible ? "text" : "password"),
	  [isPasswordVisible]
	);
  
	const handleEyeIconClick = useCallback(() => {
	  setIsPasswordVisible((prev) => !prev);
	}, []);
  
	const EyeIcon = useMemo(
	  () => (
		<button
		  type="button"
		  className={cx("button")}
		  onClick={handleEyeIconClick}
		>
		  {isPasswordVisible ? <AiOutlineEyeInvisible style={{ fontSize: '1.6rem' }}/> : <AiOutlineEye style={{ fontSize: '1.6rem' }}/>}
		</button>
	  ),
	  [isPasswordVisible, handleEyeIconClick]
	);
  
	return (
	  <div className={cx("container")}>
		<Input
		  value={value}
		  placeholder={placeholder}
		  type={inputType}
		  hasError={hasError}
		  helperText={helperText}
		  onChange={onChange}
		  onBlur={onBlur}
		/>
		{hasEyeIcon && EyeIcon}
	  </div>
	);
  };
  