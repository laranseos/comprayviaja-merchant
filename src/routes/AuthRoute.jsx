import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = () => {
  
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Navigate to="/product-create/category" replace />;
  } else return <Outlet />;

};

export default AuthRoute;
