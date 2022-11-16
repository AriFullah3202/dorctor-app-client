import React, { useContext } from 'react'
import { format } from 'date-fns';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';


const BookingModel = ({ treatment, setTreatment, selectedDate, refetch }) => {
    console.log(treatment)


    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    setTreatment(null)
                    toast.success("booking confirmed")
                    refetch()
                }
            })
            .catch(err => console.log(err))


    }
    return (
        <>
            <input type="checkbox" id="Booking-model" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                treatment.slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" defaultValue={user ?.displayName} disabled />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" defaultValue={user ?.email} disabled />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    )
}

export default BookingModel
