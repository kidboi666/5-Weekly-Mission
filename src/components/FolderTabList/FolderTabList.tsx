import { useCallback, useState } from "react";
import { userFoldersTapData, userFoldersData } from "@/src/fetchUtils/index";

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
  id: number;
  createdAt: string;
  description?: string;
  folderId?: number;
  title?: string;
  updatedAt?: string;
  url: string;
  imageSource?: string;
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
  const [buttonClass, setButtonClass] = useState<number>(0);
  const [name, setName] = useState<string>();

  const onClickButton = useCallback(
    async (id: number, name: string) => {
      setButtonClass(id);
      setName(name);
      setFolderTabName(name);
      try {
        const response = await userFoldersTapData(id);

        const data = response.data;
        setUserFolderDataList(data);
      } catch (e) {
        if (e instanceof Error) {
          alert(e.message);
        }
      }
    },
    [setUserFolderDataList, setFolderTabName]
  );

  const onClickTotalButton = useCallback(async () => {
    setButtonClass(0);
    try {
      const response = await userFoldersData();
      const data = response.data;
      setUserFolderDataList(data);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  }, [setUserFolderDataList]);

  return (
    <>
      <div className={styles.tabWrap}>
        <ul className={styles.tabListWrap}>
          <li>
            <button
              className={
                buttonClass === 0 ? `${styles.select} ${styles.tabListBtn}` : `${styles.tabListBtn}`
              }
              onClick={() => onClickTotalButton()}
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
