import React from 'react';
import { Helmet } from 'react-helmet';


const ErrorPage = () => {
    return (
        <>
        <Helmet>
            <title>404 Not Found | Task Management</title>
        </Helmet>
        <div className='flex justify-center items-center'>
            <img src='../img/404.gif' alt="" />
        </div>
        <div>
        <p className='text-4xl font-semibold text-center'>This page doesn't exist.</p> 
        </div>
        </>
    );
};

export default ErrorPage;