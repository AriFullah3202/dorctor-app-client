import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment";
import SignUp from "../../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import About from "../../Pages/About/About";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Deshboard/MyAppointment/MyAppointment";
import AllUser from "../../Pages/Deshboard/Deshboard/AllUser";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../../Pages/Deshboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Deshboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Deshboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayjError/DisplayError";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: "/about",
                element: <About></About>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: async ({ params }) => {
                    return fetch(`https://doctor-portal-arif.vercel.app/booking/${params.id}`);
                }
            }
        ]

    }
])