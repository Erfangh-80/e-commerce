import React from 'react';
import { Link } from 'react-router-dom';
// styles
import Styles from "../../../../assets/styles/ContentsFooter.module.css"

const Contents = () => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.header}>Constents</h1>
            <ul className={Styles.items}>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
        </div>
    );
};

export default Contents;