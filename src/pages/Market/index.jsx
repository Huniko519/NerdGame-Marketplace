import React from "react";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/Sidebar";
import TopGames from "../../components/TopGames";
import MarketPlace from "../../components/Marketplace";

const Market = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg="2">
            {/* <Sidebar/> */}
            <SideBar />
          </Col>
          <Col lg="10">
            <MarketPlace />
            <TopGames />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Market;
