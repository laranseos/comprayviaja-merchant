import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";

const Options = () => {
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

  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Options</h1>
        <h2 className="mt-8 font-semibold mb-2">Options are different variations of the same activity that can be booked by your customers. For example, different activity options could contain different:</h2>
        <div className="p-2 font-medium">
          <p>• durations or validity times (1-hour tour vs. 2-hour tour)</p>
          <p>• group sizes (small-group tour vs. large-group tour)</p>
          <p>• languages (guided tour in English vs. guided tour in Spanish)</p>
          <p>• any important inclusions (e.g. transportation, meals, etc)• inclusions (tour with lunch vs. tour without lunch)</p>
        </div>

        <h2 className="mt-4 font-semibold mb-2">You’ll always need to create at least one “default” option for new activities. However, you only create multiple options only if your activity can be booked with tailored differences.</h2>
        
        <div className="flex justify-between">
          <button  className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Create new option</button> 
          <button type="submit" className="default-button bg-blue-600 my-8">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Options;
