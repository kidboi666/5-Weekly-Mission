import React, { createContext, useContext, useReducer, ReactNode } from "react";

type ModalState = { [modalName: string]: boolean };

type Action = { type: string; modalName: string };

type ModalContextType = {
  modalState: ModalState;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
};

const ModalContext = createContext<ModalContextType>({
  modalState: {},
  openModal: () => {},
  closeModal: () => {},
});

const modalReducer = (state: ModalState, action: Action): ModalState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, [action.modalName]: true };
    case "CLOSE_MODAL":
      return { ...state, [action.modalName]: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, dispatch] = useReducer(modalReducer, {});

  const openModal = (modalName: string) => {
    dispatch({ type: "OPEN_MODAL", modalName });
  };

  const closeModal = (modalName: string) => {
    dispatch({ type: "CLOSE_MODAL", modalName });
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
