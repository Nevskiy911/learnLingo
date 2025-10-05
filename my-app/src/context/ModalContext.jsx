import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [bookTrialModalOpen, setBookTrialModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const openBookTrialModal = (teacher) => {
    setSelectedTeacher(teacher);
    setBookTrialModalOpen(true);
  };
  const closeBookTrialModal = () => {
    setSelectedTeacher(null);
    setBookTrialModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        // auth modals
        loginModalOpen,
        registerModalOpen,
        openLoginModal,
        closeLoginModal,
        openRegisterModal,
        closeRegisterModal,

        // book trial modal
        bookTrialModalOpen,
        selectedTeacher,
        openBookTrialModal,
        closeBookTrialModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
