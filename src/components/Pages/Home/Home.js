import React from 'react';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import DontMiss from './DontMiss';
import NewArival from './NewArival';
import Offer from './Offer';
import ProfitState from './ProfitState';
import RandomService from './RandomService';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArival></NewArival>
            {/* <Services></Services> */}
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