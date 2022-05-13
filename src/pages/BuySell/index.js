import React from 'react';
import Header from '../../components/Header/Header';
import { Col, Container, Row, Accordion, Stack, Card, Dropdown, Form, Badge, Button, Image } from "react-bootstrap";
import Banar from '../../components/Baner/Banar';
import SideBar from '../../components/Sidebar/Sidebar';
import TopGames from '../../components/TopGames/TopGames';
import MarketPlace from '../../components/marketplace';
import Nft from '../../components/NFT Cartridges';
import plus from '../../assets/post-img/plus.svg'
import './index.css'
import { useState, useEffect } from "react";
import game1 from '../../assets/img2.svg';
import girl from '../../assets/girl.svg';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import bac from '../../assets/btn.svg'
import frame from '../../assets/frame.svg'
import eth from '../../assets/eth.svg';
// import place-a-bit-txt from '../../assets/text.svg';
// import './TopGames.css';
import { useNavigate } from 'react-router-dom'
import '../../components/TopGames/TopGames.css'
import GameIcon1 from '../../assets/gameImg1.svg';
import GameIcon2 from '../../assets/gameImg2.svg';
import tempData from '../../tempData/tempData';
import CarouselComponent from '../../components/Carousel/Carousel';
import Game from '../../components/Games';

const BuySell = () => {

    const [temp, setTemp] = useState([])
    useEffect(() => {
        setTemp(tempData);
        console.log('temp data---------------', tempData)
    })


    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col lg="2">
                        {/* <Sidebar/> */}
                        <SideBar />
                    </Col>
                    <Col lg="10" >
                        <Container>
                            <Row>

                                <Col >
                                    <Row >
                                        <Badge bg='dark' className='dropdown-bg' style={{ display: "flex" }}>

                                            <Col xs={6}>
                                                <Stack direction='horizontal' gap={3}>
                                                    <Stack>
                                                        <Dropdown>
                                                            <Dropdown.Toggle className='sortby-dropdown' style={{ display: "flex", backgroundColor: "#2E2C38", border: "none" }}>
                                                                <span className='sortby-text'>Sort by</span>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Stack>
                                                    <Stack>
                                                        <Dropdown>
                                                            <Dropdown.Toggle className='sortby-dropdown' style={{ display: "flex", backgroundColor: "#2E2C38", border: "none" }}>
                                                                <span className='sortby-text'>Categories</span>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Stack>
                                                    <Stack>
                                                        <Dropdown>
                                                            <Dropdown.Toggle className='sortby-dropdown' style={{ display: "flex", backgroundColor: "#2E2C38", border: "none" }}>
                                                                <span className='sortby-text'>Price</span>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Stack>
                                                </Stack>

                                            </Col>
                                            <Col xs={6} className="add-nft-btn">
                                                <Button className='nft-btn' style={{ backgroundColor: "#2F2C3D", border: "none", display: "flex" }}><Image className='plus' src={plus} /> <span className='nft-text'>add your NFT</span></Button>
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
    )
}

export default BuySell