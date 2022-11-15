import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment";
import SignUp from "../../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Deshboard from "../../Pages/Deshboard/Deshboard/Deshboard";
import About from "../../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/appintment',
                element: <Appointment></Appointment>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Deshboard></Deshboard></PrivateRoute>
            }
            ,
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])