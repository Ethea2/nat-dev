'use client'
import { useEffect, useState } from 'react'
import useLogin from '@/hooks/useLogin'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
function Login() {
    const { user } = useAuth()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { login } = useLogin()
    const router = useRouter()
    useEffect(() => {
        if (user) router.push('/dashboard')
    }, [user, router])
    const handleLogin = async () => {
        await login(username, password)
    }
    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="w-1/4 h-1/2 border-2 border-white rounded-xl flex flex-col justify-center items-center gap-5">
                <div className="w-full text-center font-bold text-4xl">
                    Login
                </div>
                <div className="flex flex-col gap-10">
                    <Input
                        placeholder="Username"
                        type="text"
                        className="rounded-xl"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        placeholder="Password"
                        type="password"
                        className="rounded-xl"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button
                    className="bg-white/80 text-black rounded-xl hover:bg-white"
                    onClick={() => handleLogin()}
                >
                    Login
                </Button>
            </div>
        </section>
    )
}

export default Login
