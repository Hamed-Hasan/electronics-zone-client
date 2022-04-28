import React from "react";
import author from "../../images/hamed-hasan.jpg";
import ReactHelmet from "../ReactHelmet/ReactHelmet";

const About = () => {
  return (
    <div className="mb-60">
      <ReactHelmet title='About'></ReactHelmet>
      <section
        style={{ height: "100vh" }}
        className="flex items-center text-gray-600 body-font  "
      >
        <div className=" container mt-72 mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="p-4 md:w-1/2 w-full h-full">
            <div className="h-full bg-black p-8 rounded py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 text-white">
                {" "}
                When I some Computing I agreed to learn Coding . It's Not easy
                but I Work hard when learning HTML CSS JavaScript and I fill
                proud happy but when start React Js its to complicated in other
                language . In this situation I trying to over come to my
                Weakness
              </p>
              <p>
                my next Front-end development involves the building of webpages
                and user interfaces for web applications. Front-end developers
                implement the structure, design, behavior, and animation of
                everything you see on the screen when you open up websites, web
                applications, or mobile apps. The term "front" comes from the
                idea that web development is largely divided into two overall
                aspects: the front end, and the back end. The front-end is the
                "client-side", which refers to the browser and the user
                interacting with that browser. Front end developers write code
                that the browser interprets and then responds by rendering the
                page to reflect the intended design. The back-end (server-side)
                is where you would store persistent data
              </p>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    I am Hamed Hasan.
                  </span>
                  <span className="text-gray-500 text-sm">
                    Front End Developer
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className=" p-2">
              <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={author}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-gray-700 pt-4">
                  Hamed Hasan
                </h2>
                <span className="text-blue-500 block mb-5">
                  Front End Developer
                </span>

                <a
                  href="https://landing-pages-portfolio.netlify.app" target='_blank'
                  className="px-4 py-2 bg-blue-500 text-white rounded-full"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
