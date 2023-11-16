import { Link, useLocation, useNavigate } from 'react-router-dom'
import IconCircleCheck from '../../components/icons/IconCircleCheck';
import { useState, useEffect } from 'react';

const CategorySidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [isTitle, setTitle] = useState(true);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const updatedMenus = [
      { title: 'Product Category', path: '/product-create/category', isCheck: isTitle },
      { title: 'Title', path: '/product-create/title', isCheck: isTitle },
      { title: 'Descriptions & highlights', path: '/product-create/descriptions', isCheck: isTitle },
      { title: 'Location', path: '/product-create/location', isCheck: isTitle },
      { title: 'Keywords', path: '/product-create/keywords', isCheck: isTitle },
      { title: 'Inclusions & Exclusions', path: '/product-create/inclusions', isCheck: isTitle },
      { title: 'Guide Information', path: '/product-create/guideinfo', isCheck: isTitle },
      { title: 'Additional Information', path: '/product-create/addinfo', isCheck: isTitle },
      { title: 'Photos', path: '/product-create/photos', isCheck: isTitle },
      { title: 'Options', path: '/product-create/options', isCheck: isTitle },
      { title: 'Review', path: '/product-create/reviews', isCheck: isTitle },
    ];
    setMenus(updatedMenus);
  }, [isTitle]);

  return (
    <div>
      <div className='w-full sm:w-56 h-[100%] duration-300 bg-[#ebeef1] p-5 text-black'>
        <ul>
            {/* <Link to={Menus[0].path}>
              <li
                className={`flex items-center font-semibold gap-x-6 p-3 text-base rounded-lg cursor-pointer hover:bg-gray-200
                  ${
                  location.pathname === Menus[0].path &&
                  'text-blue-600'
                }`}
              >
                <span
                  className='origin-left duration-300 hover:block'
                >
                  {Menus[0].title}
                </span>
              </li>
            </Link> */}
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

export default CategorySidebar;
