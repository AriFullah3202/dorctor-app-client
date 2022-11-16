import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate();


    const handleSignUp = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)


            });

    }
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 border-2 border-indigo-600"    >
                <h2 className='text-xl'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password" {...register('password', { required: "password is requied", minLength: { value: 6, message: 'password at least 6 charactars or longer' } })} />
                        {errors.password && <p className="text-red-400">{errors.password ?.message}</p>}
                    </div>
                    <input className="btn btn-accent w-full" value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                </form>
                <p>Already have an Account <Link to="/login" className="text-primary">Login</Link></p>

            </div>

        </div>

    )
}

export default SignUp
