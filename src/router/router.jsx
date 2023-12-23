import { createBrowserRouter } from 'react-router-dom';
import  Home from '../features/home/Home';
import  Dashboard from '../features/dashboard/Dashboard';
import Layout from '../features/Layout';
import Login from '../features/login/views/Login/LoginView';
import Customers from '../features/customers/Customers';
import Menus from '../features/menus/Menus';
import Orders from '../features/orders/Orders';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        index: true,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Layout />,
        /**
         * To implement a route in the menu item must be added here
         */
       children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: '/dashboard/customers',
                element: <Customers />
            },
            {
                path: '/dashboard/menus',
                element: <Menus />
            },
            {
                path: '/dashboard/orders',
                element: <Orders />
            },
        ]
    }
]);