import { useState, useEffect } from "react";
import { useLoginMutation } from '../slices/usersApiSlice';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials, logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [login, { isLoadings}] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myemail, setMyemail] = useState("");
	const [mypassword, setMypassword] = useState("");
	const [mynote, setMynote] = useState('');

  const [forgot, setForgot] = useState(false);

  // const [isForgotPassword, setForgot] = useState(false);

  const handleLoginClick = async (e) =>{
		e.preventDefault();

		if(!validateEmail(myemail)) {
			setMynote('Invalid Email');
			return;
		} else setMynote('');

		try {	
			const email = myemail;
			const password = mypassword;
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			console.log(res);
			navigate('/dashboard');
			toast.success('Logged in Successfully!', {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
			closeSidebar();
		  } catch (err) {
			toast.error(err?.data?.message || err.error, {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
	    }
	}

  
    const validateEmail = (email) => {
      // Check if the email is empty
      if (!email) {
        return false;
      }
      // Check if the email is valid
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

  return (
    <div className="h-screen">
      <div className="bg-white w-[500px] mx-auto my-auto mt-16 p-8">
        <form onSubmit={handleLoginClick}>
          <p className="font-bold text-2xl font-sans">Log in to the Supplier Portal</p>
          <div className='flex flex-col font-bold py-2 mt-4'>
            <label>Email</label>
            <input className={`rounded-md p-2 mt-2 font-semibold border border-slate-200 hover:border-blue-500 focus:border-blue-600 focus:outline-none ${mynote && 'border-red-500'}`} placeholder="Enter your email" value={myemail} onChange={(e) => { setMyemail(e.target.value); setMynote('');}} type="text" required/>
          </div>
          {mynote && <div className=' text-red-600 text-sm font-semibold'>{mynote}</div>}
          <div className='flex flex-col font-bold py-2'>
            <label>Password</label>
            <input className='rounded-md p-2 mt-2 font-semibold border border-slate-200 hover:border-blue-500 focus:border-blue-600 focus:outline-none' placeholder="Enter your password" value={mypassword} onChange={(e) => setMypassword(e.target.value)} type="password" required/>
          </div>
          <div className='flex justify-between text-gray-400'>
            <a className='text-blue-600 font-semibold cursor-pointer' onClick={()=>setForgot(true)}>Forgot Password?</a>
          </div>
          <button className='py-2 px-6 font-poppins font-medium text-[18px] rounded-full bg-blue-700 text-white hover:bg-blue-800 outline-none mt-6 w-full hover:shadow-sm hover:shadow-white active:translate-y-1'>Log In</button>
          <div className='flex py-2 mt-4 font-semibold'>
            <p className='flex items-center mr-2'>Don't have an account?</p>
            <a className='cursor-pointer text-blue-600' href="/register">Sign up now</a>
          </div>
        </form>
            
      </div>
    </div>

  );
};

export default Login;
