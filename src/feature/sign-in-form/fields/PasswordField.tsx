import { Controller } from "react-hook-form";
import { PasswordInput } from "@/src/ui";
import { ERROR_MESSAGE, PLACEHOLDER } from "../constant";
import styles from "../SignInForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface PasswordFieldProps {
  control: any;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ control }) => (
  <div className={cx("input-box")}>
    <label className={cx("label")}>비밀번호</label>
    <Controller
      control={control}
      name="password"
      rules={{ required: ERROR_MESSAGE.passwordRequired }}
      render={({ field, fieldState }) => (
        <PasswordInput
          {...field}
          hasEyeIcon
          placeholder={PLACEHOLDER.password}
          hasError={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
        />
      )}
    />
  </div>
);
