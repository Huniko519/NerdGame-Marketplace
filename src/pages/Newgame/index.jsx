import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import { Col, Container, Row, Image } from "react-bootstrap";
import game from "../../assets/post-img/animat.svg";
import "./style.css";

const Newgame = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg="2">
            <SideBar />
          </Col>
          <Col lg="10">
            <Container className="screen">
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
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Newgame;
