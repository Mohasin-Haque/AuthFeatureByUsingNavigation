import { useContext, createContext, useState } from "react";

const AuthContext = createContext({ isLoggedin: false });

const AuthContextProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState();
  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
