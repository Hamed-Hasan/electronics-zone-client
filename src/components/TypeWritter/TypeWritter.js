import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
    <div>
      <h1 style={{ margin: "auto 0", fontWeight: "normal" }}>
        <span style={{ fontSize: "33px", fontWeight: "bold" }}>Providing</span>{" "}
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "33px",
            borderBottom: "4px solid #F59E0B",
            color: "white",
          }}
        >
          <Typewriter
            words={[
              "eBooks",
              "Application",
              "Blog Article",
              "Innovation!",
              "Development Tools",
            ]}
            loop={5}
            cursor
            cursorStyle=" | "
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWritter;
