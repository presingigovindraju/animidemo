// import react from "react";
// import animationVideo from "../Videos/Aero Series Header animation.mp4";


// const HeroSection = () => {




//     return (
//         <div>
//             {/* <p>Introducing the Aero TM Series</p> */}
//             <video
//                 src={animationVideo}
//                 autoPlay
//                 muted
//                 loop
//                 controls
//             />

//         </div>
//     )
// }


// export default HeroSection






import React from "react";
import animationVideo from "./Videos/Aero Series Header animation.mp4";
import aeroLogo from "./aeroLogo/aeroLogo.png";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Text Block */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "6.5%",
          color: "white",
          fontWeight: 700,
          lineHeight: "1.2",
          fontSize: "3rem",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div>Introducing</div>

        {/* Line with the aero logo embedded perfectly */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>the&nbsp;</span>

          {/* Relative wrapper with absolutely placed logo */}
          <span style={{ position: "relative", display: "inline-block", fontFamily: "Century Gothic", fontWeight:500 }}>
            aero
            <sup
              style={{
                // fontSize: "0.5em",
                verticalAlign: "top",
                // marginLeft: "2px",
                fontWeight:"normal",
                fontSize:"18px"
              }}
            >
              ™
            </sup>

            {/* Uncomment if you want to overlay the logo image */}
            {/* <img
              src={aeroLogo}
              alt="aeroLogo_img"
              style={{
                position: "absolute",
                top: "5px",
                left: "-28px",
                height: "1.8rem",
              }}
            /> */}
          </span>

          <span>&nbsp;Series</span>
        </div>
      </div>

      {/* Background video */}
      <video
        src={animationVideo}
        autoPlay
        muted
        loop
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default HeroSection;
