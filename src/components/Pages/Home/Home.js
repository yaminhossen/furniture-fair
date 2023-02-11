import React from 'react';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import DontMiss from './DontMiss';
import NewArival from './NewArival';
import Offer from './Offer';
import ProfitState from './ProfitState';
import RandomService from './RandomProduct';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArival></NewArival>
            <Products></Products>
            <Offer></Offer>
            <RandomService></RandomService>
            <ProfitState></ProfitState>
            <DontMiss></DontMiss>
            <Reviews></Reviews>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;