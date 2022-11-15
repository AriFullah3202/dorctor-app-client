import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 border-2 border-indigo-600"    >
                <h2 className='text-xl'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="text" {...register("email")} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password" {...register("password")} />
                        <label className="label"><span className="label-text">Forget Password ?</span>
                        </label>
                    </div>
                    <input className="btn btn-accent w-full" value="Login" type="submit" />
                </form>
                <p>New to Doctors For Account <Link to="/signUp" className="text-primary">Create a New Account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    )
}

export default Login
