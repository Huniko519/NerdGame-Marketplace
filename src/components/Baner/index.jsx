import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./style.css";
import CardImg from "../../assets/cardImg.svg";
import Grdbtn from "../Grdbtn";

const Banar = () => {
  return (
    <>
      <header className="header">
        <div className="header-info px-4">
          <Row>
            <Col xs={12} md={6} className="text-left">
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
              <Grdbtn content="Explore" />
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
    </>
  );
};

export default Banar;
