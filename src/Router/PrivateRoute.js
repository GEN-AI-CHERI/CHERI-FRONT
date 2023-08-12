import { Navigate, Outlet } from "react-router-dom";

const isLogin = !!sessionStorage.getItem("cheritoken");

const PrivateRoute = () => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
