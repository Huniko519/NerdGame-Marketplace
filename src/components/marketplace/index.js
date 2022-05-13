import React from 'react'
import game from '../../assets/games.svg'
import { Container, Row, Col, Stack, Image, Card, Dropdown } from 'react-bootstrap'
import hear from "../../assets/hear.png"
import girl from '../../assets/girl.svg'
import Button from 'react-bootstrap/Button';
import eth from '../../assets/eth.svg'
import trade from '../../assets/trade.svg'
import wallet from '../../assets/wallet.svg'
import rend from '../../assets/ren.svg'
import arrow from '../../assets/Arrow 1.svg'
import { useNavigate } from 'react-router-dom'

import './index.css';


const MarketPlace = () => {
    const navigate = useNavigate()
    const app = () => {
        navigate('/')
    }
    return (
        <Container className='market'>
            <Button className='goback-btn' onClick={app} style={{ backgroundColor: "#33313E", border: "none" }}><Image src={arrow} /> <span className='btn-text'>Go Back</span></Button>
            <Row>
                <Col>
                    <Row>
                        <Col md={11}>
                            <Row className='game-detail'>
                                <Col md={5} xs={12}>
                                    <Image className='game-img' src={game} />
                                </Col>
                                <Col md={7} xs={12}>
                                    <Col direction='horizontal' className='title-row'>
                                        <p className='heading'>Origin and Evolution#4477</p>
                                        <Image className='heart' src={hear} />
                                    </Col>
                                    <Row>
                                        <p className='user'>Owned by</p>
                                        <Col md={7} xs={12}>
                                            <Col className='user-data'>
                                                <Stack className='profile' direction='horizontal' gap={3}>
                                                    <Image className='girl-img' src={girl} />
                                                    <p className='user-name'>@miriamammi</p>
                                                </Stack>
                                            </Col>
                                            <Stack>
                                                <p className='detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud voluptate velit.</p>
                                            </Stack>
                                        </Col>
                                        <Col md={5} xs={12} className="price-card">
                                            <Card className='card-market' style={{ backgroundColor: "#33313E", borderRadius: "18px" }}>
                                                <Stack className='price-details'>
                                                    <Stack direction='horizontal'>
                                                        <Col className='curency-col' xs={8}>
                                                            <p className='price'>Current Price</p>
                                                        </Col>
                                                        <Col className='trade-col' xs={4}>
                                                            <Image className='trade' src={trade} />
                                                        </Col>
                                                    </Stack>
                                                    <Image className='ethereum' src={eth} />
                                                    <p className='eth-price'>0.99 ETH</p>
                                                </Stack>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Stack>
                                                            <p className='number'>19</p>
                                                        </Stack>
                                                        <Stack>
                                                            <p className='time'>hour</p>
                                                        </Stack>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Stack>
                                                            <p className='number'>24</p>
                                                        </Stack>
                                                        <Stack>
                                                            <p className='time'>mins</p>
                                                        </Stack>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <Stack>
                                                            <p className='number'>19</p>
                                                        </Stack>
                                                        <Stack>
                                                            <p className='time'>sec</p>
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
                            <Stack className='buy-btns' direction='horizontal' gap={5}>
                                <Button className='wallet-btn' style={{ backgroundColor: "#F9AF3E", border: "none", }}><Image className='wallet' src={wallet} /> <span className='wallet-text'>Buy now</span></Button>
                                <Button className='rend-btn' style={{ backgroundColor: "#33313E", border: "none", display: "flex" }}><Image className='rend' src={rend} /> <span className='wallet-text'>Reant NFT</span></Button>
                            </Stack>
                        </Col>
                    </Row>
                    <Col className='dropdowns' md={12}>
                        <Row>
                            <Col md={6}>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropdown-basic" style={{ display: "flex", backgroundColor: "#2E2C38", border: "none" }}>
                                        <span className='drop-text'>Detail</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col md={6}>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropdown-basic" style={{ display: "flex", backgroundColor: "#2E2C38", border: "none" }}>
                                        <span className='drop-text'>Price history</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Col md={12}>
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-basic" style={{ display: "flex", backgroundColor: "#2E2C38", border: "none" }}>
                                    <span className='drop-text'>Stats & preoperties</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={12}>
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-basic" style={{ display: "flex", backgroundColor: "#2E2C38", border: "none" }}>
                                    <span className='drop-text'>Item Activity</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default MarketPlace