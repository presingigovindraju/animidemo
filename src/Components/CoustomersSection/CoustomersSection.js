// import react from "react";



// const CoustomersSection = () => {



//     return (
//         <div>
//             <p>Give Your Customers a First-Class Experience</p>
//             <p>Offer the upgrade they deserve, at a price they don’t expect</p>
//             <p>First-class mobility doesn’t have to mean paying a premium price. The new, ultra-lightweight Aero line blends sleek, modern design with comfort-focused engineering to impress your customers at every turn. With competitive pricing that supports your margins, the Aero line helps you grow both reimbursed and cash sales while turning users into repeat customers.
//             </p>
//         </div>
//     )
// }


// export default CoustomersSection



import React from "react";
import "./CoustomersSection.css";

const CustomersSection = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "25px 20px",
        maxWidth: "1262px",
        margin: "0 auto",
        fontFamily: "Montserrat",
        color: "#444445",
        // lineHeight: "41px",
        // height:"261px",
        // border:"2px solid red"
      }}
    >
      <h2
  style={{
    fontSize: "clamp(24px, 5vw, 40px)",
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#444445",
    fontStyle: "normal",
    letterSpacing: "-0.25px",
    lineHeight: "clamp(28px, 5vw, 41px)"
  }}
>
  Give Your Customers a{" "}
  <span className="break-sm" style={{ fontWeight: "700" }}>
    First-Class Experience
  </span>
</h2>



      <p
        style={{
          fontSize: "clamp(18px, 3vw, 28px)",
          fontWeight: "600",
          marginBottom: "6px",
          color: "#444445",
          fontFamily: "Montserrat",
           lineHeight: "clamp(24px, 5vw, 44px)",
          fontStyle: "normal",
          letterSpacing: "-0.25px",
          // border:"2px solid red",
        }}
      >
        Offer the upgrade they deserve, at a price they don't expect
      </p>

      <p
        style={{
          color: "#444445",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "26px",
          maxWidth:"1262px",
          margin:"0 auto",
          letterSpacing: "clamp(-0.5px, -0.1vw, -0.25px)",
          // border:"2px solid red"
    fontSize: "clamp(16px, 2.5vw, 20px)", // ✅ responsive font size
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First-class mobility doesn't have to mean paying a premium price. The
        new, ultra-lightweight Aero line blends <strong style={{
          color: "#444445",
fontFamily: "Montserrat",
fontSize: "clamp(12px, 2.5vw, 20px)",
fontStyle: "normal",
fontWeight: 700,
lineHeight: "clamp(28px, 4vw, 43px)",
letterSpacing: "clamp(-0.5px, -0.1vw, -0.25px)"
        }}>sleek, </strong> <strong style={{
          color: "#444445",
fontFamily: "Montserrat",
fontSize: "clamp(12px, 2.5vw, 20px)",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "clamp(20px, 3.5vw, 30px)",
letterSpacing: "clamp(-0.5px, -0.1vw, -0.25px)"
        }}>modern design</strong> with
        <strong style={{
          color: "#444445",
fontFamily: "Montserrat",
fontSize: "clamp(12px, 2.5vw, 20px)",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "clamp(20px, 3.5vw, 30px)",
letterSpacing: "clamp(-0.5px, -0.1vw, -0.25px)"
        }}> comfort-focused engineering</strong> to impress your customers at every turn.
        With  <strong style={{
          color: "#444445",
fontFamily: "Montserrat",
fontSize: "clamp(12px, 2.5vw, 20px)",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "clamp(20px, 3.5vw, 30px)",
letterSpacing: "clamp(-0.5px, -0.1vw, -0.25px)"
        }}>competitive pricing that supports your margins,</strong> the Aero line helps
        you grow both reimbursed and cash sales while turning users into repeat
        customers.
      </p>
    </div>
  );
};

export default CustomersSection;
