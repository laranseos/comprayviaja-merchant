import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../../components/icons/IconTick";
import IconCross1 from "../../../components/icons/IconCross1";
import { OptionContext } from "../../../context/optionContext";

const Pickup = () => {

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
  const {dispatch} = useContext(OptionContext);
  const [pickupOption, setPickupOption] = useState('');
  const [isAddress, setIsAddress] = useState(false);

  const [meetingDescription, setMeetingDescription] = useState(1000);
  const handleMeetingDescriptionChange = (event) => {
    const length = event.target.value.length;
    setMeetingDescription(1000 - length);
  }
  
  const handleRadioChange = (event) => {
    setPickupOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/product-create/option/pricing');
  };

  const [locations, setLocations] = useState("");
  const handleLocations = (event) => {
    setIsAddress(false);
    setLocations(event.target.value)
  }

  const handleSave = () => {
    dispatch({type:"SET_OPTION", payload:false});
    navigate('/product-create/options');
  }

  const handleAddress = () => {
    setLocations(locationRef.current.value);
    setIsAddress(true);
  }

  return (
    <div className=" w-full p-4 sm:p-16">

        <h1 className="text-4xl font-bold">Meeting point and pickup</h1>
        {/* <h2 className="mt-8 font-semibold mb-2">How do customers get to the activity?</h2>
        
        <div className="py-2 font-semibold">
          <input type="radio" value="nobody" name="guide" id="noservice" className="mr-4" onChange={handleRadioChange} required/><label htmlFor="noservice" className="cursor-pointer">They go to a set meeting point</label>
        </div>
        <div className="py-2 font-semibold">
          <input type="radio" value="tourguide" name="guide" id="service" className="mr-4" onChange={handleRadioChange}/><label htmlFor="service" className="cursor-pointer">They can choose where you pick them up from certain areas or a list of places</label>
        </div> */}

        <div className="font-semibold">
          <h2 className="py-4">Meeting point</h2>
          <p>Add meeting point Address</p>
            
          <input className="rounded-md mt-4 p-3 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full" placeholder="Location" value={locations} onChange={handleLocations} ref={locationRef}  type="text" required/>
          
          <button className="outline-button my-1" onClick={handleAddress}>Add address</button>
          {isAddress && <div className="font-bold">{locations}</div>}

          <div>
            <h2 className="mt-8 font-semibold py-2">Describe the meeting point</h2>
            <div className="font-medium">
              <p>What should customers look for at the meeting point? Is there a specific landmark or place to meet? Be as specific as possible. Do not include information you already added elsewhere in the setup, such as the start time, address, or when customers should arrive.</p>
            </div>
            <div className="bg-slate-200 text-sm font-semibold mt-2 p-4 space-y-2">
                <div>Examples</div>
                <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>You must exchange your voucher at the ticket counter before the tour begins.</div>
                <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Look for “ABC Berlin Tours” under the arch.</div>
                <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Your guide will be wearing a red and white striped shirt.</div>
            </div>
            <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-32 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="Describe the meeting point here..." onChange={handleMeetingDescriptionChange} maxLength={1000}/>
            <p className="mb-4 text-sm font-semibold">{meetingDescription} characters left</p>

          </div>
          
        </div>

        <div className="flex justify-end">
          <button  className="outline-button my-8 mr-4" onClick={handleSave}>Save & Exit</button> 
          <button type="submit" className="default-button bg-blue-600 my-8" onClick={handleSubmit}>Continue</button>
        </div>

    </div>
  );
};

export default Pickup;
