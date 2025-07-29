
import React from "react";
import Aerofly_animation from "./Video/Aerofly_animation.mp4";
import AeroFlyImg from "./Image/AeroFlyImg.png";
import "./AeroFlySection.css";

const AeroFlySection = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "40px 20px",
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
                }}
            >
                <div 
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:"space-around",
                        alignItems: "center",
    textAlign: "center", 
                        // aspectratio:" 89/25",
                        // border: "2px solid red",
                        // padding:"0 30px"
                    }}
                >
                    <img
                        src={AeroFlyImg}
                        alt="AeroWalk Logo"
                        style={{
                           width: "clamp(200px, 30vw, 274px)",
                           height: "clamp(48px, 10vw, 72px)",
                            // marginBottom: "24px",
                            marginBottom: "16px",
                            // border:"2px solid red"
                            // border: "2px solid pink"
                       }}
                    />

                    {/* ✅ Split into 4 lines */}
                    <p style={{fontSize: "clamp(16px, 2vw, 20px)",fontStyle:"normal",fontWeight: "400", color: "#444445", lineHeight: "clamp(24px, 2.5vw, 30px)", marginTop: "-15px" ,letterSpacing:"-0.25px",margin:"0 auto" }}>
                        The full-sized and full-featured 18″
                    </p>
                    <p style={{fontSize: "clamp(16px, 2vw, 20px)",fontStyle:"normal",fontWeight: "400", color: "#444445",  lineHeight: "clamp(24px, 2.5vw, 30px)" ,letterSpacing:"-0.25px",margin:"0 auto" }}>
                       wheelchair sets the standard for <strong style={{fontWeight:"700"}}> lighter-</strong>
                    </p>
                    <p style={{fontSize: "clamp(16px, 2vw, 20px)",fontStyle:"normal",fontWeight: "400", color: "#444445", lineHeight: "clamp(24px, 2.5vw, 30px)",letterSpacing:"-0.25px",margin:"0 auto"  }}>
                      <strong style={{fontWeight:"700"}}>than-a-feather</strong> mobility at just <strong style={{fontWeight:"700"}}> mobility at just 13 pounds.*</strong>
                    </p>
                    {/* <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: "10px" }}>
                        
                    </p> */}
                   

                    <p
                        style={{
                            fontWeight: "700",
                           fontSize: "clamp(16px, 2vw, 20px)",
                            marginTop: "10px",
                            marginBottom: "20px",
                            fontStyle:"normal",
                            color: "#444445",
                             lineHeight: "clamp(24px, 2.5vw, 30px)",
                            letterSpacing:"-0.25px"
                            
                       }}
                    >
                        HCPCS K0004 + E0971
                    </p>

                    <button
                        type="button"
                        style={{
                            backgroundColor: "#69B3E7",
                            color: "#1B1746",
                            fontWeight: "600",
                            padding: "clamp(8px, 1.5vw, 10px) clamp(16px, 5vw, 24px)",
                            fontSize: "clamp(16px, 2.5vw, 26px)",
                            borderRadius: "28px",
                            border: "none",
                            cursor: "pointer",
                            maxWidth:"254px",
                            maxHeight:"67px",
                            // border:"2px solid red",
                            fontFamily:"Montserrat",
                            fontStyle:"normal",
                            fontWeight:"700",
                            lineHeight: "clamp(22px, 3vw, 30px)",
                            letterSpacing:"-0.25px"
                        }}
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Video Content */}
            <div style={{ 
                 flex: "1 1 500px",
                  textAlign: "center",
                  maxHeight:"336px",
                //   border:"2px solid red",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                //   marginTopTop:"20px"
                   }}>
                <video  className="AeroFlySection-video-section"
                    src={Aerofly_animation}
                    autoPlay
                    playsInline
                    muted
                    loop
                    style={{ width: "100%", maxWidth: "500px",
        border:"none" }}
                />
            </div>
        </div>
    );
};

export default AeroFlySection;