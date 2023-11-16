import { Route, Routes, Navigate} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import Layout from '../layout/Layout';
import Landing from '../pages/Landing';
import Category from '../pages/product-create/Category';
import Title from '../pages/product-create/Title';
import ProductManage from '../pages/ProductManage';
import ProductRoute from './ProductRoute';
import Descriptions from '../pages/product-create/Descriptions';
import Location from '../pages/product-create/Location';
import Keywords from '../pages/product-create/Keywords';
import Inclusions from '../pages/product-create/Inclusions';
import GuideInfo from '../pages/product-create/GuideInfo';
import AddInfo from '../pages/product-create/AddInfo';
import Photos from '../pages/product-create/Photos';
import Options from '../pages/product-create/Options';

const Routers = () => {

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route element={<AuthRoute/>}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/' element={<Landing />} />
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route element={<ProductRoute />}>
              <Route path='/product-create/category' element={<Category />} />
              <Route path='/product-create/title' element={<Title />} />
              <Route path='/product-create/descriptions' element={<Descriptions />} />
              <Route path='/product-create/location' element={<Location />} />
              <Route path='/product-create/keywords' element={<Keywords />} />
              <Route path='/product-create/inclusions' element={<Inclusions />} />
              <Route path='/product-create/guideinfo' element={<GuideInfo />} />
              <Route path='/product-create/addinfo' element={<AddInfo />} />
              <Route path='/product-create/photos' element={<Photos />} />
              <Route path='/product-create/options' element={<Options />} />
            </Route>
            <Route path='/product-manage' element={<ProductManage />} />
          </Route>
          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};
export default Routers;
