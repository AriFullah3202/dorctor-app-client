import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/AuthProvider';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const urL = `https://doctor-portal-arif.vercel.app/bookings?email=${user.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings", user.email],
        queryFn: async () => {
            const res = await fetch(urL, {

                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => {
                                return <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-pricmary">Pay</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className="text-primary">Paid</span>
                                        }
                                    </td>
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
