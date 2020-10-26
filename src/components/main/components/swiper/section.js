import React from "react";

const Section = ({ children, text }) => {
  return (
    <>
      <h1 style={{ paddingLeft: "1.5rem", color: "#ffffff" }}>{text}</h1>
      <section
        style={{
          margin: "0 0 20px 0",
          maxWidth: "100vw",
          marginBottom: "3rem",
        }}
      >
        {children}
      </section>
    </>
  );
};

export default Section;
