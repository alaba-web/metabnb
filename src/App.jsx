import React from "react";
import Header from "./components/header";
import "./App.css";
import Footer from "./components/footer";
import Card from "./components/card";
import hero from "./components/assets/Hero.png";
import mbtoken from "./components/assets/mbtoken.svg";
import metamask from "./components/assets/metamask.svg";
import opensea from "./components/assets/opensea.svg";
import groupNFTs from "./components/assets/Gnfts.png";
import frame1 from "./components/assets/Frame151.png";
import frame2 from "./components/assets/Frame1.png";
import frame3 from "./components/assets/forest.png";
import frame4 from "./components/assets/Frame3.png";
import frame5 from "./components/assets/Frame4.png";
import frame6 from "./components/assets/Frame5.png";
import frame7 from "./components/assets/Frame6.png";
import frame8 from "./components/assets/Frame7.png";

function App() {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <div>
          <h1 className="hero-head">
            Rent a <span>Place</span> away from
            <br />
            <span>Home</span> in the <span>Metaverse</span>
          </h1>
          <p className="hero-parag">
            we provide you access to luxury and affordable houses <br /> in the
            metaverse, get a chance to turn your <br /> imagination to reality
            at your comfort zone
          </p>
          <div className="hero-search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for location"
              required
            />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="hero-photo">
          <img src={hero} alt="hero pics" />
        </div>
      </div>
      <div className="sub-sec">
        <div>
          <img src={mbtoken} alt="MBToken" />
        </div>
        <div>
          <img src={metamask} alt="metamask" />
        </div>
        <div>
          <img src={opensea} alt="opensea" />
        </div>
      </div>
      <section className="nft-sec">
        <h2>Inspiration for your next adventure</h2>
        <div className="nft-cards">
          <Card img={frame5} />
          <Card img={frame6} />
          <Card img={frame7} />
          <Card img={frame8} />
          <Card img={frame1} />
          <Card img={frame2} />
          <Card img={frame3} />
          <Card img={frame4} />
        </div>
      </section>
      <div className="third-sec">
        <div>
          <h2 className="third-head">Metabnb NFTs</h2>
          <p className="third-parag">
            Discover our NFT gift cards collection. Loyal
            <br />
            customers gets amazing gift cards which are
            <br />
            traded as NFTs. These NFTs gives our cutomer
            <br />
            access to loads of our exclusive services.
          </p>
          <a href="https//www.zuri.com" className="buttn">
            Learn more
          </a>
        </div>
        <div className="nft-photo">
          <img src={groupNFTs} alt="group nfts" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
