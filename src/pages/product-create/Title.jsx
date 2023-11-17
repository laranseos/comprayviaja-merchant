import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";

const Title = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary form validation or submission logic here

    // Redirect to the desired page after form submission
    navigate('/product-create/descriptions');
  };

    
  const [shortCharacters, setShortCharacters] = useState(60);
  const handleShortChange = (event) => {
    const length = event.target.value.length;
    setShortCharacters(60 - length);
  }

  const [referenceCode, setReferenceCode] = useState(20);
  const handleReferenceCode= (event) => {
    const length = event.target.value.length;
    setReferenceCode(20 - length);
  }

  return (
    <div className=" w-full p-4 sm:p-16 font-semibold">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Title</h1>
        <h2 className="mt-8 mb-2">What is the title of your activity?</h2>
        <div className="py-2">
          <p>Write a short descriptive title to help customers understand your product. It should include.</p>
          <p>• the activity’s main location (where the activity starts from or takes place)</p>
          <p>• the type of activity (e.g. an entry ticket, a walking tour, a full-day trip, etc)</p>
          <p>• any important inclusions (e.g. transportation, meals, etc)</p>
        </div>
        <div className="bg-slate-200 grid sm:grid-cols-2 text-sm mt-2 p-4">
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Santorini: Highlights Tour with Wine Tasting & Sunset in Oia</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Rome: Vatican, Sistine Chapel, and St. Peter's Tour</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>From Dublin: Giant's Causeway and Belfast City Full-Day Trip</div>
          </div>
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>THE BEST VIEWS OF PARIS WITH AMAZING TOUR GUIDE</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Book a Local Friend with Company.com</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>unforgettable tour of rome</div>
          </div>
        </div>
        <input className="rounded-md mt-4 p-3 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full sm:w-2/3" placeholder="Title " onChange={handleShortChange} maxLength={60} type="text" required/>
        <p className="mb-4 text-sm">{shortCharacters} characters left</p>

        <h2 className="mt-8">Product reference code</h2>
        <div className="py-2">
          <p>To help you keep track of your products on Comprayviaja, add your own reference code or name.</p>
          <p>We’ll also assign our own code.</p>
        </div>
        <input className="rounded-md mt-4 p-3 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full sm:w-2/3" placeholder="Reference Code" onChange={handleReferenceCode} maxLength={20} type="text" required/>
        <p className="mb-4 text-sm">{referenceCode} characters left</p>
        
        <div className="flex justify-end">
          <button  className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Save & Exit</button> 
          <button type="submit" className="default-button bg-blue-600 my-8">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Title;
