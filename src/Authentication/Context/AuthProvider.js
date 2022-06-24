import React, { createContext } from "react";
import useAuthentication from "../Hooks/useAuthentication";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = useAuthentication();
  console.log(auth);

  return (
    <div>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
