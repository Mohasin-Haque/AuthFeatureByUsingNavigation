import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

export default function RequiresAuth({ login, children }) {
  const location = useLocation();
  const { isLoggedin } = useAuthContext();
  return isLoggedin ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
