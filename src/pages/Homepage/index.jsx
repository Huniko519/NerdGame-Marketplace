import React from "react";
import { Container } from "react-bootstrap";
import Baner from "../../components/Baner";
import TopGames from "../../components/TopGames";

const Home = () => {
  return (
    <>
      <Baner />
      <Container>
        <TopGames />
      </Container>
    </>
  );
};

export default Home;
