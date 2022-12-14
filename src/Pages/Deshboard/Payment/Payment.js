import React from 'react'
import { useLoaderData, useNavigation } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Loading from '../../Shared/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    if (navigation.state === 'loading') {
        <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl">Payment for {treatment}</h1>
            <p className="text-xl">Please pay {price} for your appointment on {appointmentDate}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    )
}

export default Payment
