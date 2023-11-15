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
import Descriptions from '../pages/product-create/Descriptions';
import Location from '../pages/product-create/Location';
import Keywords from '../pages/product-create/Keywords';
import Inclusions from '../pages/product-create/Inclusions';
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
              <Route path='/product-create/descriptions' element={<Descriptions />} />
              <Route path='/product-create/location' element={<Location />} />
              <Route path='/product-create/keywords' element={<Keywords />} />
              <Route path='/product-create/inclusions' element={<Inclusions />} />
            </Route>
            <Route path='/product-manage' element={<ProductManage />} />
          </Route>
          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};
export default Routers;
