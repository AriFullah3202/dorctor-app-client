import React, { useState, useEffect } from 'react'

const useAdmin = email => {

    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            console.log('comming')
            fetch(`https://doctor-portal-arif.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.isAdmin)
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin
