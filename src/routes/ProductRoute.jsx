
import CategorySidebar from "../pages/product-create/CategorySidebar";
import { Outlet } from "react-router-dom";
const ProductRoute = () => {
 return (
  <div className="sm:flex">
    <CategorySidebar />
    <Outlet />
  </div>
 );

};

export default ProductRoute;
