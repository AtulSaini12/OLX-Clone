import React from "react";

import { SubFooter } from "./index";
function Footer() {
  return (
    <div className="footer">
      <SubFooter />
      <div className="footer-container">
        <ul className="footer-list">
          <li>developed using React JS</li>
          <li> © OLX-Clone</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
