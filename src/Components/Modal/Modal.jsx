// Modal.jsx
import React, { useState } from 'react';
import styles from './Modal.module.css';
import { useFetch } from '../../hooks/useFetch';
import { BASE_URL } from '../../constants/baseURL';
import close from '../../assets/close.svg';
import check from '../../assets/check.png';

function Modal({
    title,
    subtitle,
    input,
    placeholder,
    list,
    btnText,
    btnColor,
    share,
    onClose,
    onSubmit,
}) {
    const [inputValue, setInputValue] = useState('');
    const folderList = useFetch(`${BASE_URL}users/1/folders`);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        if (inputValue.trim() !== '') {
            setIsError(false);
        } else setIsError(true);
    };

    const handleSubmit = () => {
        onSubmit(inputValue);
        setInputValue('');
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
                            className={`${styles.input} ${isError ? styles.error : ''}`}
                            type="text"
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
                                            if (e.key === 'Enter' || e.key === ' ') {
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
                                                alt="check"
                                                className={styles.check_icon}
                                            />
                                        )}
                                    </li>
                                ))}
                        </ul>
                    )}
                    {btnColor === 'submit' && (
                        <button
                            className={`${styles.submit_button} ${isError ? styles.disabled : ''}`}
                            onClick={handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleSubmit();
                                }
                            }}
                        >
                            {btnText}
                        </button>
                    )}
                    {btnColor === 'delete' && (
                        <button
                            className={styles.delete_button}
                            onClick={handleSubmit}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleSubmit();
                                }
                            }}
                        >
                            {btnText}
                        </button>
                    )}
                </div>
                <img
                    src={close}
                    width={24}
                    height={24}
                    className={styles.close_btn}
                    onClick={onClose}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            onClose();
                        }
                    }}
                    tabIndex={0}
                    alt="close"
                />
            </div>
        </div>
    );
}

export default Modal;
