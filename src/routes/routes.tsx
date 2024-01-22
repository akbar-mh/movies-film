import Admin from "../pages/Dashboard/Admin";
import Home from "../pages/home/Home";
import Login from "../pages/logIn/Login";
import SignUp from "../pages/signUp/SignUp";

export const mainRoutes = [
    {
        path: '/',
        element: <Home />,
        title: 'Main',
    },
    {
        path: '/login',
        element: <Login />,
        title: 'Login',
    },
    {
        path: '/sign-up',
        element: <SignUp />,
        title: 'Signup',
    },
];

export const adminRoutes = [
    {
        path: '/dashboard',
        element: <Admin />,
        title: 'Dashboard',
    },

];
