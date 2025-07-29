
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
            <div style={{ marginTop:"-30px", textAlign: "center", maxwidth: "377px", padding: "20px 20px"  }}>
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

export default UltraLightWeightSectionTwo;
