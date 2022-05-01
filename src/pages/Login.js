import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

export default function Login() {
  const { isLoggedin, setIsLoggedin } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Did you get the key</h1>
      <p>If not</p>
      <button
        onClick={() => {
          setIsLoggedin((isLoggedin) => !isLoggedin);
          navigate(location.state.from.pathname);
        }}
      >
        {isLoggedin ? "logout" : "login"}
      </button>
    </div>
  );
}
