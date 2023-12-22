import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './Banner/Banner';
import UserBenefit from '../../components/UserBenefit/UserBenefit';

const Home = () => {

    return (

        <>
        <Helmet>
            <title>Home | Task Management</title>
        </Helmet>
        <Banner/>
        <UserBenefit/>
        </>
    );
};

export default Home;