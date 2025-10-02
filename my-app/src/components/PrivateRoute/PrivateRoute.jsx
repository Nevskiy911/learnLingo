import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";

export default function PrivateRoute({ isAuthenticated, children }) {
  const { openLoginModal } = useModal();

  useEffect(() => {
    if (!isAuthenticated) {
      openLoginModal();
    }
  }, [isAuthenticated, openLoginModal]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
