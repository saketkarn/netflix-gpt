import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true)
  const [errorMessage, setErrorMessage]= useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name=useRef(null)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick=()=>{
    //First validate the form data
    
    // console.log(email.current.value)
    // console.log(password.current.value)

    const errMessage=checkValidData(email.current.value, password.current.value, name.current.value)
    setErrorMessage(errMessage)
    // console.log(errMessage)
  }
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <Header />
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
        alt="Login Background"
        style={{ objectFit: 'cover' }}
      />
      <div className="flex-1 flex items-center justify-center">
        <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-70 rounded text-white'>
          <h1 className='font-bold text-3xl py-4 px-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && (<input ref={name} type="text" placeholder='Full Name' className='p-2 my-4 block w-full bg-black bg-opacity-40 border border-white-500'/>)}
          <input ref={email} type="text" placeholder='Email' className='p-2 my-4 block w-full bg-black bg-opacity-40 border border-white-500'/>
          <input ref={password} type="password" placeholder='Password' className='p-2 my-4 block w-full bg-black bg-opacity-40 border border-white-500' />
          <p className='text-red-500 font-bold text-lg py-1'>{errorMessage}</p>
          <button className='p-3 my-4 w-full bg-red-700 text-white rounded bg-black' onClick={handleButtonClick}>
            {isSignInForm?"Sign In":"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now.":"Already Registered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
