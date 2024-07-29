'use client'
import { useRouter } from "next/navigation"
const Register = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Register</h1>

            <button onClick={() => router.push('/forgot-password')}> Click to Forget </button>

        </div>
    )
}

export default Register