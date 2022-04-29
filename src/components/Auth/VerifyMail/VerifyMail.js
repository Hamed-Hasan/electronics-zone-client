import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

import { toast, ToastContainer } from 'react-toastify';

import { auth } from '../../../firebase.init';

const VerifyMail = () => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(
    auth
  );
    return (
        <div>
            <div className="flex flex-col  mx-auto -mt-20 pt-28 overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-500">
  <div className="relative z-20 flex w-full min-h-screen px-5 pt-20 mx-auto sm:px-12 sm:h-screen max-w-7xl sm:pt-0 lg:px-0">
    <div className="w-full md:w-2/3">
      <div className="flex flex-col items-start justify-center w-full h-full pb-20">
        <div className="relative w-full lg:pl-10">
     
          <h1 className="relative z-0 w-full max-w-md py-2 text-4xl font-black text-left text-white sm:py-5 sm:text-6xl" data-unsp-sanitized="clean">Please verify Your Mail</h1>
        </div>

        <div className="flex flex-col items-start my-4 text-left lg:pl-10">
          <p className="max-w-md mb-10 text-base font-light text-gray-200 sm:text-lg lg:text-xl dark:text-dark-200">People will give you a fake email address to get something you're offering but they don't want your emails or any other contact with you. See how many "none@none.com" or "nospam@xyz.com" addresses you have in your list. Or, a bot created it (more on that in the next section).
.</p>

          <div className="relative flex flex-col items-center justify-start w-full space-y-5 sm:w-auto lg:space-y-0 lg:space-x-5 lg:flex-row">
            <a 
        onClick={async () => {
          await sendEmailVerification();
          toast.success('please Check your Inbox')
        }}
        href="#" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-lg sm:w-auto sm:rounded-full bg-blue-700 xl:px-10 hover:bg-blue-900 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 xl:text-xl" data-unsp-sanitized="clean">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              Send Verification
            </a>
           
           
          </div>
        </div>
      </div>
    </div>

    <div className="relative w-0 md:w-1/2"></div>
  </div>
  <div className="absolute  top-0 left-0 z-0 flex items-start justify-center w-full h-screen overflow-hidden opacity-75">
    <div className="relative z-20 w-1/2">
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-500-500 to-yellow-500"></div>
    </div>
    <div className="relative z-10 w-1/2 ">
      <div className="absolute top-0 right-0 hidden w-full h-full sm:block">
        <div className="flex items-center justify-center w-screen h-screen transform scale-75 -rotate-12 -translate-x-80 sm:-translate-x-64 sm:scale-125 md:scale-125 min-w-persp md:-translate-x-24">
          <div className="flex flex-col flex-wrap items-start justify-start w-full h-screen mx-auto space-x-3 space-y-3 transformPerspective">
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm mt-3 ml-3">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
            <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
              <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-50 w-full h-screen bg-gradient-to-r from-yellow-500 t to-transparent"></div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default VerifyMail;