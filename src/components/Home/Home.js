
import Works from "../ItemPages/Works/Works";
import Header from "./Header";
import "./Home.css";
import CounterUp from "./Pages/CounterUp/CounterUp";
import Services from "./Pages/Services/Services";



const Home = () => {
  return (
    <div>
      <Header />
      <Services/>
      <CounterUp/>
      <Works/>
    </div>
  );
};

export default Home;
