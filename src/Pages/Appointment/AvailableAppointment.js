import React, { useState, useEffect } from 'react'
import { format } from 'date-fns/esm';
import AppointmentOption from './AppointmentOption';
import BookingModel from './BookingModel';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    const { data: appointmentOptions = [], refetch ,isLoading } = useQuery({  //useQuery 2ta parameter nibe 

        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    if(isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/appointmentOptions`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAppointmentOptions(data)
    //             console.log(data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <section className="mt-15">
            <h1 className="text-center text-secondary text-bold">this is Appointmennt {format(selectedDate, 'PP')}</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option =>
                        <AppointmentOption key={option._id}
                            option={option} setTreatment={setTreatment}
                        ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModel
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModel>
            }

        </section>
    )
}

export default AvailableAppointment
