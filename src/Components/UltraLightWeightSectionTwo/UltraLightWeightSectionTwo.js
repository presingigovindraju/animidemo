
import React from "react";
import UltraLightWeightSectionTwoImg from "./Image/UltraLightWeightSectionTwoImg.png";

const UltraLightWeightSectionTwo = () => {
  const cards = [
    {
      img: UltraLightWeightSectionTwoImg,
      alt: "Ultra-Lightweight",
      title: "Ultra-Lightweight",
      desc: "Support your active lifestyle with one of the lightest rollators in its class, the AeroCarbon! Folding and transporting is easy with the 11.5 lb carbon fiber frame.   "
     
    },
    {
      img: UltraLightWeightSectionTwoImg,
      alt: "Optimal Support",                                                                   

      title: "Modern Design",
      desc: "The AeroCarbon features a sleek, contemporary look to compliment your aesthetic and blend seamlessly into your busy lifestyle. ",
    },
    {
      img: UltraLightWeightSectionTwoImg,
      alt: "Smooth Mobility",
      title: "Built for Real Life",
      desc: "The durable AeroCarbon is engineered with premium carbon fiber, for a rust-resistant frame that is strong and reliable for both travel and everyday use. "
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
          maxWidth: "1140px",
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
              maxWidth: "380px",
              minWidth: "280px",
              backgroundColor: "#E6F2FB",
              position: "relative",
              paddingTop: "70px", // space for image
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
            <div style={{ textAlign: "center",width:"360px" }}>
              <h3
                style={{
                  fontWeight: "700",
                  marginBottom: "6px",
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

export default UltraLightWeightSectionTwo;
