import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const urL = `http://localhost:5000/bookings?email=${user.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings", user.email],
        queryFn: async () => {
            const res = await fetch(urL)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h3 className="text-3xl text-bold">Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => {
                                return <tr>
                                    <th>{index}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>blue</td>
                                    <td>blue</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyAppointment
