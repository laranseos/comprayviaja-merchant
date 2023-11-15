import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";

const Inclusions = () => {
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

  const [inclusions, setInclusions] = useState(1000);
  const handleInclusionsChange = (event) => {
    const length = event.target.value.length;
    setInclusions(1000 - length);
  }

  const [exclusions, setExclusions] = useState(1000);
  const handleExclusionsChange = (event) => {
    const length = event.target.value.length;
    setExclusions(1000 - length);
  }

  return (
    <div className=" w-full p-4 sm:p-16">
      <form>

        <h1 className="text-4xl font-bold">Inclusions & exclusions</h1>
        <div className="py-2 font-medium">
          <p>This is the main information that customers will use on your activity details page to read, compare, and book an activity.</p>
          <p>• Write all information below in English</p>
          <p>• Avoid writing “we,” “our,” or mentioning your company’s name</p>
        </div>

        <h2 className="mt-8 font-bold">Main inclusions</h2>
        <div className="font-medium">
          <p>Include all the main features that are included in the price. This allows customers to see the value for money for this activity.</p>
          <p>• Tip: Stick to objective, tangible inclusions — avoid adjectives and subjective language</p>
          <p>• Tip: Keep your text short — no full sentences needed</p>
        </div>
        <div className="bg-slate-200 grid sm:grid-cols-2 text-sm font-semibold mt-2 p-4">
          <div className="space-y-2">
            <div>Good inclusion examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Hotel pickup and drop-off</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Headsets to hear the tour guide clearly</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Entry tickets to Alhambra, Nasrid Palaces, and Generalife</div>
          </div>
          <div className="space-y-2">
            <div>Inclusion examples to avoid</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Most amazing and excellent tour ever</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>The professional, local guide will explain to you all there is to know.</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>hoto opportunities and an amazing time</div>
          </div>
        </div>
        <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-60 border border-slate-200 hover:border-blue-600 focus:border-blue-600 focus:outline-none" placeholder="Main inclusions" onChange={handleInclusionsChange} maxLength={1000} required/>
        <p className="mb-4 text-sm font-semibold">{inclusions} characters left</p>


        <h1 className="text-4xl font-bold">Inclusions & exclusions</h1>
        <div className="py-2 font-medium">
          <p>This is the main information that customers will use on your activity details page to read, compare, and book an activity.</p>
          <p>• Write all information below in English</p>
          <p>• Avoid writing “we,” “our,” or mentioning your company’s name</p>
        </div>

        <h2 className="mt-8 font-bold">Exclusions (optional)</h2>
        <div className="font-medium">
          <p>Name what customers need to pay extra for or what they may expect to see that isn’t included in the price</p>
          <p>• Tip: Keep your text short. Write tangible exclusions, no sentences needed.</p>
        </div>
        <div className="bg-slate-200 grid sm:grid-cols-2 text-sm font-semibold mt-2 p-4">
          <div className="space-y-2">
            <div>Good exclusion examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Hotel pickup and drop-off</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Food and drinks</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Gratuities</div>
          </div>
          <div className="space-y-2">
            <div>Exclusion examples to avoid</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Unfortunately, no food will be served on this tour but there is a café where you can purchase it.</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Gratuities are not included, it is recommend to tip the guide 15-20% at the end of the tour.</div>
          </div>
        </div>
        <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-60 border border-slate-200 hover:border-blue-600 focus:border-blue-600 focus:outline-none" placeholder="If this does not apply to your activity, you can leave it blank." onChange={handleExclusionsChange} maxLength={1000}/>
        <p className="mb-4 text-sm font-semibold">{exclusions} characters left</p>



        <div className="flex justify-end">
          <button className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Save & Exit</button> 
          <button className="default-button my-8" onClick={()=>navigate('/product-create/location')}>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Inclusions;
