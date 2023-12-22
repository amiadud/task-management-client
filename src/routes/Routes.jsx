import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import Dashboard from '../layout/Dashboard';
import TaskForm from '../pages/Dashboard/TaskForm/TaskForm';
import TaskManagement from '../pages/Dashboard/TaskManagement/TaskManagement';
import Mytask from '../pages/Dashboard/MyTask/Mytask';
import PrivateRoutes from './PrivateRoutes';
import UpdateTask from '../pages/Dashboard/UpdateTask/UpdateTask';

const Routes = createBrowserRouter ([
    {
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]

    },
    {
        element:<Dashboard/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path:'/dashboard/',
                element:<PrivateRoutes><TaskManagement/></PrivateRoutes>
            },
            {
                path: "/dashboard/add-task/",
                element:<PrivateRoutes><TaskForm/></PrivateRoutes>
            },
            {
                path: "/dashboard/my-added-task/",
                element:<PrivateRoutes><Mytask/></PrivateRoutes>
            },
            {
                path: "/dashboard/update-task/:id",
                element:<PrivateRoutes><UpdateTask/></PrivateRoutes>,
                loader:({params})=> fetch(`http://localhost:5000/task-details/${params?.id}`)
            },
        ]
    }
])

export default Routes;