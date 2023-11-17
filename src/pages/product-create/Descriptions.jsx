import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";

const Descriptions = () => {
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

  const [shortCharacters, setShortCharacters] = useState(200);
  const handleShortChange = (event) => {
    const length = event.target.value.length;
    setShortCharacters(200 - length);
  }

  const [fullCharacters, setFullCharacters] = useState(3000);
  const handleFullChange = (event) => {
    const length = event.target.value.length;
    setFullCharacters(3000 - length);
  }

  const [high1, setHigh1] = useState(80);
  const handleHigh1Change = (event) => {
    const length = event.target.value.length;
    setHigh1(80 - length);
  }

  const [high2, setHigh2] = useState(80);
  const handleHigh2Change = (event) => {
    const length = event.target.value.length;
    setHigh2(80 - length);
  }

  const [high3, setHigh3] = useState(80);
  const handleHigh3Change = (event) => {
    const length = event.target.value.length;
    setHigh3(80 - length);
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/product-create/location');
  };

  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold py-4">Descriptions & highlights</h1>
        <div className="py-2 font-medium">
          <p>This is the main information that customers will use on your activity details page to read, compare, and book an activity.</p>
          <p>• Write all information below in English</p>
          <p>• Avoid writing “we,” “our,” or mentioning your company’s name</p>
        </div>

        <h2 className="mt-8 font-bold">Short description</h2>
        <div className="font-medium">
          <p>This is the customer’s first introduction to your activity. Aim to give customer a taste of what they’ll do in 2 or 3 sentences so they’ll want to learn more.</p>
        </div>
        <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-24 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="Short Description" onChange={handleShortChange} maxLength={200} required/>
        <p className="mb-4 text-sm font-semibold">{shortCharacters} characters left</p>

        <h2 className="mt-8 font-bold">Full description</h2>
        <div className="font-medium">
          <p>This is the main description customers will see about your activity. Include a summary of the main activity in the first paragraph. Focus on your main unique selling points here.</p>
          <p className="mt-4">Then, write the itinerary and/or main activity features. Finally, let customers know how the activity ends (e.g. do they get dropped off at the hotel? Are they in a central location to explore more?)</p>
        </div>
        <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-60 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="Full Description" onChange={handleFullChange} maxLength={3000} required/>
        <p className="mb-4 text-sm font-semibold">{fullCharacters} characters left</p>

        <h2 className="mt-8 font-bold">Activity highlights</h2>
        <div className="font-medium">
          <p>Write 3-5 short phrases about what makes your activity special. Avoid repeating the itinerary. Ask yourself: what makes this activity stand out from others?</p>
        </div>
        <div className="bg-slate-200 grid sm:grid-cols-2 text-sm font-semibold mt-2 p-4">
          <div className="space-y-2">
            <div>Good highlight examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Savor the bright flavors of Vietnamese food with an immersive cooking class</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Be transported back to Ancient Rome as you stroll through the Colosseum</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Discover 35,000 works of art up close and at your own pace</div>
          </div>
          <div className="space-y-2">
            <div>Examples to avoid</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Vatican Museums, Sistine Chapel, St. Peter’s Basilica</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Amazing views!</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Entrance tickets, local guide, and lunch</div>
          </div>
        </div>
        <input className="rounded-md mt-4 p-3 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full" placeholder="Highlights - 1" maxLength={80} onChange={handleHigh1Change} type="text" required/>
        <p className="mb-4 text-sm font-semibold">{high1} characters left</p>
        
        <input className="rounded-md p-3 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full" placeholder="Highlights - 2" maxLength={80} onChange={handleHigh2Change} type="text" required/>
        <p className="mb-4 text-sm font-semibold">{high2} characters left</p>
        
        <input className="rounded-md p-3 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full" placeholder="Highlights - 3" maxLength={80} onChange={handleHigh3Change} type="text" required/>
        {/* {
          high3 < 0?
        <p className="mb-4 text-red-600 text-sm font-semibold">{high3} characters left</p>
        : <p className="mb-4 text-sm font-semibold">{high3} characters left</p>
        
        } */}
        <p className="mb-4 text-sm font-semibold">{high3} characters left</p>
        
        <div className="flex justify-end">
          {/* <button className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Save & Exit</button>  */}
          <button type="submit" className="default-button bg-blue-600 my-8">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Descriptions;
