import { Link, useLocation, useNavigate } from 'react-router-dom'

const CategorySidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const Menus = [
    { title: 'Product Category', path: '/product-create/category' },
    { title: 'Title', path: '/product-create/title' },
  ]

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
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex font-semibold items-center gap-x-6 p-2 text-base rounded-lg cursor-pointer hover:text-blue-400
                  ${
                  location.pathname === menu.path &&
                  'text-blue-600'
                }`}
              >
                <span
                  className='origin-left duration-300 hover:block'
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategorySidebar
