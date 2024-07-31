import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
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
        <form className='w-3/12 absolute p-12 bg-black bg-opacity-70 rounded text-white'>
          <h1 className='font-bold text-3xl py-4 px-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-2 my-4 block w-full bg-black bg-opacity-40 border border-white-500'/>)}
          <input type="text" placeholder='Email or Phone Number' className='p-2 my-4 block w-full bg-black bg-opacity-40 border border-white-500'/>
          <input type="password" placeholder='Password' className='p-2 my-4 block w-full bg-black bg-opacity-40 border border-white-500' />
          <button className='p-3 my-4 w-full bg-red-700 text-white rounded bg-black'>{isSignInForm?"Sign In":"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now.":"Already Registered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
