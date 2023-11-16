import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials, logout } from '../slices/authSlice';

import axios from 'axios';

import { OptionProvider } from '../context/optionContext';

const PrivateRoute = () => {
  
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users/');
        dispatch(setCredentials({ ...response.data }));
        console.log(response.data);
      } catch (error) {
        dispatch(logout());
        navigate('/');
        console.error(error.message);
      };
    };

    fetchData();
    
  }, []); 

  if (!userInfo) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <OptionProvider>
        <div className='w-full lg:w-[1280px] mx-auto overflow-hidden'>
          <div className='w-full'>
              <div><Outlet /></div>
          </div>
        </div>
      </OptionProvider>

    );
  }

};

export default PrivateRoute;
