import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = (props) => {
  const { listItem, Item, setDropDown } = props;

  return (
    <ul className={listItem}>
      <li className={Item}>
        <Link onClick={() => {setDropDown(false)}} to="/homepage">Home</Link>
      </li>
      <li className={Item}>
        <Link onClick={() => {setDropDown(false)}} to="/products">Products</Link>
      </li>
    </ul>
  );
};

export default ItemMenu;
