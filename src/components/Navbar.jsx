import { useDispatch, useSelector } from 'react-redux';
import mylogo from '../assets/logo1.png'
import { useGlobalContext } from "../context/SidebarContext";
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout, setCredentials, setNodes } from '../slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { setActive } from '@material-tailwind/react/components/Tabs/TabsContext';
const Navbar = () => {

  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleManage, setToggleManage] = useState(false);
  const { userInfo }  = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/users/');
  //       dispatch(setCredentials({ ...response.data }));
  //       console.log(response.data);
  //       // navigate('/register');
  //     } catch (error) {
  //       navigate('/');
  //       console.error(error.message);
  //     };
  //   };
  //   fetchData();
  // }, []); 

  const { openSidebar, openSignup } = useGlobalContext();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      const res = await logoutApiCall().unwrap();
      navigate('/');
      dispatch(logout());
      console.log(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="w-full fix flex shadow-gray-400 shadow-sm justify-between items-center py-4 bg-white">
      <div className='w-[1280px] mx-auto space-y-2'>
        <div className='flex'>
          <Link to={'/'}>
            <img src={mylogo} alt="comprayviaja" className="w-36 ml-16" />
          </Link>

          {!userInfo ?
          (<ul className="list-none flex justify-end items-center flex-1 mr-8">
            
            <li
                className="font-poppins font-medium cursor-pointer text-[18px] text-blue-600 underline underline-offset-2 rounded-xl px-4 py-1"
                onClick={() => navigate('/login')}
              >
                Login
              </li>
              <li
                className="font-poppins font-medium cursor-pointer text-[18px] text-blue-600 underline underline-offset-2 rounded-xl px-4 py-1"
                onClick={() => navigate('/register')}
              >
                Sign Up
              </li>
          </ul>)
          :
          (<ul className="list-none flex justify-end items-center flex-1">
            <li
              className="relative inline-flex font-poppins font-medium cursor-pointer text-[18px] text-blue-600 underline underline-offset-2 rounded-xl px-4 py-1 mr-8"
              onClick={logoutHandler}
            >
              Sign Out
            </li>
          </ul>
          )}
        </div>
        <hr></hr>
        <div className='flex font-semibold py-2 space-x-8 px-8'>
          <div className={` cursor-pointer ${toggleProduct ? 'text-blue-500 underline' : ''}`} onClick={()=>{setToggleProduct(true); setToggleManage(false);}}>Create Product</div>
          <div className={` cursor-pointer ${toggleManage ? 'text-blue-500 underline' : ''}`} onClick={()=>{setToggleProduct(false); setToggleManage(true);}}>Manage Product</div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
