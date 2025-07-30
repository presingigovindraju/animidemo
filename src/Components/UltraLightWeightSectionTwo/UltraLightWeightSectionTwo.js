import React from "react";
import UltraLightWeightSectionTwoImg1 from "./Image/UltraLightWeightSectionTwoImg1.png";
import UltraLightWeightSectionTwoImg2 from "./Image/UltraLightWeightSectionTwoImg2.png";
import UltraLightWeightSectionTwoImg3 from "./Image/UltraLightWeightSectionTwoImg3.png";

const UltraLightWeightSectionTwo = () => {
  const cards = [
    {
      img: UltraLightWeightSectionTwoImg1,
      alt: "Ultra-Lightweight",
      title: "Ultra-Lightweight",
      desc: "Support your active lifestyle with one of the lightest rollators in its class, the AeroCarbon™ Folding and transporting is easy with the ",
      strong: "11.5 lb carbon fiber frame.",
    },
    {
      img: UltraLightWeightSectionTwoImg2,
      alt: "Modern Design",
      title: "Modern Design",
      desc: "The AeroCarbon™ features a  ",
      strong: "sleek, contemporary look",
      end: " to compliment your aesthetic and blend seamlessly into your busy lifestyle.",
    },
    {
      img: UltraLightWeightSectionTwoImg3,
      alt: "Smooth Mobility",
      title: "Built for Real Life",
      desc: "The durable AeroCarbon™ is engineered with ",
      strong: "premium carbon fiber,",
      end: " for a rust-resistant frame that is strong and reliable for both travel and everyday use.",
    },
  ];

  return (
    <div
      style={{
        paddingTop: "105px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
        fontFamily: "Montserrat",
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
              paddingTop: "145px",
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
                top: "clamp(-100px, -9vw, -120px)",
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
                marginTop: "-30px",
                textAlign: "center",
                // padding: "18.5px 20px",
                paddingTop:"20px",
                paddingBottom:"24px",
                paddingRight:"20px",
                paddingLeft:"20px",
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
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "30px",
                  letterSpacing: "-0.25px",
                  margin: "0 auto",
                  maxWidth:
                    index === 0
                      ? "331px"
                      : index === 1
                      ? "341px"
                      : "330px",
                  maxHeight:
                    index === 0
                      ? "197px"
                      : index === 1
                      ? "164px"
                      : "189px",
                }}
              >
                {card.desc}
                <strong
                  style={{
                    color: "#444445",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
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

export default UltraLightWeightSectionTwo;
