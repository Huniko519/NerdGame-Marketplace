import React from "react";
import { Image } from "react-bootstrap";
import classNames from "classnames";
import "./style.css";
import HomeImg from "../../assets/Home.svg";
import Nodification from "../../assets/notification.svg";
import SettingIcon from "../../assets/setting.svg";
import MarketplaceIcon from "../../assets/start.svg";
import Buysell from "../../assets/buysell.svg";
import Rentnft from "../../assets/rent.svg";
import Land from "../../assets/land.svg";
import Lokbox from "../../assets/lockbox.svg";
import NFT from "../../assets/nft.svg";
import Dashboard from "../../assets/dashboard.svg";
import Saved from "../../assets/saved.svg";
import Collection from "../../assets/collection.svg";
import History from "../../assets/history.svg";
import Wallet from "../../assets/homewallet.svg";
import { Link } from "react-router-dom";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = ({ isOpen = true, toggle = () => {} }) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <ProSidebar width={"100%"}>
        <Menu iconShape="round">
          <SubMenu
            title={<span className="submenu">MarketPlace</span>}
            icon={
              <Image className="menu-btn-align" src={MarketplaceIcon}></Image>
            }
          >
            <MenuItem
              className="menuitem"
              icon={<Image src={Buysell} className="menuicon" />}
              active={true}
            >
              <Link to="/">Buy/Sell NFT</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Rentnft} className="menuicon" />}
            >
              <Link to="/">Rent NFT</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={NFT} className="menuicon" />}
            >
              <Link to="/">NFT Cartridges</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Lokbox} className="menuicon" />}
            >
              <Link to="/">Lock-Box</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Land} className="menuicon" />}
            >
              <Link to="/">Lands</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title={<span className="submenu">Home</span>}
            icon={<Image className="menu-btn-align" src={HomeImg}></Image>}
          >
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/">Dashboard</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Saved} className="menuicon" />}
            >
              <Link to="/">Saved</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Collection} className="menuicon" />}
            >
              <Link to="/">My Collection</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Wallet} className="menuicon" />}
            >
              <Link to="/">Wallet</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={History} className="menuicon" />}
            >
              <Link to="/">History</Link>
            </MenuItem>
          </SubMenu>
          <MenuItem
            className="menuitem"
            icon={<Image src={Nodification} className="menuicon" />}
          >
            <Link to="/">
              <span className="submenu">Nodifications</span>
            </Link>
          </MenuItem>
          <MenuItem
            className="menuitem"
            icon={<Image src={SettingIcon} className="menuicon" />}
          >
            <Link to="/">
              <span className="submenu">Settings</span>
            </Link>
          </MenuItem>
          <SubMenu
            title={<span className="submenu">Design-Vs</span>}
            icon={<Image className="menu-btn-align" src={HomeImg}></Image>}
            defaultOpen={true}
          >
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/">Desktop-1</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/6">Desktop-11, 12</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/1">Desktop-3, 4, 6</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/4">Desktop-13</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/4">* Desktop-7</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/2">Desktop-8</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/5">Desktop-9</Link>
            </MenuItem>
            <MenuItem
              className="menuitem"
              icon={<Image src={Dashboard} className="menuicon" />}
            >
              <Link to="/3">Desktop-10</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default SideBar;
