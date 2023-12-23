import { createBrowserRouter } from 'react-router-dom';
import  Home from '../features/home/Home';
import  Dashboard from '../features/dashboard/Dashboard';
import Login from '../features/login/views/Login/LoginView';

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
        element: <Dashboard />,
        // Implement children for dashboard for all side bar menu item
       /* children: [
            {
                path: '/foo',
                element: <Foo />
            }
        ]*/
    }
]);