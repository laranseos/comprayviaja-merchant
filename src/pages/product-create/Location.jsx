import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";

const Location = () => {

  const autoCompleteRef = useRef();
  const locationRef = useRef('')

  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ['point_of_interest', 'locality'],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        locationRef.current,
        options
    );
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [packages, setPackages] = useState({
    category : location.state,
    title : "",
  });

  const handleTitle = (e) =>{
    e.preventDefault();
  }

    
  const [locations, setLocations] = useState(60);
  const handleLocation = (event) => {
    const length = event.target.value.length;
    setLocations(60 - length);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/product-create/keywords');
  };


  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Location</h1>
        <h2 className="mt-8 font-bold mb-2">What will customers visit?</h2>
        <div className="p-2 font-semibold">
          <p>List all the major sites and locations that your customers will visit. Select the most relevant entry type.</p>
          <p>• Entry ticket included: the ticket to visit this location is included in the activity price</p>
          <p>• Entry ticket not included: the ticket is not included and your customers will pay an extra entry fee</p>
          <p>• Outside only: your customers stop and visit this location, but they don’t enter inside</p>
        </div>
        <div className="bg-slate-200 grid sm:grid-cols-2 text-sm font-semibold mt-2 p-4">
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Hong Kong Disneyland — Entry ticket included</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Eiffel Tower Summit — Entry ticket not included</div>
          </div>
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Italy</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>An ice cream shop</div>
          </div>
        </div>
      
        <input className="rounded-md mt-4 p-3 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full md:w-2/3" placeholder="Location" ref={locationRef}  type="text" required/>
        
        <div className="flex justify-end">
          <button className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Save & Exit</button> 
          <button type="submit" className="default-button my-8 bg-blue-600">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Location;
