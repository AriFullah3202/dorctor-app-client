import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment";
import SignUp from "../../Pages/Login/SignUp";

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
            }
        ]
    }
])