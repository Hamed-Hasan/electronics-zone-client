
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import CheckOut from "./components/CheckOut/CheckOut";
import Blog from "./components/Home/Blog";
import Home from "./components/Home/Home";
import NotFound from "./components/Home/NotFound/NotFound";
import ServiceDetail from "./components/Home/Pages/ServiceDetail/ServiceDetail";
import { ToastContainer } from "react-toastify";
import ManageService from "./components/Home/Pages/ManageService/ManageService";
import AddItem from "./components/Home/Pages/AddItem/AddItem";

function App() {
    return (
        <div>
            
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/addItem" element={<AddItem />} />
                <Route path="/manageservice" element={<ManageService />} />
                <Route
                    path="/serviceDetail/:serviceId"
                    element={
                        <RequireAuth>
                         <ServiceDetail></ServiceDetail>
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      
       <ToastContainer />
        </div>
    );
}


export default App;
