import React from "react";
import {
  Col,
  Row,
  Dropdown,
  Badge,
  Button,
  InputGroup,
  Image,
} from "react-bootstrap";
import plus from "../../assets/post-img/plus.svg";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import "../../components/TopGames/style.css";
import Nftcard from "../../components/Nftcard";
import tempData from "../../tempData/tempData";

const BuySell = () => {
  return (
    <>
      <Row className="main-bg">
        <Col sm={12}>
          <Row>
            <Badge
              bg="dark"
              className="dropdown-bg mt-5"
              style={{ display: "flex" }}
            >
              <Col xs={6}>
                <InputGroup className="mtc gap-2">
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
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup>
                {/* <Stack direction="horizontal" gap={3}>
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
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
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
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
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
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Stack>
                </Stack> */}
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
        <Col sm={12}>
          <Row className="nftcard-div my-5 py-4 mx-2">
            {tempData.map((gameDetails, i) => (
              <Col key={i} xs={12} sm={12} md={6} lg={3}>
                <Nftcard contents={gameDetails} />
              </Col>
            ))}
            {tempData.map((gameDetails, i) => (
              <Col key={i} xs={12} sm={12} md={6} lg={3}>
                <Nftcard contents={gameDetails} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BuySell;
