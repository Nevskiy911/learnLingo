import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        loginModalOpen,
        registerModalOpen,
        openLoginModal,
        closeLoginModal,
        openRegisterModal,
        closeRegisterModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
