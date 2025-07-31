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
import animationVideo1 from "./Videos/Aero Series Header animation (1).mp4"
// import aeroLogo from "./aeroLogo/aeroLogo.png";
import aeroLogo1 from "./aeroLogo/aeroLogo1.png";
import aeroLogo2 from "./aeroLogo/aeroLogo2.png";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        overflow: "hidden",
        boxSizing: "border-box",
        // borderBottom:"2px solid red"
        // height:"470px"
      }}
    >
      {/* Text Block */}
      <div
        style={{
          position: "absolute",
          top: "24%", // Responsive top spacing
          left: "5%", // Responsive left spacing
          // border: "2px solid red",
          maxWidth: "95%", // Prevents overflow

        }}
      >
        <div id="bos"
          style={{
            color: "#FFF",
            lineHeight: "1.2",
            fontSize: "4.5vw",
            fontFamily: "Montserrat",
            fontWeight: "600",
          }}
        >
          Introducing
        </div>

        <div
          style={{
            color: "#FFF",
            lineHeight: "1.2",
            fontSize: "4.5vw",
            fontFamily: "Montserrat",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>the&nbsp;</span>

          <img
            src={aeroLogo1}
            alt="aeroLogo_img"
            style={{
              height: "2.5vw", // Responsive height
              width: "auto",   // Maintain aspect ratio
              verticalAlign: "middle",
              // border:"2px solid red"
            }}
          />

          <span>&nbsp;Series</span>
        </div>
      </div>


      {/* Background video */}
      <video
        src={animationVideo1}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%", objectFit: "cover",
          border: "none"
        }}
      />
    </div>
  );
};

export default HeroSection;
