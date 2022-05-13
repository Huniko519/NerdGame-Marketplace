import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Header from "./components/Header";
import Market from "./pages/Market";
import PostPage from "./pages/PostPage";
import Newgame from "./pages/Newgame";
import Cartridges from "./pages/Cartridges";
import LockBox from "./pages/Lock-Box";
import BuySell from "./pages/BuySell";
import SideBar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Row>
            <Col lg="2">
              <SideBar />
            </Col>
            <Col lg="10">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/1" element={<Market />}></Route>
                <Route exact path="/2" element={<PostPage />}></Route>
                <Route exact path="/3" element={<Newgame />}></Route>
                <Route exact path="/4" element={<Cartridges />}></Route>
                <Route exact path="/5" element={<LockBox />}></Route>
                <Route exact path="/6" element={<BuySell />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
