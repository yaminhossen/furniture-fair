import React from 'react';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import DontMiss from './DontMiss';
import NewArival from './NewArival';
import Offer from './Offer';
import ProfitState from './ProfitState';
import RandomService from './RandomService';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArival></NewArival>
            <Services></Services>
            <Offer></Offer>
            <RandomService></RandomService>
            <ProfitState></ProfitState>
            <DontMiss></DontMiss>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;