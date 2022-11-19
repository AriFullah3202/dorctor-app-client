import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUPError] = useState('')
    const imageHostkey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate();
    console.log(imageHostkey)
    const { data: Specialies = [''], isloading } = useQuery({
        queryKey: ['appointmentSpeciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality')
            const data = await res.json()
            return data
        }
    })

    const handleAddDoctor = (data) => {
        const image = (data.img[0])
        const formData = new FormData();
        formData.append('image', image)
        const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url
                    }
                    //save doctor info to database
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success('added success fully')
                            navigate('/dashboard/managedoctors')
                        })

                }
            })
            .catch(err => { console.log(err) })
    }
    if (isloading) {
        return <progress className="progress w-56"></progress>
    }
    return (
        <div className="w-96 p-5 mx-auto">
            <div className="text-3xl font-bold">Add A Doctor</div>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register('name', { required: "Your name at least 6 charcter or longer", maxLength: 6 })} />
                    {errors.name && <p className="text-red-400">{errors.name ?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span>
                    </label>
                    <input type="email" className="input input-bordered w-full max-w-xs" {...register('email', { required: "Email is required" })} />
                    {errors.email && <p className="text-red-400">{errors.email ?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Spaciality</span>
                    </label>
                    <select
                        {...register('speciality')}
                        className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Pick a Speciality</option>
                        {
                            Specialies.map(speciality => <option key={speciality._id} value={speciality.name}>{speciality.name}</option>)
                        }
                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="input w-full max-w-xs" {...register('img', { required: "Your photo requird" })} />
                    {errors.img && <p className="text-red-400">{errors.img ?.message}</p>}
                </div>
                <input className="btn btn-accent w-full max-w-xs mt-4" value="Add Doctor" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}

            </form>

        </div>
    )
}

export default AddDoctor
