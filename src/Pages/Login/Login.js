import React, { useState } from 'react'
import { useForm, } from 'react-hook-form';
import { Link } from 'react-router-dom';



const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data)
        console.log(errors)
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 border-2 border-indigo-600"    >
                <h2 className='text-xl'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="email" {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className="text-red-400">{errors.email ?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password" {...register("password", {
                            required: "password is requied", required: "Password is required",

                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                        })} />
                        {errors.password && <p className="text-red-400">{errors.password ?.message}</p>}
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
