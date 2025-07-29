
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
                paddingTop: "120px",
                paddingLeft:"20px",
                paddingRight:"20px",
                paddingBottom:"20px",
                fontFamily: "Montserrat",
                // border: "2px solid gray"
                // border: "2px solid red",
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
                    rowGap: "145px", // Add vertical space between rows
                    //   columnGap: "30px", 
                    // border: "2px solid red",
                    //   maxHeight:"358px"
                    // padding:
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
                            paddingTop: "140px", // space for image
                            boxSizing: "border-box"
                       }}
          >
            {/* Floating Image */}
            <img
              src={card.img}
              alt={card.alt}
              style={{
                                position: "absolute",
                                top: "-120px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                // width: "120px",width: 240px;
                                width: "240px",
                                height: " 226px",
                                aspectratio: 120 / 113,
                                zIndex: 2,
                                // border: "2px solid gray"
                            }}
            />

            {/* Text Content */}
            <div style={{ marginTop:"-30px", textAlign: "center", maxwidth: "377px", padding: "20px 20px" }}>
              <h3
                style={{
                                    fontWeight: "700",
                                    // marginBottom: "6px",
                                    color: "#444445",
                                    fontFamily: "Montserrat",
                                    fontsize: "24px",
                                    fontStyle: "normal",
                                    lineHeight: "30px",
                                    letterSpacing: "-0.25px"
                                }}
              >
                {card.title}
              </h3>
              <p style={{ 
                                color: "#444445",
                                fontfamily: "Montserrat",
                                fontsize: "20px",
                                fontstyle: "normal",
                                fontweight: "400",
                                lineheight: "30px",
                                letterspacing: "-0.25px"
                            }}>
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
