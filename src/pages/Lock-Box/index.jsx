import React from "react";
import { Image } from "react-bootstrap";
import lock from "../../assets/post-img/Lock.svg";
import "./style.css";

const LockBox = () => {
  return (
    <>
      <div className="main-bg">
        <div className="mheader">
          <div className="mheader-info">
            <p className="mgame-land1">LOCK-BOX</p>
            <Image className="mgame-imgs" src={lock} />
            <p className="mgame-land2">COMING SOON</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LockBox;
