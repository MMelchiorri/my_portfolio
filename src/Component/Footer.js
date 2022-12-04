import React from "react";
import "../styles/Footer.css";

export default function Footer({ img,site }) {
  return (
    <div className="container-footer">
      <div className="footerItem">
        <a href={site}><img className="footerItem" src={img} alt="linkedin"></img></a>
      </div>
    </div>
  );
}
