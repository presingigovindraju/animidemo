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
      desc: "Storage and transport is a breeze with the lightweight 14.5 lb frame and compact side-to-side fold—making AeroWalk ",
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
        padding: "80px 20px",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        // border: "2px solid red",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          rowGap: "85px", // Add vertical space between rows
        //   columnGap: "30px", 
        //   border: "2px solid red",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 300px",
              maxWidth: "366px",
              minWidth: "280px",
              backgroundColor: "#E6F2FB",
              position: "relative",
              paddingTop: "80px", // space for image
              boxSizing: "border-box",
            }}
          >
            {/* Floating Image */}
            <img
              src={card.img}
              alt={card.alt}
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "120px",
                zIndex: 2,
              }}
            />

            {/* Text Content */}
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3
                style={{
                  fontWeight: "700",
                  marginBottom: "10px",
                  color: "#000",
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.6" }}>
                {card.desc}
                <strong>{card.strong}</strong>
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
