import React from "react";
import game from "../../assets/games.svg";
import {
  Container,
  Row,
  Col,
  Stack,
  InputGroup,
  Image,
  Card,
  Table,
  Dropdown,
} from "react-bootstrap";
import hear from "../../assets/hear.png";
import girl from "../../assets/girl.svg";
import Button from "react-bootstrap/Button";
import eth from "../../assets/eth.svg";
import trade from "../../assets/trade.svg";
import wallet from "../../assets/wallet.svg";
import rend from "../../assets/ren.svg";
import arrow from "../../assets/Arrow 1.svg";
import { useNavigate } from "react-router-dom";
import TopGames from "../TopGames";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

import "./style.css";

const MarketPlace = () => {
  const navigate = useNavigate();
  const app = () => {
    navigate("/");
  };
  return (
    <Container className="market main-bg">
      <Button
        className="goback-btn"
        onClick={app}
        style={{ backgroundColor: "#33313E", border: "none" }}
      >
        <Image src={arrow} /> <span className="btn-text">Go Back</span>
      </Button>
      <Row>
        <Col>
          <Row>
            <Col md={11}>
              <Row className="game-detail">
                <Col md={5} xs={12}>
                  <Image className="game-img" src={game} />
                </Col>
                <Col md={7} xs={12}>
                  <Col direction="horizontal" className="title-row">
                    <p className="heading">Origin and Evolution#4477</p>
                    <Image className="heart" src={hear} />
                  </Col>
                  <Row>
                    <p className="user">Owned by</p>
                    <Col md={7} xs={12}>
                      <Col className="user-data">
                        <Stack
                          className="profile"
                          direction="horizontal"
                          gap={3}
                        >
                          <Image className="girl-img" src={girl} />
                          <p className="user-name">@miriamammi</p>
                        </Stack>
                      </Col>
                      <Stack>
                        <p className="detail mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiumdod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud voluptate velit.
                        </p>
                      </Stack>
                    </Col>
                    <Col md={5} xs={12} className="price-card">
                      <Card
                        className="card-market"
                        style={{
                          backgroundColor: "#33313E",
                          borderRadius: "18px",
                          width: "100%",
                        }}
                      >
                        <Stack className="price-details">
                          <Stack direction="horizontal">
                            <Col className="curency-col" xs={8}>
                              <p className="price">Current Price</p>
                            </Col>
                            <Col className="trade-col" xs={4}>
                              <Image className="trade" src={trade} />
                            </Col>
                          </Stack>
                          <Image className="ethereum-img" src={eth} />
                          <p className="eth-price">0.99 ETH</p>
                        </Stack>
                        <Row>
                          <Col xs={4}>
                            <Stack>
                              <p className="number">19</p>
                            </Stack>
                            <Stack>
                              <p className="time">hour</p>
                            </Stack>
                          </Col>
                          <Col xs={4}>
                            <Stack>
                              <p className="number">24</p>
                            </Stack>
                            <Stack>
                              <p className="time">mins</p>
                            </Stack>
                          </Col>
                          <Col xs={4}>
                            <Stack>
                              <p className="number">19</p>
                            </Stack>
                            <Stack>
                              <p className="time">sec</p>
                            </Stack>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Stack className="buy-btns" direction="horizontal" gap={2}>
                <Button
                  className="wallet-btn"
                  style={{ backgroundColor: "#F9AF3E", border: "none" }}
                >
                  <Image className="wallet" src={wallet} />{" "}
                  <span className="wallet-text">Buy now</span>
                </Button>
                <Button
                  className="rend-btn"
                  style={{
                    backgroundColor: "#33313E",
                    border: "none",
                    display: "flex",
                  }}
                >
                  <Image className="rend" src={rend} />{" "}
                  <span className="wallet-text"> Reant NFT</span>
                </Button>
              </Stack>
            </Col>
          </Row>
          <Col className="dropdowns" md={12}>
            <Row>
              <Col md={6}>
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropdown-basic"
                    style={{
                      display: "flex",
                      backgroundColor: "#2E2C38",
                      border: "none",
                    }}
                  >
                    <span className="drop-text">Detail</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={6}>
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropdown-basic"
                    style={{
                      display: "flex",
                      backgroundColor: "#2E2C38",
                      border: "none",
                    }}
                  >
                    <span className="drop-text">Price history</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="details-div w-full">
                  <Row>
                    <Col>Contract Address</Col>
                    <Col className="text-right">0x19b8...b5e4</Col>
                  </Row>
                  <Row>
                    <Col>Token ID</Col>
                    <Col className="text-right">8558</Col>
                  </Row>
                  <Row>
                    <Col>Token Standard</Col>
                    <Col className="text-right">ERC-721</Col>
                  </Row>
                  <Row>
                    <Col>Blockchain</Col>
                    <Col className="text-right">Ethereum</Col>
                  </Row>
                  <Row>
                    <Col>Creator Fees</Col>
                    <Col className="text-right">6%</Col>
                  </Row>
                </div>
              </Col>
              <Col md={6}>
                <div className="chart-div w-full">
                  <XYPlot width={250} height={190}>
                    <HorizontalGridLines />
                    <LineSeries
                      data={[
                        { x: 1, y: 10 },
                        { x: 2, y: 5 },
                        { x: 3, y: 15 },
                      ]}
                    />
                    <XAxis />
                    <YAxis />
                  </XYPlot>
                </div>
              </Col>
            </Row>
            <Col md={12}>
              <Dropdown>
                <Dropdown.Toggle
                  className="dropdown-basic"
                  style={{
                    display: "flex",
                    backgroundColor: "#2E2C38",
                    border: "none",
                  }}
                >
                  <span className="drop-text">Stats & preoperties</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Row>
              <Col md={12}>
                <div className="details-div w-full">
                  <Row>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <InputGroup className="mb-3">
                        <Button variant="secondary" className="f-btn">
                          <span className="font-weight-bold">God</span>
                        </Button>
                        <Button variant="secondary" className="s-btn">
                          Magic
                        </Button>
                      </InputGroup>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Col md={12}>
              <Dropdown>
                <Dropdown.Toggle
                  className="dropdown-basic"
                  style={{
                    display: "flex",
                    backgroundColor: "#2E2C38",
                    border: "none",
                  }}
                >
                  <span className="drop-text">Item Activity</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Row>
              <Col md={12}>
                <div className="details-div w-full">
                  <Table responsive striped hover variant="dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <th key={index}>Table heading</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>2</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>3</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <TopGames />
    </Container>
  );
};

export default MarketPlace;
