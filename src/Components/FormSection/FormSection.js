import React, { useState } from "react";

const FormSection = () => {
  // Step 1: State variables for each input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 3: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( formData);

    // Optional: Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "60px auto",
        textAlign: "center",
        fontFamily: "'Montserrat', sans-serif",
        padding: "0 20px",
      }}
    >
      <h2
        style={{
          fontWeight: "700",
          fontSize: "24px",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        See how <span style={{ fontWeight: "500" }}>aero<sup>™</sup></span> can take
        <br />
        your showroom to new heights.
      </h2>

      <p style={{ color: "#555", marginBottom: "30px", fontSize: "15px" }}>
        Contact Your Sales Representative or enroll below for more information!
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ marginBottom: "25px", textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#6DB7F2",
            color: "#000",
            padding: "10px 30px",
            border: "none",
            borderRadius: "25px",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSection;
