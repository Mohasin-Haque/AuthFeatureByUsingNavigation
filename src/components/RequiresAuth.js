import { Navigate } from "react-router-dom";

export default function RequiresAuth({ login, children }) {
  return login ? children : <Navigate to="/login" replace />;
}
