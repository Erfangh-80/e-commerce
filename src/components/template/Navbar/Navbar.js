import React, { useState } from "react";
import { Link } from "react-router-dom"

import Styled from "styled-components";

import HamburgerMenu from "./HamburgerMenu.js";
import ItemMenu from "./ItemMenu.js";

import Styles from "../../../assets/styles/Navbar.module.css";
import ShopIcon from "../../../assets/icons/shop.svg";
import UserIcon from "../../../assets/icons/user.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import CloseIcon from "../../../assets/icons/close.svg";

const DropDown = Styled.div`
    color: var(--white-color);
    background-color: var(--dark-color);
    position: absolute;
    top: 73px;
    right: 10px;
    width:130px;
    height:92px;
    border: 2px solid var(--dark-color);
    border-radius: 5px;
`;

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  window.addEventListener("resize", () => {
    if(window.innerWidth <= 768) {
      setHamburgerMenu(false);
      setDropdown(false);
    }
  })

  return (
    <div id={Styles.Navbar}>
      <nav className={Styles.container}>
        <img
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
          className={Styles.bars}
          src={hamburgerMenu ? CloseIcon : MenuIcon}
          alt="menu icon"
        />

        <ItemMenu setDropDown={setDropdown} listItem={Styles.listItem} Item={Styles.item} />
        
        {hamburgerMenu && <HamburgerMenu open={hamburgerMenu} setOpen={setHamburgerMenu} />}
        
        <ul className={Styles.items}>
          <li className={Styles.item}>
            <img src={ShopIcon} alt="shop icon" />
          </li>
          <li onClick={() => setDropdown(!dropdown)} className={Styles.item}>
            <img className={Styles.user} src={UserIcon} alt="user icon" />
          </li>
          {dropdown && (
            <DropDown>
              <div className={Styles.login}>
                <Link onClick={() => setDropdown(false)} to="/login">Login</Link>
              </div>
              <div className={Styles.register}>
                <Link onClick={() => setDropdown(false)} to="/signup">Sign Up</Link>
              </div>
            </DropDown>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
