import React from 'react';

import Electronics from '../../template/categoryProducts/ElectronicProducts';
import WomensClothingProducts from '../../template/categoryProducts/WomensClothingProducts.js';
import Products from '../../template/Products/Products';
import Header from './../../template/Header/Header.js';
import Footer from '../../template/Footer/Footer.js';

const Home = () => {
    return (
        <div>
            <Header />
            <Products />
            <Electronics />
            <WomensClothingProducts />
            <Footer />
        </div>
    );
};

export default Home;
