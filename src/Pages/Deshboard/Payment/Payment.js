import React from 'react'
import { useLoaderData } from 'react-router';

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div>
            <h1 className="text-3xl">Payment for {treatment}</h1>
            <p className="text-xl">Please pay {price} for your appointment on {appointmentDate}</p>
        </div>
    )
}

export default Payment
