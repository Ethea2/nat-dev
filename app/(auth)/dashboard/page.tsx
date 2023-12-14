'use client'

import DataDisplay from '@/components/dashboard/DataDisplay'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function Dashboard() {
    // const { user } = useAuth()
    // const router = useRouter()
    // useEffect(() => {
    //     if (!user) {
    //         router.push('/login')
    //         toast('You need to login first to access this page!', {
    //             type: 'error',
    //         })
    //     }
    // }, [user, router])
    return (
        <div className="min-h-screen w-full">
            <DataDisplay url={'/api/exp/'} title={'Experiences'} />
            <DataDisplay url={'/api/project/'} title={'Projects'} />
        </div>
    )
}

export default Dashboard
