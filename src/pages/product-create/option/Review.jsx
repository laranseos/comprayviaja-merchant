import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Review = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [guideInfo, setGuideInfo] = useState('nobody');
  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setGuideInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/product-create/addinfo');
  };

  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Guide & activity info</h1>
        <h2 className="mt-8 font-semibold mb-2">Who will your customers mainly interact with during your activity?</h2>
        
        <div className="py-2 font-semibold">
          <input type="radio" value="nobody" name="guide" id="nobody" className="mr-4" onChange={handleRadioChange} required/><label htmlFor="nobody" className="cursor-pointer">Nobody</label>
        </div>
        <div className="py-2 font-semibold">
          <input type="radio" value="tourguide" name="guide" id="tourguide" className="mr-4" onChange={handleRadioChange}/><label htmlFor="tourguide" className="cursor-pointer">Tour guide</label>
          <p className="ml-8">
            <label className="text-sm text-slate-600 cursor-pointer" htmlFor="tourguide">Leads a group of customers through a tour and explains things about the destination/attraction.</label>
          </p>
        </div>
        <div className="py-2 font-semibold">
          <input type="radio" value="host" name="guide" id="host" className="mr-4" onChange={handleRadioChange}/><label htmlFor="host" className="cursor-pointer">Host or greeter</label>
          <p className="ml-8">
            <label className="text-sm text-slate-600 cursor-pointer" htmlFor="host">Provides guidance in the form of purchasing a ticket and waiting in line with customers, but doesn't provide a full guided tour of the attraction. A greeter might give an introduction to an activity.</label>
          </p>
        </div>
        <div className="py-2 font-semibold">
          <input type="radio" value="instructor" name="guide" id="instructor" className="mr-4" onChange={handleRadioChange}/><label htmlFor="instructor" className="cursor-pointer">Instructor</label>
          <p className="ml-8">
            <label className="text-sm text-slate-600 cursor-pointer" htmlFor="instructor">Shows customers how to use equipment or teaches them how to do something</label>
          </p>
        </div>
        <div className="py-2 font-semibold">
          <input type="radio" value="driveronly" name="guide" id="driveronly" className="mr-4" onChange={handleRadioChange}/><label htmlFor="driveronly" className="cursor-pointer">Driver only</label>
          <p className="ml-8">
            <label className="text-sm text-slate-600 cursor-pointer" htmlFor="driveronly">Drives the customer somewhere but doesn’t explain anything along the way</label>
          </p>
        </div>
        <div className="flex justify-end">
          <button  className="outline-button my-8 mr-4" onClick={()=>navigate('/product-create/options')}>Save & Exit</button> 
          <button type="submit" className="default-button bg-blue-600 my-8">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
