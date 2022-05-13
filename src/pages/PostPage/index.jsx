import React from "react";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/Sidebar";
import Post from "../../components/Post";

const PostPage = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg="2">
            <SideBar />
          </Col>
          <Col lg="10">
            <Post />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostPage;
