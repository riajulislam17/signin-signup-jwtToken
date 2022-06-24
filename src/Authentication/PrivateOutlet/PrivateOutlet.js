import { Navigate, Outlet } from "react-router-dom";
import useAuthorization from "../Hooks/useAuthorization";

export default function PrivateOutlet() {
  const { token } = useAuthorization();
  console.warn(typeof token);
  console.error( token);

  if (token === null ||  typeof token === "undefined") {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}
