import React from 'react';
import Header from '../../Shared/Header/Header';
import HomeBanner from '../Home Banner/HomeBanner';
import HomeProduct from '../Home Product/HomeProduct';
import Reviews from '../Reviews/Reviews';
import Toys from '../Toys/Toys';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeBanner />
            <Toys />
            <HomeProduct />
            <Reviews />
        </div >
    );
};

export default Home;