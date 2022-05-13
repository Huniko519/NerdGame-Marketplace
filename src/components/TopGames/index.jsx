import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import CarouselComponent from "../Carousel";

const TopGames = () => {
  const gameName = ["Top NFT’s", "NFT’s for Sale", "NFT’s for Rent"];
  return (
    <>
      <Container fluid className="top-game">
        <p className="top-game-title">{gameName[0]}</p>
        <Row className="back">
          <Col>
            <CarouselComponent />
          </Col>
        </Row>
      </Container>

      <Container fluid className="top-game">
        <p className="top-game-title">{gameName[1]} </p>
        <Row className="back">
          <Col>
            <CarouselComponent />
          </Col>
        </Row>
      </Container>

      <Container fluid className="top-game">
        <p className="top-game-title">{gameName[2]} </p>
        <Row className="back">
          <Col>
            <CarouselComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopGames;
