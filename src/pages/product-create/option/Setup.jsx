import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../../components/icons/IconTick";
import IconCross1 from "../../../components/icons/IconCross1";
import { useContext } from "react";
import { OptionContext } from "../../../context/optionContext";

// import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown } from "react-country-region-selector";


const Setup = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const {dispatch} = useContext(OptionContext);
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState("Peru");
  const [groupSize, setGroupSize] = useState(0);

  const [durationType, setDurationType] = useState('nobody');

  const [duration, setDuration] = useState(0);
  const [durationUnit, setDurationUnit] = useState("Hour(s)");
 
  const [validPeriod, setValidPeriod] = useState(0);
  const [validPeriodUnit, setValidPeriodUnit] = useState("Hour(s)");
 
  const [cutoff, setCutoff] = useState(0);
  const [cutoffUnit, setCutoffUnit] = useState("Minute(s)");

  const [packages, setPackages] = useState({
    category : location.state,
    title : "",
  });

  const options = [];
  let i = 1;
  while (i <= 100) {
    options.push({ value: i, label: i.toString() });
    i++;
  }

  const handleTitle = (e) =>{
    e.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary form validation or submission logic here

    // Redirect to the desired page after form submission
    navigate('/product-create/option/pickup');
  };

  const [titleCharacters, setTitleCharacters] = useState(60);
  const handleTitleChange = (event) => {
    const length = event.target.value.length;
    setTitleCharacters(60 - length);
  }

  const [shortCharacters, setShortCharacters] = useState(255);
  const handleShortChange = (event) => {
    const length = event.target.value.length;
    setShortCharacters(255 - length);
  }

  const [referenceCode, setReferenceCode] = useState(20);
  const handleReferenceCode= (event) => {
    const length = event.target.value.length;
    setReferenceCode(20 - length);
  }

  const handleSave = () => {
    dispatch({type:"SET_OPTION", payload:false});
    navigate('/product-create/options');
  }

  return (
    <div className=" w-full p-4 sm:p-16 font-semibold">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Option setup</h1>
        <h2 className="mt-8 mb-2">Option title</h2>
        <div className="py-2">
          <p>Option title section becomes editable if there is more than one option. If there is only one it will be the same as the activity title. If you offer multiple options, write a short title that clearly explains how this option differs from the others.</p>
        </div>
        <div className="bg-slate-200 grid sm:grid-cols-2 sm:space-y-0 space-y-2 text-sm mt-2 p-4">
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Guided tour in French</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Private tour</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Entry ticket with lunch</div>
          </div>
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Rome: Vatican Museums Guided Tour in French</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Exclusive private tour for just you and three loved ones</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Tour</div>
          </div>
        </div>
        <input className="rounded-md mt-4 p-3 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full sm:w-2/3" placeholder="Option Title" onChange={handleShortChange} maxLength={60} type="text" required/>
        <p className="mb-4 text-sm">{titleCharacters} characters left</p>

        <h2 className="mt-8">Option reference code</h2>
        <div className="py-2">
          <p>Add a reference code to help you keep track of which option the customer has booked. This is mainly for your records and won’t be seen by the customer.</p>
        </div>
        <input className="rounded-md mt-4 p-3 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none w-full sm:w-2/3" placeholder="Reference Code" onChange={handleReferenceCode} maxLength={20} type="text" required/>
        <p className="mb-4 text-sm">{referenceCode} characters left</p>

        <h2 className="mt-8 font-bold">Option description</h2>
        <div className="font-medium">
          <p>This is the customer’s first introduction to your activity. Aim to give customer a taste of what they’ll do in 2 or 3 sentences so they’ll want to learn Leave this section empty unless the option titles alone can’t clearly explain the differences between your options.</p>
        </div>
        <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-24 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="Option Description" onChange={handleShortChange} maxLength={255}/>
        <p className="mb-4 text-sm font-semibold">{shortCharacters} characters left</p>

        <h2 className="mt-8 font-bold text-2xl">Activity setup</h2>
        <div className="font-medium mt-4">
          <p>What languages does the guide speak during the activity? Choose all that apply.</p>
          <div className="mt-2">
            <p>Select Lanuage</p>
            <CountryDropdown
              value={language}
              defaultOptionLabel={language}
              onChange={(val) => setLanguage(val)}
              className="border rounded-md p-2 hover:border-blue-600 focus:border-green-600 outline-none"
            />
          </div>
        </div>

        <h2 className="mt-8 font-bold">Maximum group size</h2>
        <div className="font-medium mt-4">
          <p>What is the maximum total of people in your guided experience? This number includes people who book outside of Comprayviaja.</p>
          <div className="mt-2">
            <p>Select Group size</p>
            <select className="w-32 rounded-md border p-2  hover:border-blue-600 focus:border-green-600 outline-none" value={groupSize} onChange={(e)=>setGroupSize(e.target.value)}>
              <option disabled>Please select</option>
              <option value='Nolimit'>No limit</option>
              {Array.from({ length: 100 }, (_, index) => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>
        </div>

        <h2 className="mt-8 font-bold text-2xl">Time and length</h2>
        <div className="font-medium mt-4">
          <p>Some activities start and stop at specific times. Others allow customers to use their ticket anytime within a certain amount of time, like a 2-day city pass.</p>
          <p className="py-4">Which best describes your activity?</p>
          <div className="mt-2">
            <div className="py-2 font-semibold">
              <input type="radio" value="duration" name="guide" id="host" className="mr-4" onChange={(e)=>setDurationType(e.target.value)}/><label htmlFor="host" className="cursor-pointer" required>It lasts for a specific amount of time (duration)</label>
              <p className="ml-8">
                <label className="text-sm text-slate-600 cursor-pointer" htmlFor="host">Example: 3-hour guided tour</label>
              </p>
            </div>
            {durationType === 'duration'&&
            <div className="flex">
              <input type="number" className="w-16 rounded-md border p-2  hover:border-blue-600 focus:border-green-600 outline-none" step={0.5} value={duration} onChange={(e)=>setDuration(e.target.value)} id="duration" min={0}  />
              <select className="w-32 rounded-md border p-2  hover:border-blue-600 focus:border-green-600 outline-none" value={durationUnit} onChange={(e)=>setDurationUnit(e.target.value)}>
                <option disabled>Please select...</option>
                <option value='Minute(s)'>Minute(s)</option>
                <option value='Hour(s)' selected>Hour(s)</option>
                <option value='Day(s)'>Day(s)</option>
              </select>
            </div>
            }

            <div className="py-2 font-semibold">
              <input type="radio" value="validPeriod" name="guide" id="instructor" className="mr-4" onChange={(e)=>setDurationType(e.target.value)}/><label htmlFor="instructor" className="cursor-pointer" required>Customers can use their ticket anytime during a certain period (validity)</label>
              <p className="ml-8">
                <label className="text-sm text-slate-600 cursor-pointer" htmlFor="instructor">Example: museum tickets that can be used anytime during opening hours</label>
              </p>
            </div>
            {durationType === 'validPeriod'&&
            <div className="flex">
              <input type="number" className="w-16 rounded-md border p-2  hover:border-blue-600 focus:border-green-600 outline-none" step={0.5} value={validPeriod} onChange={(e)=>setValidPeriod(e.target.value)} id="period" min={0}/>
              <select className="w-32 rounded-md border p-2  hover:border-blue-600 focus:border-green-600 outline-none" value={validPeriodUnit} onChange={(e)=>setValidPeriodUnit(e.target.value)}>
                <option disabled>Please select...</option>
                <option value='Minute(s)'>Minute(s)</option>
                <option value='Hour(s)' selected>Hour(s)</option>
                <option value='Day(s)'>Day(s)</option>
              </select>
            </div>
            }
          </div>
        </div>

        <h2 className="mt-8 font-bold text-2xl">Confirming bookings and cut-off time</h2>
        <div className="font-medium mt-4">
          <p>The cut-off time is the very latest you accept new bookings before the activity starts.</p>
          <p>Since many customers book right before they want to start their activity, having a cut-off time of 30 minutes or less can lead to 50% more bookings than longer cut-off times.</p>
          <p className="py-4">How far in advance do you stop accepting new bookings before the activity starts?</p>
          <div className="mt-2">
            <div className="flex">
              <input type="number" className="w-16 rounded-md border p-2  hover:border-blue-600 focus:border-green-600 outline-none" step={0.5} value={cutoff} onChange={(e)=>setCutoff(e.target.value)} id="cutoff" min={0}  />
              <select className="w-32 rounded-md border p-2  hover:border-blue-600 focus:border-green-600 outline-none" value={cutoffUnit} onChange={(e)=>setCutoffUnit(e.target.value)}>
                <option disabled>Please select...</option>
                <option value='Minute(s)' selected>Minute(s)</option>
                <option value='Hour(s)'>Hour(s)</option>
                <option value='Day(s)'>Day(s)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button  className="outline-button my-8 mr-4" onClick={handleSave}>Save & Exit</button> 
          <button type="submit" className="default-button bg-blue-600 my-8">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Setup;
