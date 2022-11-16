import React, { useState } from "react";
import logo from "./assets/Group.png";
import calcel from "./assets/x.png";
import metamask from "./assets/image66.png";
import wallet from "./assets/image69.png";
import downChevron from "./assets/DownChevron.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [modal, setModal] = useState(false);
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  // if (burger) {
  //   document.body.classList.add("no-scroll");
  // } else {
  //   document.body.classList.remove("no-scroll");
  // }

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  return (
    <div className="contain">
      <header className="head">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {burger && (
          <nav className="nav-nav" onClick={toggleBurger}>
            <ul className="nav_list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/place-to-stay">Place to stay</Link>
              </li>
              <li>
                <a href="#">NFTs</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
            <div onClick={toggleModal} className="btn-nav">
              Connect wallet
            </div>
          </nav>
        )}

        <div className="hamburger" onClick={toggleBurger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      {modal && (
        <div className="modal-dial">
          <div className="modal-cont">
            <div className="modal-head">
              <h5 className="modal-tit">Connect Wallet</h5>
              <img onClick={toggleModal} src={calcel} alt="cancel" />
            </div>
            <div className="modal-body">
              <p>Choose your preferred wallet:</p>

              <div className="down-btn">
                <img src={metamask} alt="meta mask" /> <p>Metamask</p>{" "}
                <img src={downChevron} alt="chev down" />
              </div>
              <div className="down-btn">
                <img src={wallet} alt="meta mask" /> <p>WalletConnect</p>{" "}
                <img src={downChevron} alt="chev down" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
