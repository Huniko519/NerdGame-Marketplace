import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
    faTimes
}
    from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Form, Image, FormControl, Nav, Navbar, NavDropdown, Row, Dropdown, Accordion, Stack, Button } from "react-bootstrap";
import SubMenu from "./SubMenu";
// import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import './Sidebar.css';
import HomeImg from '../../assets/Home.svg'
import Nodification from '../../assets/notification.svg'
import SettingIcon from '../../assets/setting.svg'
import MarketplaceIcon from '../../assets/start.svg'
import Nerdgames from '../../assets/Nerdgames.svg'
import Backimage from '../../assets/bg-img.svg'
import Image1 from '../../assets/Image1.svg'
import Image2 from '../../assets/Image2.svg'
import Image3 from '../../assets/Image3.svg'
import Group from '../../assets/Group.svg'
import Hom from '../../assets/Home.svg'
import Bell from '../../assets/notification.svg'
import Setting from '../../assets/setting.svg'
import Rectangl from '../../assets/start.svg'

import Buysell from '../../assets/buysell.svg'
import Rentnft from '../../assets/rent.svg'
import Land from '../../assets/land.svg'
import Lokbox from '../../assets/lockbox.svg'
import NFT from '../../assets/nft.svg'


const SideBar = ({ isOpen = true, toggle = () => { } }) => {
    //   render() {
    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            <div className="sidebar-header">
                {/* <Button
                    variant="link"
                    onClick={toggle}
                    style={{ color: "#fff" }}
                    className="mt-4"
                >
                    <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
                </Button> */}
                {/* <h3>react-bootstrap sidebar</h3> */}
            </div>

            <Accordion >
                <Accordion.Item eventKey="0" className="menu-bg-color dropdown-pd"  >
               
                    <Accordion.Header className="dropdown-menu-text">
                    <Image className="menu-btn-align" src={MarketplaceIcon}></Image>
                    MarketPlace</Accordion.Header>
                    <Accordion.Body className="dropdown-pd">
                        <Nav.Link href="#action1">   <Row > <Col xs={2}> <Image src={Buysell} /></Col> <Col xs={10} className="dropdown-menu-text"> Buy/Sell NFT </Col>  </Row></Nav.Link>
                        <Nav.Link href="#action2"> <Row > <Col xs={2}> <Image src={Rentnft} /></Col> <Col xs={10} className="dropdown-menu-text"> Rent NFT </Col></Row></Nav.Link>
                        <Nav.Link href="#action3"> <Row> <Col xs={2}> <Image src={NFT} /></Col> <Col xs={10} className="dropdown-menu-text"> NFT  Cartridges </Col></Row></Nav.Link>
                        <Nav.Link href="#action4"> <Row > <Col xs={2}> <Image src={Lokbox} /></Col> <Col xs={10} className="dropdown-menu-text"> Lock-Box</Col></Row></Nav.Link>
                        <Nav.Link href="#action5"> <Row> <Col xs={2}> <Image src={Land} /></Col> <Col xs={10} className="dropdown-menu-text"> Lands </Col></Row></Nav.Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Nav className="flex-column pt-2">
                {/* <p className="ml-3">Heading</p> */}
                {/* <SubMenu
                    title="MarketPlace"
                    icon={faCopy}
                    items={["Link", "Link2", "Active"]}
                /> */}

                {/* <Nav.Item className="active">
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        MarketPlace
                    </Nav.Link>
                </Nav.Item> */}

                <Nav.Item>
                    <Nav.Link href="" className="menu-btn-text">
                        {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> */}
                        <Image className="menu-btn-align" src={HomeImg}></Image>
                        Home
                    </Nav.Link>
                </Nav.Item>


                <Nav.Item>
                    <Nav.Link href="" className="menu-btn-text">
                        {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> */}
                        <Image className="menu-btn-align" src={Nodification}></Image>
                        Notifications
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="" className="menu-btn-text">
                        {/* <FontAwesomeIcon icon={faImage} className="mr-2" /> */}
                        <Image className="menu-btn-align" src={SettingIcon}></Image>
                        Setting
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
// }

export default SideBar;
