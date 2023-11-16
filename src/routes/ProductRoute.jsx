
import CategorySidebar from "../pages/product-create/CategorySidebar";
import OptionSidebar from "../pages/product-create/OptionSidebar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { OptionContext } from "../context/optionContext";
const ProductRoute = () => {
 
 const {option} = useContext(OptionContext);
 
 console.log('option', option);
 return (
    <div className="sm:flex">
      {option?
      <OptionSidebar />:
      <CategorySidebar />}
      <Outlet />
    </div>
 );

};

export default ProductRoute;
