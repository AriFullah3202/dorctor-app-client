import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment";
import SignUp from "../../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import About from "../../Pages/About/About";
import DashboardLayout from "../../Layout/DashboardLayout";
import Deshboard from "../../Pages/Deshboard/Deshboard/Deshboard";
import MyAppointment from "../../Pages/Deshboard/MyAppointment/MyAppointment";
import AllUser from "../../Pages/Deshboard/Deshboard/AllUser";

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
            ,
            {
                path: "/about",
                element: <About></About>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            }
        ]

    }
])