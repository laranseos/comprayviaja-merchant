import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { OptionContext } from "../../../context/optionContext";

const Pricing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {dispatch} = useContext(OptionContext);
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type:"SET_OPTION", payload:false});
    navigate('/product-create/options');
  };

  const handleSave = () => {
    dispatch({type:"SET_OPTION", payload:false});
    navigate('/product-create/options');
  }

  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Pricing</h1>
        <h2 className="mt-8 font-semibold mb-2">Set the price for your activity</h2>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 py-4">
            <div>
              <p className="text-sm">Customer pays</p>
              <input type="text"  pattern="[0-9]*" className="rounded-md p-2 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-1/2" value={price} 
              onChange={(e) => {
                  if (e.target.value.match(/^[0-9]*$/)) {
                    setPrice(e.target.value);
                  }
                }} />
            <span className="font-semibold ml-2 text-xl">USD</span>
            </div>
            <div>
              <p className="text-sm">Commission</p>
              <input type="text" className="rounded-md p-2 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-1/2" value={30} disabled/><span className="font-semibold ml-2 text-xl">%</span>
            </div>
            <div>
              <p className="text-sm">Price per participant</p>
              <input type="text" className="rounded-md p-2 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-1/2" value={(price*0.3).toFixed(2)} disabled/><span className="font-semibold ml-2 text-xl">USD</span>
            </div>

          </div>
        </div>
        <div className="flex justify-end">
          {/* <button  className="outline-button my-8 mr-4" onClick={handleSave}>Save & Exit</button>  */}
          <button type="submit" className="default-button bg-blue-600 my-8">Finish</button>
        </div>
      </form>
    </div>
  );
};

export default Pricing;
