import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/confiremationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closeModal = () => {
        setDeletingDoctor(null)
    }


    const { data: doctors = [''], isloading, refetch } = useQuery({
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
    });

    const handleDeleteDoctor = doctor => {
        const uri = `http://localhost:5000/doctors/${doctor._id}`
        console.log(uri)
        fetch(uri, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    if (isloading) {
        return <progress className="progress w-56"></progress>
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
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speciality}</td>
                                <td><label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-danger">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingDoctor.name} . Can not be undone`}
                    closeModal={closeModal}
                    onSuccess={handleDeleteDoctor}
                    modalData={deletingDoctor}
                >
                </ConfirmationModal>
            }
        </div>
    )
}

export default ManageDoctors
