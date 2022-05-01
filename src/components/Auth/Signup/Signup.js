import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
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

const Signup = () => {
  const [success, setSuccess] = useState({
    email: "",
    password: "",
    success: "",
  });

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [showPass, setShowPass] = useState(false);
  const handleEmailChange = (e) => {
    const validRegx = /\S+@\S+\.\S+/;
    const validPassword = validRegx.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, email: "" });
      setSuccess({ ...success, email: "wow you are providing a valid mail" });
    } else {
      setError({ ...error, email: "invalid email" });
      setUserInfo({ ...userInfo, email: "" });
      setSuccess({ ...success, email: "" });
    }
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setError({ ...error, password: "" });
    } else {
      setError({ ...error, password: "Minimum 6 characters!" });
      setSuccess({ ...success, password: "" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setSuccess({ ...success, password: "Password Match Successfully" });
      setError({ ...error, password: "" });
    } else {
      setError({ ...error, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
      setSuccess({ ...success, password: "" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    toast.success("You Are Successfully SignUp");
  };
  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
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
  }, [hookError]);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


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




//   useEffect(() => {
//     if (user) {
//       navigate(from);
//     }
//   }, [user]);
  const [agree, setAgree] = useState(false);

  return (
    <>
     <ReactHelmet title='SignUp'></ReactHelmet>
      <div className="main-container mb-72">
        <img className="wave" src={wave} alt="" />
        <div className="form-container">
          <div className="img">
            <img src={bg} alt="" />
          </div>
          <div className="login-content">
            <div>
            <div>
           <form onSubmit={handleSubmit}>
              <img src={avatar} alt="" />
              <h2 className="title">Sign Up</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input
                    onChange={handleEmailChange}
                    type="Email"
                    className="input"
                    required
                    placeholder="Email"
                  />
                  {error?.email && (
                    <p className="text-red-600 text-left mt-8 ml-6 ">
                      <BiErrorCircle className="relative -left-5 top-5" />
                      {error.email}
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
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <div className="relative">
                    <input
                      onChange={handlePasswordChange}
                      type={showPass ? "text" : "password"}
                      className="input"
                      placeholder=" password"
                      required
                    />
                    {error?.password && (
                      <p className="text-red-600 text-left -mt-2 ml-6 ">
                        <BiErrorCircle className="relative -left-5 top-5" />
                        {error.password}
                      </p>
                    )}
                    {success?.password && (
                      <p className="text-green-500 text-left -mt-3 ml-6">
                        <GrValidate className="relative -left-5 top-5" />
                        {success.password}
                      </p>
                    )}
                    <p
                      className="absolute top-3 right-5 cursor-pointer opacity-40"
                      onClick={() => setShowPass(!showPass)}
                    >
                      👁
                    </p>
                  </div>
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div relative">
                  <input
                    onChange={handleConfirmPasswordChange}
                    type={showPass ? "text" : "password"}
                    className="input"
                    placeholder="Confirm Password"
                    required
                  />
                  <p
                    className="absolute top-3 right-5 cursor-pointer opacity-40"
                    onClick={() => setShowPass(!showPass)}
                  >
                    👁
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4 ml-6">
                <input
                  onClick={() => setAgree(!agree)}
                  id="checkbox-2"
                  aria-describedby="checkbox-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-2"
                  className={`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                    agree ? "" : "text-red-600"
                  }`}
                >
                  Accept Terms and Conditions
                </label>
              </div>

              <input
                disabled={!agree}
                type="submit"
                className="btn"
                value="Sign Up"
              />

              <Link to="/login">already have an account?</Link>
              {/* {hookError && (
                <p className="text-red-600">{hookError?.message}</p>
              )} */}
              <ToastContainer />
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

export default Signup;




