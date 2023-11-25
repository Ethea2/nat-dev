'use client'

import DataDisplay from '@/components/dashboard/DataDisplay'

function Dashboard() {
    return (
        <div className="min-h-screen w-full">
            <DataDisplay url={'/api/exp/'} title={'Experiences'} />
        </div>
    )
}

export default Dashboard
