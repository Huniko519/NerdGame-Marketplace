import React from "react";
import { Image } from "react-bootstrap";
import game from "../../assets/post-img/animat.svg";
import "./style.css";

const NewGame = () => {
  return (
    <>
      <div className="main-bg">
        <div className="nheader">
          <div className="nheader-info">
            <p className="ngame-land1">LAND</p>
            <Image className="ngame-imgs" src={game} />
            <p className="ngame-land2">COMING SOON</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewGame;
