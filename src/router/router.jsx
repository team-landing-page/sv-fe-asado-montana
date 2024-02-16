import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../features/home/Home';
import Dashboard from '../features/dashboard/Dashboard';
import Layout from '../features/Layout';
import Login from '../features/login/views/Login/LoginView';
import Customers from '../features/customers/Customers';
import Menus from '../features/menus/Menus';
import Orders from '../features/orders/Orders';

//testing
import FirestoreTesting from '../tests/components/FirestoreTesting';

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
                element: <PrivateRoute component={Dashboard} />
            },
            {
                path: '/dashboard/customers',
                element: <PrivateRoute component={Customers} />
            },
            {
                path: '/dashboard/menus',
                element: <PrivateRoute component={Menus} />
            },
            {
                path: '/dashboard/orders',
                element: <PrivateRoute component={Orders} />
            },
        ]
    },
    {
        path: '/firestore',
        element: <PrivateRoute component={FirestoreTesting} />

    }
]);
