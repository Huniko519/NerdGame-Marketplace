import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import game from "../../assets/post-img/animat.svg";
import "./style.css";
import comsonpng from "../../assets/post-img/animat.svg";

const Newgame = () => {
  return (
    <>
      <div>
        <Image className="background" src={comsonpng} alt="Pineapple" />
        <Row className="game-page mt-10">
          <Col xs={12} className="game-page-topics mt-1">
            <p className="game-land">LAND</p>
          </Col>
          <Col xs={12} className="game-page-topics mt-1">
            <Image className="game-imgs" src={game} />
          </Col>
          <Col xs={12} className="game-page-topics mt-1">
            <p className="game-lands">COMING SOON</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Newgame;
