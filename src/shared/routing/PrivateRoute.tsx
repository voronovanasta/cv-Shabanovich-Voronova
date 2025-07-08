import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuth = true; //TODO
  return isAuth ? <Outlet /> : <Navigate to='/auth/login' replace />;
};

export default PrivateRoute;
