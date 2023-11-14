import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials, logout } from '../slices/authSlice';

import axios from 'axios';

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
  } else return <Outlet />;

};

export default PrivateRoute;
