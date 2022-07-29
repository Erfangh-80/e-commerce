import React from 'react';

import Electronics from '../categoryProducts/ElectronicProducts';
import WomensClothingProducts from '../categoryProducts/WomensClothingProducts';
import Products from '../Products/Products';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

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
