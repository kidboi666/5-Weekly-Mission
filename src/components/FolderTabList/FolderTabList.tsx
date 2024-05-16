import { useCallback, useState } from "react";
import { userFoldersTapData, userFoldersData } from "@/src/fetchUtils/index";

import Button from "./Button";
import CardTitleIcon from "../CardTitleIcon/CardTitleIcon";
import FolderAddButton from "./FolderAddButton";
import styles from "@/src/components/FolderTabList/FolderTabList.module.css";

function FolderTabList({
  folderTabDataList,
  setUserFolderDataList,
  setFolderTabName,
  forderDataId,
  setForderDataId,
}: FolderTabListInterface) {
  const [name, setName] = useState<string>();

  const onClickButton = useCallback(
    async (id: number, name: string) => {
      setForderDataId(id);
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
    [setUserFolderDataList, setFolderTabName, setForderDataId]
  );

  const onClickTotalButton = useCallback(async () => {
    setForderDataId(0);
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
                forderDataId === 0
                  ? `${styles.select} ${styles.tabListBtn}`
                  : `${styles.tabListBtn}`
              }
              onClick={() => onClickTotalButton()}
            >
              전체
            </button>
          </li>
          {folderTabDataList.map((data) => {
            return (
              <li key={data.id}>
                <Button data={data} onClickButton={onClickButton} forderDataId={forderDataId} />
              </li>
            );
          })}
        </ul>
        <FolderAddButton />
      </div>
      <div className={styles.cardTitleWrap}>
        <h3 className={styles.cardTitle}>{forderDataId === 0 ? "전체" : name}</h3>
        {forderDataId !== null ? <CardTitleIcon /> : null}
      </div>
    </>
  );
}

export default FolderTabList;
