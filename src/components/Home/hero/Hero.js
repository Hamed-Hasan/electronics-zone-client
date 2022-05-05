import React, { useContext } from "react";
import "./HeroStyles.css";
import TypeWritter from "../../TypeWritter/TypeWritter";
import ReactHelmet from "../../ReactHelmet/ReactHelmet";
import { Link } from "react-scroll/modules";
import { useNavigate } from "react-router-dom";




function Hero() {

  const navigate = useNavigate();
  const navigateMyItem = () => {
       navigate('/myItem')
  }

  return (
    <div>
      <ReactHelmet title='Home'></ReactHelmet>
      <section>
       


      <header  style={{backgroundImage: `url(https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}} id="up" className="hero-path bg-center bg-fixed bg-no-repeat bg-cover h-full  relative">
	
  <div className="h-full py-11 bg-opacity-50 bg-black flex items-center justify-center hero-img" >
  
  <div className=" container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 pb-24">
            <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl text-yellow-300 mb-0 pb-10 tracking-loose">
                TechFest
              </h1>
              <h2 className="text-3xl -mt-10 md:text-5xl leading-relaxed md:leading-snug mb-2">
                <TypeWritter />
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
              LET BE ELECTRONICS INVASION BE WITH YOU!
              </p>
              <button
              onClick={() => navigateMyItem()}
                className="bg-transparent cursor-pointer hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </button>
            </div>
            <div className="p-8 py-24 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    className="inline-block mt-24 md:mt-2 p-8 md:p-0"
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div className='hidden xl:block'>
                  <img
                    className="inline-block mt-28 hidden lg:block"
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  />
                </div>
              </div>
             
            </div>
       
          </div>

  </div>
  <Link to="service" className='block  cursor-pointer w-40 mx-auto' smooth={true} spy={true}>
        
        <div className="scroll-down w-10 h-10 mr-9"></div>
      </Link>
</header>


      </section>
    </div>
  );
}

export default Hero;
