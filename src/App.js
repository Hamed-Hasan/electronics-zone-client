
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

function App() {
    return (
        <div>
            
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path='/serviceDetail/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
                <Route
                    path="/checkout/:serviceId"
                    element={
                        <RequireAuth>
                         
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
       
        </div>
    );
}


export default App;
