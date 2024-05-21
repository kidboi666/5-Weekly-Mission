import { Controller } from "react-hook-form";
import { Input } from "@/src/ui";
import { ERROR_MESSAGE, PLACEHOLDER } from "../constant";
import styles from "../SignInForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface EmailFieldProps {
  control: any;
}

export const EmailField: React.FC<EmailFieldProps> = ({ control }) => (
  <div className={cx("input-box")}>
    <label className={cx("label")}>이메일</label>
    <Controller
      control={control}
      name="email"
      rules={{
        required: ERROR_MESSAGE.emailRequired,
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: ERROR_MESSAGE.emailInvalid,
        },
      }}
      render={({ field, fieldState }) => (
        <Input
          {...field}
          placeholder={PLACEHOLDER.email}
          hasError={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
        />
      )}
    />
  </div>
);