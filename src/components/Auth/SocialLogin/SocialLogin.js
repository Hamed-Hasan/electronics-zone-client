import React from "react";
import logo from "../../../images/google.svg";
import fb from "../../../images/facebook.png";
import { auth } from "../../../firebase.init";
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../Spinner/Spinner"

const SocialLogin = () => {
  const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
//   if (user) {
//     navigate(from, { replace: true });
//   }



  if (user) {
        const url = 'http://localhost:5000/login';
        fetch(url, { 
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
             }
        })
        .then(res => res.json())
        .then((data) => {
            localStorage.setItem("accessToken", data.token);
                navigate(from, { replace: true });
        })
    }



 



  if(fbLoading || gLoading){
  <Spinner/>
  }

  const handleGoogle = () => {
    signInWithGoogle()
    if(!gUser){
      // toast.success('Successfully SignIn With Google')
    }else{
      toast.error('Try Again Lager !!')
    }
  };
  const handleFacebook = () => {
    signInWithFacebook()
    if(!fbUser){
      // toast.success('Successfully SignIn With Facebook')
    }else{
      toast.error('Try Again Lager !!')
    }
  };

  return (
    <div>
      <button onClick={handleGoogle} className="g-logo">
        <img className="logo w-10" src={logo} alt="" />
        Continue with Google
      </button>
      <button onClick={handleFacebook} className="g-logo">
        <img className="logo fb-logo" src={fb} alt="" />
        Continue with Facebook
      </button>
      <ToastContainer />
    </div>
  );
};

export default SocialLogin;

