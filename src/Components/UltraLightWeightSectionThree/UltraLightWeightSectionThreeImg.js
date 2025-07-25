
import React from "react";
import UltraLightWeightSectionThreeImg from "./Image/UltraLightWeightSectionThree.png";

const UltraLightWeightSectionThree = () => {
  const cards = [
    {
      img: UltraLightWeightSectionThreeImg,
      alt: "Ultra-Lightweight",
      title: "Featherlight Freedom",
      desc: "The lightweight AeroFly™ is redefining portability. It weighs in at just 13 lb (frame only), making it is one of the lightest folding wheelchairs in its class. "
     
    },
    {
      img: UltraLightWeightSectionThreeImg,
      alt: "Optimal Support",                                                                   

      title: "Design That Moves You",
      desc: "With a stylish, patent-protected magnesium-alloy frame available in matte black or gray, the AeroFly™ blends modern aesthetics with functional elegance.  ",
    },
    {
      img: UltraLightWeightSectionThreeImg,
      alt: "Smooth Mobility",
      title: "Comfort Meets Control",
      desc: "Put safety first with attendant brakes and anti-tippers. Enjoy seamless portability with quick-release wheels and a fold-down backrest. "
    }
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
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltraLightWeightSectionThree;
