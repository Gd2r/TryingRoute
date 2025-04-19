import React from "react";
import "../styles/Footer.css";

// Even simpler Footer with direct inline styles
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        {" "}
        Made by Hisham ❤️{" "}
        <a
          href="https://github.com/Gd2r"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          @Gd2r
        </a>
      </p>
    </footer>
  );
}

export default Footer;
