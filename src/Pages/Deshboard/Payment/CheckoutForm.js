import React, { useState, useEffect } from 'react'
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js'



const CheckoutForm = ({ booking }) => {
    const [clientSecret, setClientSecret] = useState("")
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { price, patient, email } = booking



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        // jodi stripe and elements na thake thahole samne jabe na

        if (!stripe || !elements) {
            return;
        }
        //cardElement ke find korlam
        const card = elements.getElement(CardElement);
        console.log(card)

        // jodi card null hoy samne jabe na
        if (card == null) {
            console.log(card)
            console.log('card is null')
            return;
        }
        //ekhane PaymentMethod create korlam 
        //okhan theke amra pacchi
        //error , paymentMethod
        //ekhane card information and type createPaymentMethod er moddhe patay dilam 
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        console.log(paymentMethod)
        //jodi error thake state er moddhe set korchi
        if (error) {
            console.log("error is ", error)
            setCardError(error.message)
        }
        else {
            console.log('your payment Method is ', paymentMethod)
            // jodi  error na hoy thahole empty set korbo
            setCardError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-sm mt-4 btn-primary"
                    type="submit"
                    disabled={!stripe || clientSecret}>
                    Pay
      </button>
            </form>
            <p className="text-red-500">{cardError}</p>
        </>
    )
}

export default CheckoutForm
