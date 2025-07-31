import React from "react";
import UltraLightWeightSectionThree1 from "./Image/UltraLightWeightSectionThree1.png";
import UltraLightWeightSectionThree2 from "./Image/UltraLightWeightSectionThree2.png";
import UltraLightWeightSectionThree3 from "./Image/UltraLightWeightSectionThree3.png";

const UltraLightWeightSectionThree = () => {
  const cards = [
    {
      img: UltraLightWeightSectionThree1,
      alt: "Ultra-Lightweight",
      title: "Featherlight Freedom",
      desc: "The lightweight AeroFly™ is redefining portability. It",
      strong1: "weighs in at just 13 lb",
      end1: "(frame only), making it one of the lightest folding wheelchairs in its class.",
      maxWidth: "377px",
    },
    {
      img: UltraLightWeightSectionThree2,
      alt: "Optimal Support",
      title: "Design That Moves You",
      desc: "With a stylish,",
      strong1: "patent-protected magnesium-alloy frame",
      end1: "available in matte black or gray, the AeroFly™ blends",
      strong2: "modern aesthetics",
      end2: "with functional elegance.",
      maxWidth: "318px",
    },
    {
      img: UltraLightWeightSectionThree3,
      alt: "Smooth Mobility",
      title: "Comfort Meets Control",
      desc: "Put safety first with",
      strong1: "attendant brakes",
      end1: "and",
      strong2: "anti-tippers.",
      end2: "Enjoy seamless portability with",
      strong3: "quick-release wheels",
      end3: "and a",
      strong4: "fold-down backrest.",
      maxWidth: "330px",
    }
  ];

  return (
    <div
      style={{
        padding: "110px 20px 20px",
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
          rowGap: "145px"
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 300px",
              maxWidth: "426.6px",
              minWidth: "280px",
              backgroundColor: "#E6F2FB",
              position: "relative",
              paddingTop: "140px",
              paddingBottom: "2px",
              boxSizing: "border-box",
              // border:"2px solid red"
            }}
          >
            <img
              src={card.img}
              alt={card.alt}
              style={{
                position: "absolute",
                top: "clamp(-110px, -9vw, -120px)",
                left: "50%",
                transform: "translateX(-50%)",
                width: "clamp(220px, 25vw, 240px)",
                height: "clamp(206px, 24vw, 226px)",
                aspectRatio: "120 / 113",
                zIndex: 2
              }}
            />

            <div
              style={{
                marginTop: "-34.5px",
                textAlign: "center",
                padding: "14px",
                maxWidth: card.maxWidth,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <h3
                style={{
                  fontWeight: "700",
                  color: "#444445",
                  fontSize: "24px",
                  lineHeight: "30px",
                  letterSpacing: "-0.25px"
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: "#444445",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  fontWeight: "400",
                  lineHeight: "30px",
                  letterSpacing: "-0.25px",
                  wordWrap: "break-word",
                  // border:"2px solid red"
                }}
              >
                {card.desc}{" "}
                {card.strong1 && <strong>{card.strong1}</strong>}{" "}
                {card.end1 && card.end1}{" "}
                {card.strong2 && <strong>{card.strong2}</strong>}{" "}
                {card.end2 && card.end2}{" "}
                {card.strong3 && <strong>{card.strong3}</strong>}{" "}
                {card.end3 && card.end3}{" "}
                {card.strong4 && <strong>{card.strong4}</strong>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltraLightWeightSectionThree;
