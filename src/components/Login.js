import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        // Logic to toggle between Sign In and Sign Up forms
        setIsSignInForm(!isSignInForm);
        
    };
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_small.jpg'
            alt='loginpage'
            />
        </div>
        <form className='rounded-lg w-4/12 absolute p-12 bg-black my-20 mx-auto left-0 right-0 text-white bg-opacity-80'>
          <h1 className='py-4 font-bold text-2xl'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (<input type='text' placeholder='Full Name' className='my-4 p-4 w-full bg-gray-700'/>)}

          <input type='text' placeholder='Email Address' className='my-4 p-4 w-full bg-gray-700'/>

          <input type='text' placeholder='Password' className='my-4 p-4 w-full bg-gray-700'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> {isSignInForm ? "Sign In" : "Sign Up"}</button> 
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
             {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already registered? Sign In Now."}
            </p>

        </form>
    </div>   
  );
};

export default Login;