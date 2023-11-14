import { useDispatch, useSelector } from 'react-redux';
import mylogo from '../assets/logo1.png'
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import IconMenu from '../components/icons/IconMenu';
import IconUser5Line from '../components/icons/IconUser5Line';
import IconClose from '../components/icons/IconClose';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleManage, setToggleManage] = useState(false);
  const { userInfo }  = useSelector((state) => state.auth);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleFirstLetterClick = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

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

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      const res = await logoutApiCall().unwrap();
      navigate('/');
      dispatch(logout());
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCreate = () => {
    navigate('/product-create/category');
    setToggleProduct(true); 
    setToggleManage(false);
  }

  const handleMange = () => {
    navigate('/product-manage');
    setToggleProduct(false);
    setToggleManage(true);
  }

  return (
    <nav className="w-full top-0 flex justify-between items-center py-4 bg-white" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className='w-[1280px] mx-auto space-y-2'>
        <div className='flex'>
          <Link to={'/'}>
            <img src={mylogo} alt="comprayviaja" className="w-36 ml-4 sm:ml-16" />
          </Link>
          {
            !userInfo &&
            <div onClick={() => {navigate('/login');}} className="mr-4 sm:mr-16 ml-auto my-auto flex font-poppins font-medium cursor-pointer hover:text-blue-900 text-blue-600 rounded-xl py-1">
              <IconUser5Line className='my-auto mr-1 w-5 h-5'/>
              Log in
            </div>
          }
        </div>
        {userInfo &&
        <>
          <hr></hr>
          <div className='flex font-semibold py-2 space-x-8 text-lg px-4 sm:px-16'>
            <div className={` cursor-pointer hover:text-blue-600 my-auto  ${toggleManage ? 'text-blue-600 underline underline-offset-4' : ''}`} onClick={handleMange}>Manage</div>
            <div className={` cursor-pointer hover:text-blue-600 my-auto  ${toggleProduct ? 'text-blue-600 underline underline-offset-4' : ''}`} onClick={handleCreate}>Create</div>
            <ul className="list-none flex justify-end items-center flex-1">
              <li className='rounded-full bg-blue-100 w-10 h-10 flex relative cursor-pointer' onClick={handleFirstLetterClick}>
                <p className='m-auto'>{userInfo.firstName && userInfo.firstName.charAt(0).toUpperCase()}</p>
                {/* <IconMenu />
                <IconClose /> */}
                {showDropdown && (
                  <ul ref={dropdownRef} className="absolute py-2 px-4 space-y-2 right-0 top-full w-36 bg-slate-100 shadow rounded-md mt-1">
                    <li className={` cursor-pointer hover:text-blue-600 my-auto  ${toggleManage ? 'text-blue-600 underline underline-offset-4' : ''}`} onClick={handleMange}>Manage</li>
                    <li className={` cursor-pointer hover:text-blue-600 my-auto  ${toggleProduct ? 'text-blue-600 underline underline-offset-4' : ''}`} onClick={handleCreate}>Create</li>
                    <li className=" cursor-pointer hover:bg-slate-200" onClick={logoutHandler}>
                      Sign Out
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </>
        }
      </div>

    </nav>
  );
};

export default Navbar;
