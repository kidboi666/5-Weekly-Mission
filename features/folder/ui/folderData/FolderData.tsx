import React, { useState } from "react";
import styles from "./folderData.module.css";

import Modal from "../../../../shared/ui/modal/linkModal/LinkModal";

import EditModal from "../editFolderModal/EditModal";
import DeleteModal from "../deleteFolderModal/DeleteModal";
import ShareModal from "../shareFolderModal/ShareModal";

import LinkKebab from "../../../link/ui/toggleKebab/LinkKebab";
import LinkCard from "../../../../entities/linkCard/ui/LinkCard";
import FolderOption from "../../../../widgets/folder/ui/folderOption/FolderOption";
import useGetLinksData from "../../../../widgets/folder/ui/linkList/model/useGetLinksData";
import useSearchKeyword from "@/features/link/model/useSearchKeyword";

interface ModalType {
  [key: string]: JSX.Element;
}

const FolderData = () => {
  const { linkDataList, error } = useGetLinksData();
  const filteredList = useSearchKeyword(linkDataList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("edit");

  const modalTypeConfig = {
    edit: (
      <Modal onClickCloseModal={() => setIsModalOpen(false)}>
        <EditModal />
      </Modal>
    ),
    delete: (
      <Modal onClickCloseModal={() => setIsModalOpen(false)}>
        <DeleteModal />
      </Modal>
    ),
    share: (
      <Modal onClickCloseModal={() => setIsModalOpen(false)}>
        <ShareModal />
      </Modal>
    ),
  } as ModalType;

  // TODO: CategoryHandle과 LinkCard 분리하기 --> features와 entities로 분리하기 위해서
  return (
    <section className={styles.container}>
      <p className={styles.folderName}>유용한 글</p>
      <FolderOption
        setIsModalOpen={setIsModalOpen}
        setModalType={setModalType}
      />
      {filteredList?.length ? (
        <div className={styles.linkList}>
          {filteredList.map((link) => {
            return (
              <LinkCard key={link.id} link={link}>
                <LinkKebab />
              </LinkCard>
            );
          })}
        </div>
      ) : (
        <div>
          <p className={styles.notFoundLink}>저장된 링크가 없습니다</p>
        </div>
      )}
      {isModalOpen && modalTypeConfig[modalType]}
    </section>
  );
};

export default FolderData;
