import { useNavigate } from "react-router-dom"

export function RequireAuth({ children }: { children: any }) {
    let navigate = useNavigate()

    const auth: string | null = localStorage.getItem('isAuthenticated')

    return auth === 'true'
        ? children
        : navigate('/login')
}