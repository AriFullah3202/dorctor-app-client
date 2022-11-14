import React from 'react'
import { format } from 'date-fns/esm';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <div>
            <h1 className="text-center text-secondary text-bold">this is Appointmennt {format(selectedDate, 'PP')}</h1>
        </div>
    )
}

export default AvailableAppointment
