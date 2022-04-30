import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

export default function RequiresAuth({ login, children }) {
  const { isLoggedin } = useAuthContext();
  return isLoggedin ? children : <Navigate to="/login" replace />;
}
