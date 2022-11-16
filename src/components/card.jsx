import React from "react";
import "./card.css";
import star from "./assets/Star.png";
import heart from "./assets/heart.png";

function Card(props) {
  return (
    <div>
      <div className="card-body">
        <div className="card-nft">
          <img src={props.img} alt="NFT logo" />
          <img src={heart} alt="heart logo" className="heart" />
        </div>

        <div className="card-p1">
          <p>Desert king</p>
          <p>
            <span className="mbt-span">1MBT per night</span>
          </p>
        </div>
        <div className="card-p2">
          <p>2345km away</p>
          <p>
            <span>available for 2weeks stay</span>
          </p>
        </div>
        <div className="stars">
          <img src={star} alt="stars" />
          <img src={star} alt="stars" />
          <img src={star} alt="stars" />
          <img src={star} alt="stars" />
          <img src={star} alt="stars" />
        </div>
      </div>
    </div>
  );
}

export default Card;
