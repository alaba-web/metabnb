import React from "react";
import "./footer.css";
import footLogo from "./assets/Group.svg";
import facebook from "./assets/Vector(2).png";
import instagram from "./assets/Vector(3).png";
import twitter from "./assets/Vector(4).png";

function Footer() {
  return (
    <footer>
      <div className="containe">
        <div className="foot_start">
          <div>
            <img src={footLogo} alt="footer logo" />
          </div>
          <div className="icons">
            <a href="#">
              <img src={facebook} alt="facebook logo" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram logo" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter logo" />
            </a>
          </div>
        </div>
        <div>
          <h3>Community</h3>
          <p>NFTs</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div>
          <h3>Places</h3>
          <p>Castle</p>
          <p>Farms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div>
          <h3>About us</h3>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
      <small>©️ 2022 Metabnb</small>
    </footer>
  );
}

export default Footer;
