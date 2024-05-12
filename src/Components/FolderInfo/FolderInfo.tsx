// FolderInfo.jsx
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants/baseURL";
import styles from "./FolderInfo.module.css";
import Image from "next/image";

function FolderInfo() {
    const folderData = useFetch(`${BASE_URL}sample/folder`);

    return (
        <div className={styles.folder_info_container}>
            {folderData && (
                <div className={styles.folder_info}>
                    <Image
                        src={folderData.folder.owner.profileImageSource}
                        alt='프로필'
                        width={60}
                        height={60}
                    />
                    <span className={`${styles.owner_name} span`}>
                        {folderData.folder.owner.name}
                    </span>
                    <h2 className={`${styles.folder_name} h2`}>{folderData.folder.name}</h2>
                </div>
            )}
        </div>
    );
}

export default FolderInfo;
