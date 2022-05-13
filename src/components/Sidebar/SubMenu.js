import React, { useState } from "react";
import { Accordion, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const SubMenu = (props) => {  
    const [collapsed,setCollapsed]=useState(false)
    const { icon, title, items } = props;

    return (
      <Nav.Item className={classNames({ open: collapsed })}>
        <Accordion>
          <Accordion
            as={Nav.Link}
            variant="link"
            eventKey="0"
            onClick={()=>setCollapsed(!collapsed)}
          >
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {title}
            <FontAwesomeIcon
              icon={collapsed ? faCaretDown : faCaretUp}
              className="float-right"
            />
          </Accordion>

          <Accordion.Collapse eventKey="0">
            <nav className="nav flex-column">
              {items.map(item => (
                <a
                  className={`nav-link nav-item pl-5 ${
                    item === "Active" ? "active" : ""
                  } `}
                  href="/"
                  key={item}
                >
                  {item}
                </a>
              ))}
            </nav>
          </Accordion.Collapse>
        </Accordion>
      </Nav.Item>
    );
  }

export default SubMenu;
