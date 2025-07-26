
import React from "react";
import Aerocarbon_animation from "./Video/Aerocarbon_animation.mp4";
import AeroCarbonImg from "./Image/AeroCarbonImg.png";

const AeroCarbonSection = () => {
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
             {/* Video Content */}
            <div style={{ flex: "1 1 500px", textAlign: "center" }}>
                <video
                    src={Aerocarbon_animation}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", maxWidth: "500px" ,
        border:"none"}}
                />
            </div>

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
                        src={AeroCarbonImg}
                        alt="AeroWalk Logo"
                        style={{
                            width: "250px",
                            marginBottom: "24px",
                            // border: "2px solid pink"
                        }}
                    />

                    {/* ✅ Split into 4 lines */}
                    <p style={{ fontSize: "16px", color: "#444445", lineHeight: "1.6", marginTop: "-15px" }}>
                        At just <strong>11.5 pounds,</strong> this 
                    </p>
                    <p style={{ fontSize: "16px", color: "#444445", lineHeight: "1.6" }}>
                       carbon frame rollator delivers standout
                    </p>
                    <p style={{ fontSize: "14.5px", color: "#444445", lineHeight: "1.6", }}>
                         comfort and<strong> effortless portability.</strong>
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
                        Pending HCPCS E0143 + E0156 
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

           
        </div>
    );
};

export default AeroCarbonSection;