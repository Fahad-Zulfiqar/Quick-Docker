import { useAppSelector } from "@/store/hooks";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
