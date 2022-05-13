import React from 'react';
import { Col, Container, Form, Image, FormControl, Nav, Navbar, NavDropdown, Row, Dropdown, Accordion, Stack, Button } from "react-bootstrap";
import './Banar.css';
import CardImg from '../../assets/cardImg.svg'
import Group from '../../assets/Group.svg'

const Banar = () => {

    return (
        <>
            {/* <div> */}
            <Stack>
            <Image className="banar-img-align" src={Group}></Image>
                <Row className='header-content-align'>
                    <Col xs={12} md={5} className="left_align">
                        <Row>
                            <p className="heading_text">NERD Marketplace is where NERD players will buy, Sell and rent play-to-earn NFTs.  </p>
                        </Row>
                        <Row>
                            <p className="sub_text"> NERD Marketplace is where NERD players will buy and rent play-to-earn NFTs.
                                </p>
                                <p className="nft-text"> NFTs used in all Nerdgames will be available on NERD Marketplace.</p>
                        </Row>
                        <Button className="explore_btn ">Explore</Button>

                    </Col>
                    <Col xs={12} md={6} className="card_topalign">
                       
                        <Row className='cardImg_right_align'>   <Image className="playr_img" src={CardImg}></Image></Row>

                    </Col>
                </Row>
            </Stack>

            {/* </div> */}
        </>
    )
}

export default Banar
