import { useCallback, useState } from "react";
import { userFoldersTapData } from "@/src/fetchUtils/index";

import Button from "./Button";
import CardTitleIcon from "../CardTitleIcon/CardTitleIcon";
import FolderAddButton from "./FolderAddButton";

import styles from "@/src/components/FolderTabList/FolderTabList.module.css";

interface FolderTabDataList {
  id: number;
  createdAt: string;
  favorite: boolean;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

interface UserFolderdataList {
  data: {
    id: number;
    createdAt: string;
    description?: string;
    folderId?: number;
    title?: string;
    updatedAt?: string;
    url: string;
    imageSource?: string;
  };
}

interface FolderTabListInterface {
  folderTabDataList: FolderTabDataList[];
  setUserFolderDataList: (data: UserFolderdataList[]) => void;
  setFolderTabName: (name: string | null) => void;
}

function FolderTabList({
  folderTabDataList,
  setUserFolderDataList,
  setFolderTabName,
}: FolderTabListInterface) {
  const [buttonClass, setButtonClass] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);

  const onClickButton = useCallback(
    async (id: number | null, name: string | null) => {
      setButtonClass(id);
      setName(name);
      setFolderTabName(name);
      try {
        const data = await userFoldersTapData(id);
        setUserFolderDataList(data);
      } catch (e) {
        if (e instanceof Error) {
          alert(e.message);
        }
      }
    },
    [setUserFolderDataList, setFolderTabName]
  );

  return (
    <>
      <div className={styles.tabWrap}>
        <ul className={styles.tabListWrap}>
          <li>
            <button
              className={
                buttonClass === null
                  ? `${styles.select} ${styles.tabListBtn}`
                  : `${styles.tabListBtn}`
              }
              onClick={() => onClickButton(null, null)}
            >
              전체
            </button>
          </li>
          {folderTabDataList.map((data) => {
            return (
              <li key={data.id}>
                <Button data={data} onClickButton={onClickButton} buttonClass={buttonClass} />
              </li>
            );
          })}
        </ul>
        <FolderAddButton />
      </div>
      <div className={styles.cardTitleWrap}>
        <h3 className={styles.cardTitle}>{buttonClass === null ? "전체" : name}</h3>
        {buttonClass !== null ? <CardTitleIcon /> : null}
      </div>
    </>
  );
}

export default FolderTabList;
