
import React from "react";
import Aerofly_animation from "./Video/Aerofly_animation.mp4";
import AeroFlyImg from "./Image/AeroFlyImg.png";

const AeroFlySection = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "40px 20px",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                maxWidth: "1100px",
                margin: "0 auto",
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
                        // border: "2px solid red"
                    }}
                >
                    <img
                        src={AeroFlyImg}
                        alt="AeroWalk Logo"
                        style={{
                            width: "250px",
                            marginBottom: "24px",
                            // border: "2px solid pink"
                        }}
                    />

                    {/* ✅ Split into 4 lines */}
                    <p style={{ fontSize: "16px", color: "#444445", lineHeight: "1.6", marginTop: "-15px" }}>
                        The full-sized and full-featured 18″
                    </p>
                    <p style={{ fontSize: "16px", color: "#444445", lineHeight: "1.6" }}>
                       wheelchair sets the standard for  <strong> lighter-</strong>
                    </p>
                    <p style={{ fontSize: "14.5px", color: "#444445", lineHeight: "1.6", }}>
                      <strong>than-a-feather</strong> mobility at just <strong> mobility at just 13 pounds.*</strong>
                    </p>
                    {/* <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: "10px" }}>
                        
                    </p> */}
                   

                    <p
                        style={{
                            fontWeight: "700",
                            fontSize: "14px",
                            marginTop: "10px",
                            marginBottom: "20px",
                            color: "#333",
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
                            padding: "10px 24px",
                            fontSize: "16px",
                            borderRadius: "20px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Video Content */}
            <div style={{ flex: "1 1 500px", textAlign: "center" }}>
                <video
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