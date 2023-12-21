import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;