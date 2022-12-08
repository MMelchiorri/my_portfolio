import React from "react";
import "../styles/Footer.css";

export default function Footer({ img, site, alt }) {
  if (alt !== "cv_img" && alt !== "mail_img") {
    return (
      <div className="footerItem">
        <a href={site}>
          <img className="footerItem" src={img} alt={alt}></img>
        </a>
      </div>
    );
  } else if (alt === "mail_img") {
    return (
      <div className="footerItem">
        <a href="mailto:mm.melchiorri@gmail.com">
          <img className="footerItem" src={img} alt={alt}></img>
        </a>
      </div>
    );
  } else {
    return (
      <div className="footerItem">
        <a
          href="../pdf_curriculum/Curriculum_Marco_Melchiorri.pdf"
          download={true}
        >
          <img className="footerItem" src={img} alt={alt}></img>
        </a>
      </div>
    );
  }
}
