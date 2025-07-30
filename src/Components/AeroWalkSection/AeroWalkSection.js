// import react from "react";
// import Aerowalk_animation from "./Video/Aerowalk_animation.mp4";




// const AeroWalkSection = () => {



//     return (
//         <div>
//             <div>
//                 <h2></h2>
//                 <p>Command attention with the 14.5-pound rollator that combines modern style and everyday ease.HCPCS E0143 + E0156 </p>
//                 <button type="button">Get in Touch</button>
//             </div>
//             <video
//                 src={Aerowalk_animation}
//                 autoPlay
//                 muted
//                 loop
//             />
//         </div>
//     )
// }



// export default AeroWalkSection




import React from "react";
import Aerowalk_animation from "./Video/Aerowalk_animation.mp4";
import AeroWalkImg from "./Image/AeroWalkImg.png";
import "./AeroWalkSection.css";

const AeroWalkSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "5px 20px",
        fontFamily: "Montserrat",
        maxWidth: "1100px",
        margin: "25px auto",
        // border:"2px solid green"
      }}
    >
      {/* Text Content */}
      <div
        style={{
          flex: "1 1 400px",
          // maxwidth:"472px",
          // border:"2px solid pink"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            aspectRatio: "89 / 25",
            // border: "2px solid red"
          }}
        >
          <img
            src={AeroWalkImg}
            alt="AeroWalk Logo"
            style={{
              width: "clamp(220px, 30vw, 356px)", // width scales with viewport
              height: "clamp(70px, 10vw, 100px)",
              marginBottom: "16px",
              // border:"2px solid red"
              // border: "2px solid pink"
            }}
          />

          {/* Combined paragraph with HCPCS included */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              color: "#444445",
              lineHeight: "clamp(24px, 2.5vw, 30px)",
              letterSpacing: "-0.25px",
              textAlign: "center",
              maxWidth: "472px",
              overflow: "visible",
              marginTop: "-10px",
              marginBottom: "20px",
              fontFamily: "Montserrat",
            }}
          >
            <strong style={{ fontWeight: 700 }}>Command attention</strong> with the{" "}
            <strong style={{ fontWeight: 700 }}>14.5-pound</strong> rollator that combines modern style and everyday ease.
            <br />
            <strong
              style={{
                fontWeight: 700,
                display: "block",
                marginTop: "10px",
              }}
            >
              HCPCS E0143 + E0156
            </strong>
          </p>

          <button
            type="button"
            style={{
              backgroundColor: "#69B3E7",
              color: "#1B1746",
              fontWeight: "600",
              padding: "clamp(8px, 1.5vw, 10px) clamp(16px, 5vw, 24px)",
              fontSize: "clamp(15px, 2.5vw, 26px)",
              borderRadius: "28px",
              border: "none",
              cursor: "pointer",
              maxWidth: "254px",
              maxHeight: "67px",
              // border:"2px solid red",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "clamp(22px, 3vw, 30px)",
              letterSpacing: "-0.25px",
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Video Content */}
      <div
        style={{
          flex: "1 1 500px",
          textAlign: "center",
          maxHeight: "336px",
          // border:"2px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTopTop:"20px"
        }}
      >
        <video
          className="AeroWalkSection-video-section"
          src={Aerowalk_animation}
          autoPlay
          muted
          playsInline
          loop
          style={{ width: "100%", maxWidth: "500px", border: "none" }}
        />
      </div>
    </div>
  );
};

export default AeroWalkSection;







// import React from "react";
// import Aerowalk_animation from "./Video/Aerowalk_animation.mp4";
// import AeroWalkImg from "./Image/AeroWalkImg.png";

// const AeroWalkSection = () => {
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 alignItems: "center",
//                 flexWrap: "wrap",
//                 padding: "60px 20px",
//                 fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
//                 maxWidth: "1100px",
//                 margin: "0 auto",
//                 gap: "40px", // 👈 Controls space between text and video
//             }}
//         >
//             {/* Text Content */}
//             <div
//                 style={{
//                     flex: "1 1 450px",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     textAlign: "left",
//                 }}
//             >
//                 {/* AeroWalk Logo */}
//                 <img
//                     src={AeroWalkImg}
//                     alt="AeroWalk Logo"
//                     style={{
//                         width: "220px",
//                         marginBottom: "24px",
//                     }}
//                 />

//                 {/* Manually broken lines */}
//                 <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.8", margin: 0 }}>
//                     <strong>Command attention</strong> with the
//                 </p>
//                 <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.8", margin: 0 }}>
//                     <strong>14.5-pound</strong> rollator that
//                 </p>
//                 <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.8", margin: 0 }}>
//                     combines modern style and
//                 </p>
//                 <p
//                     style={{
//                         fontSize: "16px",
//                         color: "#444",
//                         lineHeight: "1.8",
//                         marginBottom: "20px",
//                     }}
//                 >
//                     everyday ease.
//                 </p>

//                 {/* HCPCS Code */}
//                 <p
//                     style={{
//                         fontWeight: "700",
//                         fontSize: "14px",
//                         color: "#333",
//                         marginBottom: "28px",
//                     }}
//                 >
//                     HCPCS E0143 + E0156
//                 </p>

//                 {/* Button */}
//                 <button
//                     type="button"
//                     style={{
//                         backgroundColor: "#2675C6",
//                         color: "#000",
//                         fontWeight: "700",
//                         fontSize: "16px",
//                         padding: "12px 32px",
//                         borderRadius: "999px",
//                         border: "none",
//                         cursor: "pointer",
//                         width: "fit-content",
//                     }}
//                 >
//                     Get in Touch
//                 </button>
//             </div>

//             {/* Video Content */}
//             <div style={{ flex: "1 1 500px", textAlign: "center" }}>
//                 <video
//                     src={Aerowalk_animation}
//                     autoPlay
//                     muted
//                     loop
//                     style={{ width: "100%", maxWidth: "500px" }}
//                 />
//             </div>
//         </div>
//     );
// };

// export default AeroWalkSection;
