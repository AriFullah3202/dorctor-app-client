import React from 'react'
import { useQuery } from '@tanstack/react-query';

const ManageDoctors = () => {
    const { data: doctors = [''], isloading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data
            }
            catch (error) {
                console.log(error)
            }
        }
    })
    if (isloading) {
        return <progress className="progress w-56"></progress>
    }
    const handleDeleteDoctor = id => {
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h1 className="text-3xl font-bold">this is manage Doctors</h1>
            <h1> the doctors length {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor._id} className="hover">
                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} />
                                        </div>
                                    </div>
                                </th>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <th>{doctor.speciality}</th>
                                <td><button onClick={() => { handleDeleteDoctor(doctor._id) }} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageDoctors
