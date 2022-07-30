import React from 'react';

import Styles from "../../../../assets/styles/ContentsFooter.module.css"

const Contents = () => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.header}>Constents</h1>
            <ul className={Styles.items}>
                <li><a href='/#'>Products</a></li>
                <li><a href='/#'>About Us</a></li>
                <li><a href='/#'>Sign Up</a></li>
                <li><a href='/#'>shoping card</a></li>
            </ul>
        </div>
    );
};

export default Contents;