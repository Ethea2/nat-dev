import { useRef } from 'react'
import { Id, toast } from 'react-toastify'
import { useAuth } from '../hooks/useAuth.ts'
import { useRouter } from 'next/navigation'

const useLogin = () => {
    const { dispatch } = useAuth()
    const toastID = useRef<Id>()
    const router = useRouter()

    const login = async (username: string, password: string) => {
        toastID.current = toast.loading('logging you in now...')
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/login`,
            {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const json = await res.json()
        console.log(json)
        console.log(res.ok)
        if (!res.ok) {
            toast.update(toastID.current ?? '', {
                render: 'Could not log you in!',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: 'error',
                isLoading: false,
            })
            return
        }
        toast.update(toastID.current ?? '', {
            render: 'Successfully Logged in!',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            type: 'success',
            isLoading: false,
        })
        // localStorage.setItem('user', JSON.stringify(json))
        localStorage.setItem('user', JSON.stringify(json.data.data))
        dispatch?.({ type: 'LOGIN', payload: json.data.data })
        router.push('/dashboard')
    }
    return { login }
}

export default useLogin
