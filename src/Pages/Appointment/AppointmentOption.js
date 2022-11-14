import React from 'react'

const AppointmentOption = ({ option, setTreatment }) => {

    const { name, slots } = option;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="Booking-model"
                        className="btn btn-primary"
                        onClick={() => setTreatment(option)}
                    > Book Appointment</label>
                </div>
            </div>
        </div>
    )
}

export default AppointmentOption
