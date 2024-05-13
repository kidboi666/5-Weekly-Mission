import React, { useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
    id: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ id, placeholder }) => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleEyeToggle = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setErrorMessage("내용을 입력하세요.");
        } else {
            setErrorMessage("");
        }
    };

    return (
        <div className={styles.input_container}>
            <input
                id={id}
                className={`${styles.input} ${errorMessage ? styles.invalid : ""}`}
                type={passwordVisible ? "text" : "password"}
                placeholder={placeholder}
                onBlur={handleBlur}
            />
            {errorMessage && <span className={styles.error_msg}>{errorMessage}</span>}
            <button
                className={`${styles.eye_button} ${passwordVisible ? styles.on : ""}`}
                onClick={handleEyeToggle}
                type='button'
            ></button>
        </div>
    );
};

export default Input;
