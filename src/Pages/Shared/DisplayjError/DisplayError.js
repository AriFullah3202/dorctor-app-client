import React, { useContext } from 'react'
import { useRouteError } from 'react-router';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <p className="text-red-400">Something went wrong!!</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl">please <button onClick={handleLogOut}>Sign out</button></h4>
        </div>
    )
}

export default DisplayError
