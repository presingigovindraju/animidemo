
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
                padding: "20px 20px",
                fontFamily: "Montserrat",
                maxWidth: "1100px",
                margin: "25px auto",
                // border:"2px solid red"
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
                        justifyContent: "space-around",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    {/* Logo */}
                    <img
                        src={AeroFlyImg}
                        alt="AeroWalk Logo"
                        style={{
                            width: "clamp(200px, 30vw, 274px)",
                            height: "clamp(56px, 10vw, 72px)",
                            marginBottom: "16px",
                        }}
                    />

                    {/* Combined Paragraph + HCPCS Line */}
                    <p
                        style={{
                            fontSize: "clamp(16px, 2vw, 20px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            color: "#444445",
                            lineHeight: "clamp(24px, 2.5vw, 30px)",
                            letterSpacing: "-0.25px",
                            margin: "0 auto",
                            maxWidth: "433px",
                            maxHeight: "114px",
                        }}
                    >
                        The full-sized and full-featured 18″ wheelchair sets the standard for{" "}
                        <strong style={{ fontWeight: "700" }}>lighter-than-a-feather</strong> mobility
                        at just <strong style={{ fontWeight: "700" }}>13 pounds.</strong>*
                        <br />
                        <strong style={{ fontWeight: "700" }}>HCPCS K0004 + E0971</strong><br/>
                        
                    </p>
                    <p style={{
                        maxWidth: "433px",
                        maxHeight: "29px",
                        flexShrink: 0,
                        color: "#444445",
textAlign: "center",
fontFamily: "Montserrat",
fontSize: "14px",
fontStyle: "normal",
fontWeight: 400,
lineHeight: "20px", /* 178.571% */
letterSpacing: "-0.25px",
paddingTop:"12px"

                    }}>*Frame only</p>

                    {/* Button */}
                    <button
                        type="button"
                        style={{
                            backgroundColor: "#69B3E7",
                            color: "#1B1746",
                            fontWeight: "700",
                            padding: "clamp(8px, 1.5vw, 10px) clamp(16px, 5vw, 24px)",
                            fontSize: "clamp(15px, 2.5vw, 25px)",
                            borderRadius: "28px",
                            border: "none",
                            cursor: "pointer",
                            maxWidth: "254px",
                            maxHeight: "67px",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            lineHeight: "clamp(22px, 3vw, 30px)",
                            letterSpacing: "-0.25px",
                            marginTop: "20px"
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <video
                    className="AeroFlySection-video-section"
                    src={Aerofly_animation}
                    autoPlay
                    playsInline
                    muted
                    loop
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        border: "none",
                    }}
                />
            </div>
        </div>
    );
};

export default AeroFlySection;
