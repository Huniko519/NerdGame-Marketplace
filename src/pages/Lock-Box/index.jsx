import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import game from "../../assets/post-img/Lock.svg";
import "./style.css";

const LockBox = () => {
  return (
    <>
      <Row className="game-page">
        <Col xs={12} className="game-page-topics">
          <p className="lock">LOCK-BOX</p>
        </Col>
        <Col xs={12} className="game-page-topics">
          <Image className="lock-imgs" src={game} />
        </Col>
        <Col xs={12} className="game-page-topics">
          <p className="game-lands">COMING SOON</p>
        </Col>
      </Row>
    </>
  );
};

export default LockBox;
