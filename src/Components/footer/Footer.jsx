import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Adarsh-Shukla</h1>
        <ul className="footer__list">
          <li>
            <a
              href="#home"
              className="footer__list"
              style={{ color: "var(--title-color-dark)" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="footer__list"
              style={{ color: "var(--title-color-dark)" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="footer__list"
              style={{ color: "var(--title-color-dark)" }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="footer__list"
              style={{ color: "var(--title-color-dark)" }}
            >
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/adarsh-shuklaa/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i> LinkedIn
          </a>

          <a
            href="https://github.com/dash-09"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i> GitHub
          </a>

          <a
            href="https://leetcode.com/add_shy/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-arrow"></i> LeetCode
          </a>
        </div>

        <span className="footer__copy">&#169; Adarsh Shukla 💕💕💕 </span>
      </div>
    </footer>
  );
};

export default Footer;
