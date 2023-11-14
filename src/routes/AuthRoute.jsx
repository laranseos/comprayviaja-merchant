import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = () => {
  
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Navigate to="/dashboard" replace />;
  } else return <Outlet />;

};

export default AuthRoute;
