import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { TagsInput } from "react-tag-input-component";

const AddInfo = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [restrictions, setRestrictions] = useState([]);
  const [bans, setBans] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isSubmit, setSubmit] = useState(false)

  const [beforeBooking, setBeforeBooking] = useState(1000);
  const handleBeforeBookingChange = (event) => {
    const length = event.target.value.length;
    setBeforeBooking(1000 - length);
  }

  const [beforeActivity, setBeforeActivity] = useState(1000);
  const handleBeforeActivityChange = (event) => {
    const length = event.target.value.length;
    setBeforeActivity(1000 - length);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    navigate('/product-create/photos');
  }

  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold py-4">Information for customers</h1>
        <h2 className="my-2 font-semibold">What information do customers definitely need to know before they choose to book? And before enjoying your activity?</h2>
        <div className="py-2 font-medium">
          <p>• Write all information below in English</p>
          <p>• Tip: Avoid repeating the same information in multiple fields. Only include it where it’s most relevant for the customer.</p>
          <p>• Tip: Avoid repeating structured tags in any longer written texts</p>
        </div>

        <h2 className="my-4 text-2xl font-bold">Before booking with Comprayviaja</h2>
        
        <div className="font-medium">
          <p className="font-bold">Who is this activity not suitable for? (optional)</p>
          <p>Add a tag if your activity is unsuitable for certain individuals’ restrictions due to safety reasons. This information appears on the activity details page.</p>
        </div>
        <div className="bg-slate-200 text-sm font-semibold my-2 space-y-2 p-4">
            <div>Examples of restrictions</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Pregnant women</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>People under 120 cm</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>People with impaired mobility</div>
        </div>
        <TagsInput
        value={restrictions}
        onChange={setRestrictions}
        placeHolder="Add restrictions..."
        />

        <div className="font-medium py-4">
          <p className="font-bold">What’s not allowed? (optional)</p>
          <p>List any object, clothing, or action that’s not allowed on your activity. This information appears on the activity details page & voucher.</p>
        </div>
        <div className="bg-slate-200 text-sm font-semibold my-2 space-y-2 p-4">
            <div>Examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Photography</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Sleeveless shirts</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Luggage or large bags</div>
        </div>
        <TagsInput
        value={bans}
        onChange={setBans}
        placeHolder="Type here..."
        />
    
        <div className="font-medium py-4">
          <p className="font-bold">What mandatory items must the customer bring with them? (optional)</p>
          <p>This information appears on the activity details page & voucher.</p>
        </div>
        <div className="bg-slate-200 text-sm font-semibold my-2 space-y-2 p-4">
            <div>Examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Passport or ID card</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Towel</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Comfortable shoes</div>
        </div>
        <TagsInput
        value={needs}
        onChange={setNeeds}
        placeHolder="Type here..."
        />
        
        <h2 className="mt-8 font-bold">Information before booking (optional)</h2>
        <div className="font-medium">
          <p>Add any remaining information that customers must know before they book. This information appears on the activity details page.</p>
          <p>• Tip: Avoid repeating structured information from above</p>
        </div>
        <div className="bg-slate-200 grid sm:grid-cols-2 sm:space-y-0 space-y-2 text-sm font-semibold mt-2 p-4">
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>All visitors must pass through airport-style security.</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>This tour will take place rain or shine.</div>
            <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>You will climb 200 steps to reach the top of the Duomo. There is no elevator.</div>
          </div>
          <div className="space-y-2">
            <div>Examples</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>This tour is non-refundable.</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Please note that lunch is not included.</div>
            <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Bring your passport.</div>
          </div>
        </div>
        <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-28 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="If this does not apply to your activity, you can leave it blank." onChange={handleBeforeBookingChange} maxLength={1000} />
        <p className="mb-4 text-sm font-semibold">{beforeBooking} characters left</p>


        <h2 className="my-8 text-2xl font-bold">Before the activity</h2>
        <div className="font-medium">
          <p className="font-bold">How can customers contact you in case of an emergency? (optional)</p>
          <p>This information appears on the voucher.</p>
        </div>
        <div className="py-2">
          <PhoneInput
            country={"us"}
            enableSearch={true}
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
          />
        </div>
        <div className="font-medium">
          <p className="font-bold">What else do customers need to know before your activity? (optional)</p>
          <p>Add any remaining information that customers must know before your activity. This information appears on the voucher.</p>
          <p>• Tip: Avoid repeating structured information from above</p>
          <p>• Tip: Use bullet points to separate information (CTRL + 8 on Mac and ALT + 149 on PC)</p>
        </div>
        <div className="bg-slate-200 space-y-2yar text-sm font-semibold mt-2 p-4">
          <div>Good inclusion examples</div>
          <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Make sure to eat breakfast before you start the activity</div>
          <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>You will receive instructions to activate your self-guided tour in a separate email</div>
          <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Opening hours are subject to change.</div>
        </div>
        <textarea className="resize-y font-semibold w-full p-3 mt-4 rounded-md h-28 border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="If this does not apply to your activity, you can leave it blank." onChange={handleBeforeActivityChange} maxLength={1000}/>
        <p className="mb-4 text-sm font-semibold">{beforeActivity} characters left</p>
        <div className="flex justify-end">
          {/* <button className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Save & Exit</button>  */}
          <button type="submit" className="default-button my-8 bg-blue-600">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default AddInfo;
