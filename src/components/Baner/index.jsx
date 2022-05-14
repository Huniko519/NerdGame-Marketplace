import React from "react";
import { Col, Image, Row, Stack, Button, Container } from "react-bootstrap";
import "./style.css";
import CardImg from "../../assets/cardImg.svg";
import Group from "../../assets/Group.svg";

const Banar = () => {
  return (
    <>
      <header className="mheader">
        <div className="mheader-info px-4">
          <Row>
            <Col xs={12} md={6}>
              <div>
                <p className="heading_text">
                  NERD Marketplace is where NERD players will buy, Sell and rent
                  play-to-earn NFTs.{" "}
                </p>
              </div>
              <div>
                <p className="sub_text">
                  {" "}
                  NERD Marketplace is where NERD players will buy and rent
                  play-to-earn NFTs.
                </p>
                <p className="sub_text">
                  {" "}
                  NFTs used in all Nerdgames will be available on NERD
                  Marketplace.
                </p>
              </div>
              <Button className="explore_btn ">Explore</Button>
            </Col>
            <Col xs={12} md={6} className="card_topalign">
              <div className="cardImg_right_align">
                {" "}
                <Image className="playr_img" src={CardImg}></Image>
              </div>
            </Col>
          </Row>
        </div>
      </header>
      {/* <div>
        <Stack>
          <Image className="banar-img-align" src={Group}></Image>
          <Row className="header-content-align">
            <Col xs={12} md={6} className="left_align">
              <Row>
                <p className="heading_text">
                  NERD Marketplace is where NERD players will buy, Sell and rent
                  play-to-earn NFTs.{" "}
                </p>
              </Row>
              <Row>
                <p className="sub_text">
                  {" "}
                  NERD Marketplace is where NERD players will buy and rent
                  play-to-earn NFTs.
                </p>
                <p className="nft-text">
                  {" "}
                  NFTs used in all Nerdgames will be available on NERD
                  Marketplace.
                </p>
              </Row>
              <Button className="explore_btn ">Explore</Button>
            </Col>
            <Col xs={12} md={6} className="card_topalign">
              <div className="cardImg_right_align">
                {" "}
                <Image className="playr_img" src={CardImg}></Image>
              </div>
            </Col>
          </Row>
        </Stack>
      </div> */}
    </>
  );
};

export default Banar;
