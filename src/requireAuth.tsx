import { Navigate } from "react-router-dom"

export function RequireAuth({ children }: { children: any }) {

    const auth: string | null = localStorage.getItem('isAuthenticated')
    const access_token: string | null = localStorage.getItem('token')

    return access_token !== null && auth === 'true'
        ? children
        : (localStorage.clear(), <Navigate to="/login" replace />)
}