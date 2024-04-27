import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    addFolder: false,
    renameFolder: false,
    shareFolder: false,
    deleteFolder: false,
    deleteLink: false,
    addLink: false,
  });

  const openModal = (modalName) => {
    setIsModalOpen((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setIsModalOpen((prev) => ({ ...prev, [modalName]: false }));
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
