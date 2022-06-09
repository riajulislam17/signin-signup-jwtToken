import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function PrivateOutlet() {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
