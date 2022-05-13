import React from "react";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/Sidebar";
import TopGames from "../../components/TopGames";
import Nft from "../../components/Cartridges";

const Cartridges = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg="2">
            <SideBar />
          </Col>
          <Col lg="10">
            <Nft />
            <TopGames />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cartridges;
