import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

const useFetch = (url: string, refetch: boolean) => {
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
                { cache: 'no-store' }
            )

            const json = await response.json()
            if (!response.ok) {
                toast('Could not fetch data!', {
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: 'error',
                    isLoading: false,
                })
                setError(true)
                setData(null)
                return
            }

            toast('Successfully fetched the data!', {
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: 'success',
                isLoading: false,
            })
            setData(json.data.data)
            setError(false)
        }

        fetchData()
    }, [url, refetch])
    return { data, error }
}

export default useFetch
