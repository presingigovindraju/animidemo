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

const AeroWalkSection = () => {
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
                        src={AeroWalkImg}
                        alt="AeroWalk Logo"
                        style={{
                            width: "250px",
                            marginBottom: "24px",
                            // border: "2px solid pink"
                        }}
                    />

                    {/* ✅ Split into 4 lines */}
                    <p style={{ fontSize: "16px", color: "#444445", lineHeight: "1.6", marginTop: "-15px" }}>
                        <strong>Command attention</strong> with the
                    </p>
                    <p style={{ fontSize: "16px", color: "#444445", lineHeight: "1.6" }}>
                        <strong>14.5-pound</strong> rollator that combines
                    </p>
                    <p style={{ fontSize: "14.5px", color: "#444445", lineHeight: "1.6", }}>
                        modern style and everyday ease.
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
                        HCPCS E0143 + E0156
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
                    src={Aerowalk_animation}
                    autoPlay
                    muted
                    loop
                    style={{ width: "100%", maxWidth: "500px" ,
        border:"none"}}
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
