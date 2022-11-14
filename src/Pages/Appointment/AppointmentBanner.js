import React, { useState } from 'react'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';



const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}>
                        </DayPicker>
                        <p>You have selected date : {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppointmentBanner
