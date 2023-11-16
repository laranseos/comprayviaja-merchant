import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
const Keywords = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [isSubmit, setSubmit] = useState(false)

  const [title, setTitle] = useState('');
  const [packages, setPackages] = useState({
    category : location.state,
    title : "",
  });

  const handleTitle = (e) =>{
    e.preventDefault();
  }

  const handleContinue = () => {
    setSubmit(true);
    if(selected.length>0) {
      navigate('/product-create/inclusions');
    } else return;
  }
    
  return (
    <div className=" w-full p-4 sm:p-16">
        <h1 className="text-4xl font-bold">Keywords</h1>
        <h2 className="mt-8 font-bold mb-2">Add up to 15 keywords (optional)</h2>
        <div className="font-semibold mb-4">
          <p>What words would a customer use to search for your activity on our site? What makes it unique? Use all 15 keywords to help customers find your activity.</p>
          <p className="py-1">Keywords should answer questions like:</p>
          <p>• What is the overall theme of your activity? (River cruise? Wine tasting?)</p>
          <p>• Does it happen at a special time? (Sunset? Night? Christmas? Springtime?)</p>
          <p>• What subject matter do you focus on? (Medieval art? Ancient history? Street food?)</p>
          <p>• Who is it for? (For families? For children? For adults only?)</p>
          <p>• You don’t need to add keywords for the city or location.</p>
        </div>

        <TagsInput
        value={selected}
        onChange={setSelected}
        placeHolder="For families, sunset, private, etc..."
        />
        {
          isSubmit && selected.length ==0 &&
          <p className="text-sm font-semibold text-red-600">Fill your keywords, press 'Enter'</p>
        }
        
        <div className="flex justify-end">
          <button className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Save & Exit</button> 
          <button className="default-button my-8" onClick={handleContinue}>Continue</button>
        </div>
    </div>
  );
};

export default Keywords;
