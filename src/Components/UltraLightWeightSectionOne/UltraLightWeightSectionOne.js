// import React from "react";
// import UltraLightWeightImg1 from "./Images/UltraLightWeightImg1.png";
// import UltraLightWeightImg2 from "./Images/UltraLightWeightImg2.png";
// import UltraLightWeightImg3 from "./Images/UltraLightWeightImg3.png";




// const UltraLightWeightSectionOne =()=>{



//     return (
//         <div>
//             <div>
//             <img src={UltraLightWeightImg1} alt="UltraLightWeightImg1"/>
//             <img src={UltraLightWeightImg2} alt="UltraLightWeightImg2"/>
//             <img src={UltraLightWeightImg3} alt="UltraLightWeightImg3"/>
//             <div>

//             </div>
//             </div>
//         </div>
//     )
// }

// export default UltraLightWeightSectionOne



import React from "react";
import UltraLightWeightImg1 from "./Images/UltraLightWeightImg1.png";
import UltraLightWeightImg2 from "./Images/UltraLightWeightImg2.png";
import UltraLightWeightImg3 from "./Images/UltraLightWeightImg3.png";

const UltraLightWeightSectionOne = () => {
    const cards = [
        {
            img: UltraLightWeightImg1,
            alt: "Ultra-Lightweight",
            title: "Ultra-Lightweight",
            desc: "Storage and transport is a breeze with the lightweight 14.5 lb frame and compact side-to-side fold—making Aerowalk™ ",
            strong: "ideal for your on-the-go ",
            end: "mobility needs.",
        },
        {
            img: UltraLightWeightImg2,
            alt: "Optimal Support",
            title: "Optimal Support",
            desc: "Enjoy personalized support with an ",
            strong: "extendable, adjustable-height backrest ",
            end: "that delivers targeted lumbar support for lasting comfort.",
        },
        {
            img: UltraLightWeightImg3,
            alt: "Smooth Mobility",
            title: "Smooth Mobility",
            desc: "Experience exceptional stability and ",
            strong: "effortless movement ",
            end: "with large 10” front wheels and 8” back wheels, designed for versatile use both indoors and outdoors.",
        },
    ];

    return (
        <div
            style={{
                paddingTop: "120px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                fontFamily: "Montserrat",
                // border:"2px solid red"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    maxWidth: "1280px",
                    margin: "0 auto",
                    position: "relative",
                    rowGap: "145px",
                // border:"2px solid red"
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "1 1 300px",
                            maxWidth: "426.6px",
                            maxHeight: "358px",
                            minWidth: "280px",
                            backgroundColor: "#E6F2FB",
                            position: "relative",
                            paddingTop: "140px",
                            boxSizing: "border-box",
                            // border:"2px solid red"
                        }}
                    >
                        {/* Floating Image */}
                        <img
                            src={card.img}
                            alt={card.alt}
                            style={{
                                position: "absolute",
                                top: "clamp(-100px, -9vw, -110px)",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "clamp(220px, 25vw, 240px)",
                                height: "clamp(206px, 24vw, 226px)",
                                aspectRatio: "120 / 113",
                                zIndex: 2,
                                // border:"2px solid red"
                            }}
                        />

                        {/* Text Content */}
                        <div
                            style={{
                                marginTop: " -33px",
                                textAlign: "center",
                                // padding: "20px 20px",
                                paddingTop: "clamp(17px, 3vw, 22px)",
                                paddingRight:"20px",
                                paddingLeft:"20px",
                                paddingBottom: "clamp(16px, 4vw, 30px)",
                                // border:"2px solid red"
                            }}
                        >
                            <h3
                                style={{
                                    fontWeight: "700",
                                    color: "#444445",
                                    fontFamily: "Montserrat",
                                    fontSize: "24px",
                                    fontStyle: "normal",
                                    lineHeight: "30px",
                                    letterSpacing: "-0.25px",
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                style={{
                                    color: "#444445",
                                    fontFamily: "Montserrat",
                                    fontSize: "clamp(16px, 2.5vw, 20px)",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "30px",
                                    letterSpacing: "-0.25px",
                                    margin: "0 auto",
                                    maxWidth:
                                        index === 0
                                            ? "377px"
                                            : index === 1
                                            ? "318px"
                                            : index === 2
                                            ? "330px"
                                            : "100%",
                                    maxHeight:
                                        index === 0
                                            ? "180px"
                                            : index === 1
                                            ? "192px"
                                            : index === 2
                                            ? "192px"
                                            : "auto",
                                }}
                            >
                                {card.desc}
                                <strong
                                    style={{
                                        color: "#444445",
                                        fontFamily: "Montserrat",
                                        fontSize: "clamp(16px, 2.5vw, 20px)",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        lineHeight: "30px",
                                        letterSpacing: "-0.25px",
                                    }}
                                >
                                    {card.strong}
                                </strong>
                                {card.end}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UltraLightWeightSectionOne;
