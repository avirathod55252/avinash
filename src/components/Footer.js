import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f1f1f1",
        padding: "15px 0",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        color: "#333",
        borderTop: "1px solid #ccc",
      }}
    >
      <p style={{ margin: "5px 0" }}>
        © {new Date().getFullYear()} Avinash Rathod. All Rights Reserved.
      </p>

      <p style={{ margin: "5px 0" }}>Developed using Java Spring Boot</p>

      <p style={{ margin: "5px 0" }}>
        <a
          href="mailto:avinashrathod55252@gmail.com"
          style={{ margin: "0 8px", color: "#007bff", textDecoration: "none" }}
        >
          Email
        </a>
        |
        <a
          href="https://github.com/avirathod55252"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 8px", color: "#007bff", textDecoration: "none" }}
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/avinashrathod55252/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 8px", color: "#007bff", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
