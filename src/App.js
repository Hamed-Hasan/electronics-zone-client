
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import Blog from "./components/Home/Blog";
import Home from "./components/Home/Home";
import NotFound from "./components/Home/NotFound/NotFound";
import ServiceDetail from "./components/Home/Pages/ServiceDetail/ServiceDetail";
import { ToastContainer } from "react-toastify";
import ManageService from "./components/Home/Pages/ManageService/ManageService";
import AddItem from "./components/Home/Pages/AddItem/AddItem";
import MyItem from "./components/Home/Pages/MyItem/MyItem";
import Footer from "./components/Home/Pages/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";




function App() {
    return (
        <div>
            
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
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
                <Route
                    path="/myItem"
                    element={
                        <RequireAuth>
                        <MyItem/>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <RequireAuth>
                       <Blog />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
   <Footer/>
   <ScrollToTop/>
       <ToastContainer />
        </div>
    );
}


export default App;
