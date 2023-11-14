import { Route, Routes, Navigate} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import Layout from '../layout/Layout';
import ErrorPage from '../pages/error-page';
import Landing from '../pages/Landing';
import Category from '../pages/product-create/Category';
import Title from '../pages/product-create/Title';
import ProductManage from '../pages/ProductManage';
import ProductRoute from './ProductRoute';
const Routers = () => {

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route element={<AuthRoute/>}>
            <Route path='/login' element={<Login />} errorElement={<ErrorPage/>} />
            <Route path='/register' element={<Signup />} errorElement={<ErrorPage/>} />
            <Route path='/' element={<Landing />} errorElement={<ErrorPage/>} />
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route element={<ProductRoute />}>
              <Route path='/product-create/category' element={<Category />} />
              <Route path='/product-create/title' element={<Title />} />
            </Route>
            <Route path='/product-manage' element={<ProductManage />} />
          </Route>
          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};
export default Routers;
