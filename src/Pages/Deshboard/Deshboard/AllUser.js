import React from 'react'
import { useQuery } from '@tanstack/react-query';

const AllUser = () => {
    const { data: users = [''] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h1>this is all user</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr className="hover">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Blue</td>
                                <td>Purple</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUser
