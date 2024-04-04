import Button from "./Button";
import { InputModule } from "./inputStyle";
interface IButtonModule {
  $type?: string;
  $inputClass?: string;
  $btnShow?: boolean;
  $btnText?: string;
  $placeholder?: string;
  $beforeBgIcon?: string;
  $btnClass?: string;
}
function Input({
  $btnShow = false,
  $type = "text",
  $inputClass,
  $placeholder,
  $btnText,
  $beforeBgIcon = "",
  $btnClass = "",
}: IButtonModule) {
  return (
    <>
      <InputModule
        type={$type}
        className={$inputClass}
        placeholder={$placeholder}
        $beforeBgIcon={$beforeBgIcon}
      />
      {$btnShow && <Button $btnClass={$btnClass}>{$btnText}</Button>}
    </>
  );
}
export default Input;
