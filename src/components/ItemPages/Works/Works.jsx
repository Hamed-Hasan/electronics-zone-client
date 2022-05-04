import React, { useContext } from "react";
import "./Works.css";
import mongo from "../../../images/mongo.png";
import nodejs from "../../../images/nodejs.png";
import dev from "../../../images/dev-middle.png";
import express from "../../../images/express.png";
import react from "../../../images/react.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

const Works = () => {

  // transition
  return (
 <div className="container mx-auto py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2" id="works">
      {/* left side */}
      <div className="w-left w-96 mx-auto">
        <div className="awesome">
      
          <span >
            Works for All these
          </span>
          <span>Brands & Clients</span>
         <p className="w-96">
           /AN INDIVIDUAL’S “WORTHINESS” AND FEELING OF “SELF-WORTH” IS THE MOST VALUABLE ASSET IN LIFE. EXPLORING THE TRIGGERS THAT HOLD INDIVIDUALS FROM ACHIEVING THEIR “HUMAN POTENTIAL” IS THE BEST INVESTMENT A COMPANY CAN AND SHOULD MAKE IN THEIR HUMAN CAPITAL.
         </p>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right hidden md:block">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={dev} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
 </div>
  );
};

export default Works;
