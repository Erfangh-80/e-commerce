import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = (props) => {
  const { listItem, Item } = props;

  return (
    <ul className={listItem}>
      <li className={Item}>
        <Link to="/homepage">Home</Link>
      </li>
      <li className={Item}>
        <a href="/">Products</a>
      </li>
      <li className={Item}>
        <a href="/">Blogs</a>
      </li>
      <li className={Item}>
        <a href="/">About us</a>
      </li>
    </ul>
  );
};

export default ItemMenu;
