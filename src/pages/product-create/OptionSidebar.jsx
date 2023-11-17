import { Link, useLocation, useNavigate } from 'react-router-dom'
import IconCircleCheck from '../../components/icons/IconCircleCheck';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { OptionContext } from '../../context/optionContext';

const OptionSidebar = () => {

  const {dispatch} = useContext(OptionContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [isTitle, setTitle] = useState(true);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const updatedMenus = [
      { title: 'Option setup', path: '/product-create/option/setup', isCheck: isTitle },
      { title: 'Meeting point & pickup  ', path: '/product-create/option/pickup', isCheck: isTitle },
      { title: 'Availability & Pricing', path: '/product-create/option/pricing', isCheck: isTitle },
      // { title: 'Review', path: '/product-create/option/review', isCheck: isTitle },
    ];
    setMenus(updatedMenus);
  }, [isTitle]);

  const handleBackProduct = () => {
    navigate('/product-create/options');
    dispatch({type:"SET_OPTION", payload:false});
  }

  return (
    <div>
      <div className='w-full sm:w-56 h-[100%] duration-300 bg-[#ebeef1] p-5 text-black'>
        <ul>
          <button onClick={handleBackProduct} className='outline-button w-full my-2'>Back to product</button>
          {menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex font-semibold items-center gap-x-6 p-2 text-base rounded-lg cursor-pointer hover:text-blue-400
                  ${
                  location.pathname === menu.path &&
                  'text-blue-600'
                }`}
              >
                <span
                  className='origin-left duration-300 flex w-full justify-between'
                >
                  <span className='w-[90%]'>{menu.title}</span>
                  {menu.isCheck&&<IconCircleCheck className='my-auto w-4 h-4 text-green-600'/>}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default OptionSidebar;
