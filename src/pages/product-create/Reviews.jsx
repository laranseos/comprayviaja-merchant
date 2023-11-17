import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";

const Reviews = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [guideInfo, setGuideInfo] = useState('nobody');
  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setGuideInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/product-manage');
  };

  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Review</h1>
        <h2 className="mt-8 font-semibold mb-2">Is this information correct?</h2>
        <h2 className="my-2 font-semibold ">If everything looks good, save and publish your activity to set it live on Comprayviaja's website.</h2>
        
        <div className="flex justify-end">
          <button type="submit" className="default-button bg-blue-600 my-8">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
