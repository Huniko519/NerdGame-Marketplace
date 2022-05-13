import React from "react";
import Header from "../../components/Header";
import {
  Col,
  Container,
  Row,
  Stack,
  Dropdown,
  Badge,
  Button,
  Image,
} from "react-bootstrap";
import SideBar from "../../components/Sidebar";
import TopGames from "../../components/TopGames";
import plus from "../../assets/post-img/plus.svg";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import "../../components/TopGames/style.css";

const BuySell = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg="2">
            {/* <Sidebar/> */}
            <SideBar />
          </Col>
          <Col lg="10">
            <Container>
              <Row>
                <Col>
                  <Row>
                    <Badge
                      bg="dark"
                      className="dropdown-bg"
                      style={{ display: "flex" }}
                    >
                      <Col xs={6}>
                        <Stack direction="horizontal" gap={3}>
                          <Stack>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="sortby-dropdown"
                                style={{
                                  display: "flex",
                                  backgroundColor: "#2E2C38",
                                  border: "none",
                                }}
                              >
                                <span className="sortby-text">Sort by</span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Stack>
                          <Stack>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="sortby-dropdown"
                                style={{
                                  display: "flex",
                                  backgroundColor: "#2E2C38",
                                  border: "none",
                                }}
                              >
                                <span className="sortby-text">Categories</span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Stack>
                          <Stack>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="sortby-dropdown"
                                style={{
                                  display: "flex",
                                  backgroundColor: "#2E2C38",
                                  border: "none",
                                }}
                              >
                                <span className="sortby-text">Price</span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Stack>
                        </Stack>
                      </Col>
                      <Col xs={6} className="add-nft-btn">
                        <Button
                          className="nft-btn"
                          style={{
                            backgroundColor: "#2F2C3D",
                            border: "none",
                            display: "flex",
                          }}
                        >
                          <Image className="plus" src={plus} />{" "}
                          <span className="nft-text">add your NFT</span>
                        </Button>
                      </Col>
                    </Badge>
                  </Row>
                </Col>
                <Col>
                  <TopGames />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BuySell;
