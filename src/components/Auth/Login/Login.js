import { useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../../../firebase.init";
import "../../../styles/Login.css";
import bg from "../../../images/bg.svg";
import wave from "../../../images/wave.png";
import avatar from "../../../images/avatar.svg";
import SocialLogin from "../SocialLogin/SocialLogin";
import { BiErrorCircle } from "react-icons/bi";
import { GrValidate } from "react-icons/gr";
import ReactHelmet from "../../ReactHelmet/ReactHelmet";
const Login = () => {
  
  const emailRef = useRef("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState({
    email: "",
    password: "",
    success: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithFacebook(auth);
  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setSuccess({ ...success, email: "Right Way !!" });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "please type valid mail" });
      setUserInfo({ ...userInfo, email: "" });
      setSuccess({ ...success, email: "" });
    }
  };
  const handlePasswordChange = (e) => {
    const emailRegex = /.{6,}/;
    const validPassword = emailRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setSuccess({ ...success, password: "Right Pass" });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "please type valid password" });
      setSuccess({ ...success, password: "" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
    if (userInfo.email === "") {
      setErrors("Please Field Out Mail Field");
    }
    if (userInfo.password === "") {
      setErrors("Please Field Out Password Field");
    }
  };
  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError, googleError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast("please enter your valid email address");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from);
      toast("SuccessFully Login");
    }
  }, [user]);
  return (
    <>
    <ReactHelmet title='Login'></ReactHelmet>
      <div className="main-container mb-72">
        <img className="wave" src={wave} alt="" />
        <div className="form-container">
          <div className="img">
            <img src={bg} alt="" />
          </div>
          <div className="login-content">
          <div>
          <div>
           <form onSubmit={handleLogin}>
              <img src={avatar} alt="" />
              <h2 className="title">Login</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input
                    ref={emailRef}
                    onChange={handleEmailChange}
                    type="Email"
                    className="input"
                    placeholder="Email"
                    required
            
                  />
                  {errors?.email && (
                    <p className="text-red-600 text-left mt-8 ml-6 ">
                      <BiErrorCircle className="relative -left-5 top-6" />
                      {errors.email}
                    </p>
                  )}
                  {success?.email && (
                    <p className="text-green-500 text-left mt-8 ml-6">
                      <GrValidate className="relative -left-5 top-5" />
                      {success.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input
                    onChange={handlePasswordChange}
                    type="password"
                    placeholder="Password"
                    className="input"
                    required
                  />
                  {errors?.password && (
                    <p className="text-red-600 text-left mt-8 ml-6 ">
                      <BiErrorCircle className="relative -left-5 top-6" />
                      {errors.password}
                    </p>
                  )}
                  {success?.password && (
                    <p className="text-green-500 text-left mt-8 ml-6">
                      <GrValidate className="relative -left-5 top-5" />
                      {success.password}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <ToastContainer />

                <p
                  className="text-left ml-7 cursor-pointer mt-6 text-slate-700 hover:underline"
                  onClick={resetPassword}
                >
                  {" "}
                  Forget Password?
                </p>
                <div className="ml-2">
                  <Link to="/signup" className="text-slate-500">
                    {" "}
                    Create a new account
                  </Link>
                </div>
              </div>
              <input type="submit" className="btn" value="Login" />
              <div className="g-container mx-auto ml-7">
                <div className="line-parent flex items-center">
                  <div className="line-left"></div>
                  <p>or</p>
                  <div className="line-right"></div>
                </div>

              </div>
            </form>
           </div>
              <div className='ml-7 mr-2'>
                <SocialLogin />
                </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
