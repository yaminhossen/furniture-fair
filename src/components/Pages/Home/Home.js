import React from 'react';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import DontMiss from './DontMiss';
import Extra from './Extra';
import IntervalExample from './IntervalExample';
import NewArival from './NewArival';
import Offer from './Offer';
import ProfitState from './ProfitState';
import RandomService from './RandomService';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArival></NewArival>
            <Services></Services>
            <Offer></Offer>
            <RandomService></RandomService>
            <IntervalExample></IntervalExample>
            {/* <Reviews></Reviews> */}
            <ProfitState></ProfitState>
            <DontMiss></DontMiss>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;