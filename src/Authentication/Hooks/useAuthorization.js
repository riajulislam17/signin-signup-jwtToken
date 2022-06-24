import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useAuthorization = () => {
  return useContext(AuthContext);
};
export default useAuthorization;
