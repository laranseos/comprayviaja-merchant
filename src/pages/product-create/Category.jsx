import { useState } from "react";
import '../../components/style.css'
import { useNavigate } from "react-router-dom";
const Category = () => {
  const [category, setCategory] = useState('attraction');
  const navigate = useNavigate();
  const handleRadioChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/product-create/title',{state:category});
    console.log('Selected value:', category);
  };



  return (
      <div className=" w-full p-4 sm:p-16 h-[75vh]">
         <form onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold">Create a new product</h1>
            <h2 className="mt-8 font-bold">Which best describes your activity?</h2>
            <p className="font-semibold">This helps us categorize your product so customers can find it.</p>
            <div
              className={`mt-8 p-8 cursor-pointer ${category === 'attraction' ? 'bg-slate-300' : 'bg-slate-200'} 
              ${category === 'attraction' && 'hover:bg-slate-300'}`}
              onClick={() => {
                const radio = document.querySelector('input[name="ticketType"][value="attraction"]');
                radio.checked = true;
                handleRadioChange({ target: radio });
              }}
            >
              <input
                type="radio"
                name="ticketType"
                value="attraction"
                onChange={handleRadioChange}
                checked={category=='attraction'}
              />{' '}
              Attraction ticket
            </div>
            <div
              className={`p-8 cursor-pointer ${category === 'tour' ? 'bg-slate-300' : 'bg-slate-200'} 
              ${category === 'tour' && 'hover:bg-slate-300 active:bg-slate-300'}`}
              onClick={() => {
                const radio = document.querySelector('input[name="ticketType"][value="tour"]');
                radio.checked = true;
                handleRadioChange({ target: radio });
              }}
            >
              <input
                type="radio"
                name="ticketType"
                value="tour"
                onChange={handleRadioChange}
              />{' '}
              Tour
            </div>
            <button type="submit" className="default-button bg-blue-600 my-8 float-right">Continue</button>
         </form>
      </div>
  );
};

export default Category;
