// Modal.jsx
import React, { useState } from "react";
import styles from "./Modal.module.css";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL, DEPLOY_URL } from "../../constants/baseURL";
import close from "../../assets/close.svg";
import check from "../../assets/check.png";
import kakaotalk from "../../assets/kakaotalk.png";
import facebook from "../../assets/facebook.png";
import link from "../../assets/link.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Modal({
    title,
    subtitle,
    input,
    placeholder,
    list,
    btnText,
    btnColor,
    share,
    folderId,
    onClose,
    onSubmit,
}) {
    const [inputValue, setInputValue] = useState("");
    const folderList = useFetch(`${BASE_URL}users/1/folders`);
    const [isError, setIsError] = useState(false);
    const url = `${DEPLOY_URL}shared?user=1&folder=${folderId}`;

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        if (inputValue.trim() !== "") {
            setIsError(false);
        } else setIsError(true);
    };

    const handleSubmit = () => {
        onSubmit(inputValue);
        setInputValue("");
    };

    const handleCopyUrl = () => {
        navigator.clipboard
            .writeText(url)
            .then(() => {
                toast.success("클립보드에 복사되었습니다!");
            })
            .catch((error) => {
                toast.error("복사를 실패하였습니다!");
            });
    };

    const initKakaoSDK = () => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init("bab4fbe2388df19be8aee73ca45a5cef");
        }
    };

    const shareKakaoLink = (url) => {
        initKakaoSDK();

        window.Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "Linkbrary",
                description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요.",
                imageUrl: "https://ibb.co/cgDjBG1",
                link: {
                    mobileWebUrl: url,
                    webUrl: url,
                },
            },
            buttons: [
                {
                    title: "보러가기",
                    link: {
                        mobileWebUrl: url,
                        webUrl: url,
                    },
                },
            ],
        });
    };

    const shareFacebook = (url) => {
        let title = "Linkbrary";
        window.open(
            `http://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}&t=${title}`,
            "Linkbrary",
            "width=400, height=400"
        );
    };

    const [selectedFolderIds, setSelectedFolderIds] = useState([]);

    const handleFolderClick = (folderId) => {
        if (selectedFolderIds.includes(folderId)) {
            setSelectedFolderIds(selectedFolderIds.filter((id) => id !== folderId));
        } else {
            setSelectedFolderIds([...selectedFolderIds, folderId]);
        }
    };
    return (
        <div className={styles.modal_background} onClick={onClose}>
            <div className={styles.modal_container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title_container}>
                    <h1 className={styles.title}>{title}</h1>
                    <span className={styles.subtitle}>{subtitle}</span>
                </div>
                <div className={styles.submit_container}>
                    {input && (
                        <input
                            className={`${styles.input} ${isError ? styles.error : ""}`}
                            type='text'
                            placeholder={placeholder}
                            value={inputValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    {list && (
                        <ul className={styles.list}>
                            {folderList &&
                                folderList.data.map((folder) => (
                                    <li
                                        key={folder.id}
                                        className={`${styles.list_content} ${
                                            selectedFolderIds.includes(folder.id) && styles.selected
                                        }`}
                                        onClick={() => handleFolderClick(folder.id)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                handleFolderClick(folder.id);
                                            }
                                        }}
                                    >
                                        <div className={styles.list_item}>
                                            <div className={styles.list_name}>{folder.name}</div>
                                        </div>
                                        <div className={styles.list_count}>
                                            {folder.link.count}개 링크
                                        </div>
                                        {selectedFolderIds.includes(folder.id) && (
                                            <img
                                                src={check}
                                                width={14}
                                                height={14}
                                                alt='check'
                                                className={styles.check_icon}
                                            />
                                        )}
                                    </li>
                                ))}
                        </ul>
                    )}
                    {btnColor === "submit" && (
                        <button
                            className={`${styles.submit_button} ${isError ? styles.disabled : ""}`}
                            onClick={handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleSubmit();
                                }
                            }}
                        >
                            {btnText}
                        </button>
                    )}
                    {btnColor === "delete" && (
                        <button
                            className={styles.delete_button}
                            onClick={handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleSubmit();
                                }
                            }}
                        >
                            {btnText}
                        </button>
                    )}
                    {share && folderList && (
                        <div className={styles.sns_container}>
                            <div className={styles.sns}>
                                <img
                                    className={styles.sns_image}
                                    src={kakaotalk}
                                    width={42}
                                    height={42}
                                    alt='kakaotalk'
                                    tabIndex={0}
                                    onClick={() => shareKakaoLink(url)}
                                />
                                <span className={styles.sns_text}>카카오톡</span>
                            </div>
                            <div className={styles.sns}>
                                <img
                                    className={styles.sns_image}
                                    src={facebook}
                                    width={42}
                                    height={42}
                                    alt='facebook'
                                    tabIndex={0}
                                    onClick={() => shareFacebook(url)}
                                />
                                <span className={styles.sns_text}>페이스북</span>
                            </div>
                            <div className={styles.sns}>
                                <img
                                    className={styles.sns_image}
                                    src={link}
                                    width={42}
                                    height={42}
                                    alt='link'
                                    tabIndex={0}
                                    onClick={handleCopyUrl}
                                />
                                <span className={styles.sns_text}>링크 복사</span>
                            </div>
                        </div>
                    )}
                </div>
                <img
                    src={close}
                    width={24}
                    height={24}
                    className={styles.close_btn}
                    onClick={onClose}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            onClose();
                        }
                    }}
                    tabIndex={0}
                    alt='close'
                />
            </div>
            <ToastContainer position='bottom-center' autoClose={3000} closeOnClick />
        </div>
    );
}

export default Modal;
