import React, { useState } from "react";
import logo from "./assets/Group.png";
import calcel from "./assets/x.png";
import metamask from "./assets/image66.png";
import wallet from "./assets/image69.png";
import downChevron from "./assets/DownChevron.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("nav_menu");
  const [modal, setModal] = useState(false);
  // const [burger, setBurger] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // toggle burger
    open === false ? setOpen(!open) : setOpen(false);
  };

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
      <nav className="head">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className={active}>
          <li className="nav_list">
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link to="/place-to-stay" className="nav_link">
              Place to stay
            </Link>
          </li>
          <li className="nav_list">
            <a href="/" className="nav_link">
              NFTs
            </a>
          </li>
          <li className="nav_list">
            <a href="/" className="nav_link">
              Community
            </a>
          </li>
          <li onClick={toggleModal} className="btn-nav">
            Connect wallet
          </li>
        </ul>

        <div className="hamburger" open={open} onClick={toggleNav}>
          <div
            style={{
              backgroundColor: open ? "red" : "#a02279",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          ></div>
          <div
            style={{
              backgroundColor: open ? "red" : "#a02279",
              transform: open ? "translatex(100%)" : "translate(0)",
              opacity: open ? "0" : "1",
            }}
          ></div>
          <div
            style={{
              backgroundColor: open ? "red" : "#a02279",
              transform: open ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          ></div>
        </div>
      </nav>

      {modal && (
        <div className="modal-dia">
          <div className="cont-modal">
            <div className="head-modal">
              <h5 className="modal-tit">Connect Wallet</h5>
              <img onClick={toggleModal} src={calcel} alt="cancel" />
            </div>
            <div className="modal-bod">
              <p>Choose your preferred wallet:</p>

              <div className="btn-down">
                <img src={metamask} alt="meta mask" />{" "}
                <p className="arr-front">Metamask</p>{" "}
                <img src={downChevron} alt="chev down" />
              </div>
              <div className="btn-down">
                <img src={wallet} alt="meta mask" />{" "}
                <p className="arr-front">WalletConnect</p>{" "}
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
