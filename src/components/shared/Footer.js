import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-links-container">
        <img
          className="footer-images"
          src="/images/icons8-github-96.png"
          alt="github icon"
        ></img>
        <img
          className="footer-images"
          src="/images/icons8-linkedin-circled-96.png"
          alt="linkedin icon"
        ></img>
        <img
          className="footer-images"
          src="/images/icons8-medium-96.png"
          alt="medium icon"
        ></img>
        <img
          className="footer-images"
          src="/images/icons8-send-email-96.png"
          alt="send email icon"
        ></img>
      </div>
      <p>&copy;Felipe Lins. 2020.</p>
      <p>Created with ReactJS.<br />Deployed and hosted with AWS.</p>
      <p>Thanks for visiting!</p>
    </div>
  );
}
