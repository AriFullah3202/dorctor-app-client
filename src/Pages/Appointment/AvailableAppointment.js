import React, { useState, useEffect } from 'react'
import { format } from 'date-fns/esm';
import AppointmentOption from './AppointmentOption';
import BookingModel from './BookingModel';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => {
                setAppointmentOptions(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

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
                ></BookingModel>
            }

        </section>
    )
}

export default AvailableAppointment
