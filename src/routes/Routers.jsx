import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import Dashboard from '../pages/user/Dashboard';
import Layout from '../components/user/Layout';
import Cycle from '../pages/user/Cycle';
import Wallet from '../pages/user/Wallet';
import Profile from '../pages/user/Profile';
import ErrorPage from '../pages/error-page';
import Landing from '../pages/Landing';

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
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/cycle' element={<Cycle />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/wallet' element={<Wallet />} />
          </Route>
        </Route>
      </Routes>
  );
};
export default Routers;
