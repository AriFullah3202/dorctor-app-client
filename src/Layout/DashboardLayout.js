import React from 'react'
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const DashboardLayout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="deshboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="deshboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">Deshboard</Link></li>
                        <li><Link to="/dashboard/AllUser">AllUser</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
