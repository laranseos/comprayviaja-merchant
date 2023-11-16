
import CategorySidebar from "../pages/product-create/CategorySidebar";
import OptionSidebar from "../pages/product-create/OptionSidebar";
import { Outlet } from "react-router-dom";

const ProductRoute = () => {
 return (
  <div className="sm:flex">
    {/* <OptionSidebar /> */}
    <CategorySidebar />
    <Outlet />
  </div>
 );

};

export default ProductRoute;
