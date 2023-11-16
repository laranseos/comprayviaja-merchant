import { useState } from "react";
import IconTickCircle from "../components/icons/IconTickCircle";
import IconWarning_circle from "../components/icons/IconWarning_circle";
import IconEye from "../components/icons/IconEye";
import IconEyeInvisible from "../components/icons/IconEyeInvisible";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify'

import { useRegisterMutation } from "../slices/usersApiSlice";
import axios from "axios";

const Signup = () => {

	const [register, { isLoading }] = useRegisterMutation();

  const [passwordVisible, setPasswordVisible]=useState(false);

  const [includeLength, setIncludeLength] = useState(false);
  const [inclueNumber, setIncludeNumber] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);
	const [mynote, setMynote] = useState('');
  const [pwdnote, setPwdnote] = useState('');

  const navigate = useNavigate();

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setCheckSubmit(false);
    if(validatePassword(e.target.value)) {
      setPwdnote('');
    } else setPwdnote('Make your password more strong');
  }

  
	const [legalName, setLegalName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [weblink, setWeblink] = useState('');
	const [code, setCode] = useState('');
  const [codeNote, setCodeNote] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const handleSignupClick = async (e) =>{
		e.preventDefault();
    setCheckSubmit(true); 
		if(!validateEmail(email)) {
			setMynote('Make your email type correct');
			return;
		} else setMynote('');
    if(!validatePassword(password)) return;


		try {	
      const res = await register({legalName, weblink, firstName, lastName, email, password, code }).unwrap();
      console.log(res);
			toast.success('Registered Successfully!', {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true});
			// dispatch(setCredentials({ ...res }));
			navigate('/');
    	} catch (err) {
			toast.error(err?.data?.message || err.error, {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true});
	    }

	}

  const handleSendCodeClick = () => {
		if(validateEmail(email)) {
			axios
			.post("/api/users/mail", {email})
			.then( res => {
				setCodeNote(`Sent verification code to ${email}`);
			})
			.catch(err => {
				toast(err.response.data.message, {autoClose: 3000});
			});

		} else {
			setMynote('Make your email type correct');
		}
	}

  const handleCodeChange = (e) => {
		const code = e.target.value;
		const numbersOnly = code.replace(/[^0-9]/g, "");
		if(numbersOnly.length<=6){
			setCode(numbersOnly);      
		}
	}

  const isValidURL= (url) => {
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
    return urlRegex.test(url);
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

    const validatePassword = (password) => {
      // Check if the password is empty
      if (!password) {
        return false;
      }
      let lengthFlag, upperFlag, specFlag;
      // Check if the password is at least 8 characters long
      if (password.length >= 8) {
        setIncludeLength(true);
        lengthFlag = true;
      } else setIncludeLength(false);
      
      // Check if the password contains at least one uppercase letter
      if (/[A-Z]/.test(password)) {
        setIncludeUppercase(true);
        upperFlag = true;
      } else setIncludeUppercase(false);
      
      // Check if the password contains at least one number
      if (/[0-9]/.test(password) & /[!@#$%^&*]/.test(password)) {
        setIncludeNumber(true);
        specFlag = true;
      } else setIncludeNumber(false);
      
      if(lengthFlag & specFlag  & upperFlag) {
        return true;
      } else return false;
      
    };

  return (

    <div className="bg-white sm:w-[500px] w-full mx-auto my-16 p-8 rounded-xl">
      <form onSubmit={handleSignupClick}>
        <p className="font-bold text-2xl font-sans">Join us as a supply partner</p>
        <div className='flex flex-col font-semibold py-2 mt-4 space-y-2'>
          <label>Legal Name</label>
          <input className="rounded-md p-3 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="Acme GmbH" value={legalName} onChange={(e) => { setLegalName(e.target.value);}} type="text" required/>
          <p className="text-slate-500 text-sm font-poppins">Your public or brand name can be added later</p>
        </div>

        <div className='flex flex-col font-semibold py-2 mt-4 space-y-2'>
          <label>Add Website link</label>
          <input className="rounded-md p-3 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="http(s)://www.website.com/" value={weblink} onChange={(e) => { setWeblink(e.target.value);}} type="text" required/>
          <p className="text-slate-500 text-sm font-poppins">Add the link of your Website, TripAdvisor, Instagram or Facebook page</p>
        </div>
        <div className=' sm:flex block font-semibold py-2 mt-4 sm:space-x-2'>
          <div>
            <label>First name</label>
            <input className="rounded-md p-3 mt-2 w-full font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="John" value={firstName} onChange={(e) => { setFirstName(e.target.value);}} type="text" required/>
          </div>
          <div>
            <label>Last name</label>
            <input className="rounded-md p-3 mt-2 w-full font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none" placeholder="Doe" value={lastName} onChange={(e) => { setLastName(e.target.value);}} type="text" required/>
          </div>
        </div>

        <div className='flex flex-col font-semibold py-2 mt-4 space-y-2'>
          <label>Email</label>
          <div className="relative flex">
            <input
              className={`rounded-md p-3 w-full font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none ${mynote && 'border-red-500'}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setMynote('');}}
              type="text"
              required
            />
            <span className="absolute cursor-pointer top-1/2 right-3 transform -translate-y-1/2 text-blue-600 hover:text-blue-600" onClick={handleSendCodeClick}>Send code</span>
          </div>
          <p className="text-slate-500 text-sm font-poppins">You will use this to log in to your account</p>
        </div>
        {mynote && <div className=' text-red-600 text-sm font-semibold'>{mynote}</div>}

        <div className='flex flex-col font-semibold py-2 mt-4 space-y-2'>
            <label>Verification Code</label>
            <input className='rounded-md p-3 mt-2 font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none' placeholder="Enter Verificatin Code" value={code} onChange={handleCodeChange} type="text" required/>
        </div>
        {codeNote && <div className=' text-blue-600 text-sm font-semibold'>{codeNote}</div>}
    
        <div className="font-semibold space-y-2 mt-4">
          <label>Password</label>
          <div className="relative mt-2">
            <input
              className={`rounded-md p-3 w-full font-semibold border border-slate-200 hover:border-blue-600 focus:border-green-600 focus:outline-none ${pwdnote && 'border-red-500'}`}
              placeholder="Enter your password"
              // value={password}
              onChange={handlePassword}
              type={passwordVisible ? "text" : "password"}
              required
            />
            <div className="absolute inset-y-0 right-4 flex items-center pr-30 hover:cursor-pointer text-blue-600" onClick={()=>setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <IconEyeInvisible className="w-5 h-5"/> : <IconEye className="w-5 h-5"/>}
            </div>
          </div>
          {checkSubmit && pwdnote && <div className=' text-red-600 text-sm font-semibold'>{pwdnote}</div>}
          <p className={`flex items-center ${includeLength?'text-green-600':'text-slate-600'} text-sm`}><IconTickCircle className='mr-2 w-[20px] h-[20px]'/> Between 8 and 30 characters</p>
          <p className={`flex items-center ${inclueNumber?'text-green-600':'text-slate-600'} text-sm`}><IconTickCircle className='mr-2 w-[20px] h-[20px]'/>Include a number (1234) and one special character (#%!.^)</p>
          <p className={`flex items-center ${includeUppercase?'text-green-600':'text-slate-600'} text-sm`}><IconTickCircle className='mr-2 w-[20px] h-[20px]'/>Uppercase (ABC) and lowercase (abc) letters</p>
          
          {/* <p className="flex items-center text-red-600 text-sm"><IconWarning_circle className='mr-2 w-[20px] h-[20px]'/> Between 8 and 30 characters</p> */}

        </div>

        <button className='py-2 px-6 font-poppins font-medium text-md rounded-full bg-blue-700 text-white hover:bg-blue-800 outline-none mt-6 w-56 hover:shadow-sm hover:shadow-white active:translate-y-1'>Create an account</button>
        <div className='flex py-2 mt-4 font-semibold'>
          <p className='flex items-center mr-2'>Already have an account?</p>
          <a className='cursor-pointer text-blue-600' href="/login">Log in</a>
        </div>
      </form>

    </div>

  );
};

export default Signup;
