import React from 'react'

const SignUp = () => {
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 border-2 border-indigo-600"    >
                <h2 className='text-xl'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-400">{errors.email ?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password" />
                        {errors.password && <p className="text-red-400">{errors.password ?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password ?</span>
                        </label>
                    </div>
                    <input className="btn btn-accent w-full" value="Sign Up" type="submit" />
                </form>
                <p>New to Doctors For Account <Link to="/signUp" className="text-primary">Create a New Account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>

        </div>

    )
}

export default SignUp
