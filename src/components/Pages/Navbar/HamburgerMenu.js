import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  background-color: var(--dark-color);
  top: 65px;
  left: 0;
  padding: 1rem;
  width: 300px;
  height: calc(100vh - 97px);
  z-index: 10;

  ul {
    padding: 0px;
  }

  li {
    padding: 1.5rem 0.5rem;
    border-radius: 5px;
  }

  li:hover {
    background-color: rgb(197, 89, 50);
  }

  li:last-child {
    background-color: rgb(170, 89, 50);
  }

  a {
    color: var(--white-color);
  }
`;

const HamburgerMenu = (props) => {
  const clickHandler = () => {
    props.setOpen(!props.open);
  };

  return (
    <div>
      <MenuDiv>
        <ul>
          <li>
            <Link onClick={clickHandler} to="/homepage">
              Home
            </Link>
          </li>
          <li>
            <a onClick={clickHandler} href="/">Products</a>
          </li>
          <li>
            <a onClick={clickHandler} href="/">Blogs</a>
          </li>
          <li>
            <a onClick={clickHandler} href="/">About us</a>
          </li>
          <li>
            <Link onClick={clickHandler} to="/signup">Sign-up</Link>
          </li>
        </ul>
      </MenuDiv>
    </div>
  );
};

export default HamburgerMenu;
