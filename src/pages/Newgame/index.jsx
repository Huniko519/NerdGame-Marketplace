import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import game from "../../assets/post-img/animat.svg";
import "./style.css";

const Newgame = () => {
  return (
    <>
      <Row className="game-page">
        <Col xs={12} className="game-page-topics">
          <p className="game-land">LAND</p>
        </Col>
        <Col xs={12} className="game-page-topics">
          <Image className="game-imgs" src={game} />
        </Col>
        <Col xs={12} className="game-page-topics">
          <p className="game-lands">COMING SOON</p>
        </Col>
      </Row>
    </>
  );
};

export default Newgame;
