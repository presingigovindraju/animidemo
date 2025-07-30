import React from "react";
import Aerocarbon_animation from "./Video/Aerocarbon_animation.mp4";
import AeroCarbonImg from "./Image/AeroCarbonImg.png";
import "./AeroCarbonSection.css";

const AeroCarbonSection = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap-reverse",
                padding: "15px 20px",
                fontFamily: "Montserrat",
                maxWidth: "1100px",
                margin: "25px auto",
                // border:"2px solid red"
            }}
        >
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
                    className="AeroCarbonSection-video-section"
                    src={Aerocarbon_animation}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        border: "none",
                    }}
                />
            </div>

            {/* Text Content */}
            <div style={{ flex: "1 1 400px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={AeroCarbonImg}
                        alt="AeroWalk Logo"
                        style={{
                            maxWidth: "clamp(280px, 40vw, 430px)",
                            height: "clamp(50px, 8vw, 75px)",
                            marginBottom: "16px",
                            paddingBottom:"3px"
                        }}
                    />

                    {/* ✅ All combined into one elegant paragraph */}
                    <p
                        style={{
                            fontSize: "clamp(16px, 2vw, 20px)",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#444445",
                            lineHeight: "clamp(24px, 2.5vw, 30px)",
                            letterSpacing: "-0.25px",
                            textAlign: "center",
                            maxWidth: "449px",
                            maxHeight: "114px",
                            overflow: "hidden",
                            marginTop: "-8px",
                            marginBottom: "20px",
                        }}
                    >
                        At just <strong style={{ fontWeight: "700" }}>11.5 pounds,</strong> this carbon frame rollator delivers standout comfort and <strong style={{ fontWeight: "700" }}>effortless portability.</strong> Pending HCPCS E0143 + E0156.
                    </p>

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
                        }}
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AeroCarbonSection;

