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

const CustomersSection = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: "#333",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "10px",
          color: "#444445"
        }}
      >
        Give Your Customers a{" "}
        <span style={{ fontWeight: "700" }}>First-Class Experience</span>
      </h2>

      <p
        style={{
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#444445",
        }}
      >
        Offer the upgrade they deserve, at a price they don’t expect
      </p>

      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.6",
          color: "#666",
        }}
      >
        First-class mobility doesn’t have to mean paying a premium price. The
        new, ultra-lightweight Aero line blends sleek, modern design with
        comfort-focused engineering to impress your customers at every turn.
        With competitive pricing that supports your margins, the Aero line helps
        you grow both reimbursed and cash sales while turning users into repeat
        customers.
      </p>
    </div>
  );
};

export default CustomersSection;
