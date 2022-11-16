import React from "react";
import setting from "./assets/setting-5.svg";
import Footer from "./footer";
import Header from "./header";
import Card from "./card";
import "./placeToStay.css";
import frame1 from "./assets/Frame151.png";
import frame2 from "./assets/Frame1.png";
import frame3 from "./assets/forest.png";
import frame4 from "./assets/Frame3.png";
import frame5 from "./assets/Frame4.png";
import frame6 from "./assets/Frame5.png";
import frame7 from "./assets/Frame6.png";
import frame8 from "./assets/Frame7.png";
import frame9 from "./assets/Frame8.png";
import frame10 from "./assets/Frame9.png";
import frame11 from "./assets/Frame10.png";
import frame12 from "./assets/Frame11.png";
import frame13 from "./assets/casino.png";
import frame14 from "./assets/bridge.png";
import frame15 from "./assets/Frame14.png";
import frame16 from "./assets/Frame15.png";

function PlaceToStay() {
  return (
    <div>
      <Header />
      <div className="places">
        <div>Resturant</div>
        <div>Cottage</div>
        <div>Castle</div>
        <div>Fantasy city</div>
        <div>Beach</div>
        <div>Cabins</div>
        <div>Off-grid</div>
        <div>Farm</div>
        <div className="loca">
          <span>Location</span> <img src={setting} alt="setting" />
        </div>
      </div>
      <section className="nft-sec">
        <div className="nft-cards">
          <Card img={frame1} />
          <Card img={frame2} />
          <Card img={frame3} />
          <Card img={frame4} />
          <Card img={frame5} />
          <Card img={frame6} />
          <Card img={frame7} />
          <Card img={frame8} />
          <Card img={frame9} />
          <Card img={frame10} />
          <Card img={frame11} />
          <Card img={frame12} />
          <Card img={frame13} />
          <Card img={frame14} />
          <Card img={frame15} />
          <Card img={frame16} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PlaceToStay;
