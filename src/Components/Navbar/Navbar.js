import React from "react";
import "./Navbar.css";
import LOGO from "../../images/logo.png";
import BELL from "../../images/icons/bell.png";
import REGISTER from "../../images/icons/user.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar__section">
      <div className="dis__container">
        <div className="dis__flex__gutters j__c__sb a__i__c">
          <div className="flex__auto">
            <Link to="/">
              <img src={LOGO} width="120" alt="logo" />
            </Link>
          </div>
          <div className="flex__auto__sm">
            <div className="dis__flex__sm">
              <div className="flex__auto__sm">
                <img src={BELL} alt="BELL" />
              </div>
              <div className="flex__auto__sm">
                <Link to='/register'>
                  <img src={REGISTER} alt="REGISTER" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
