import { Navigate } from "react-router-dom"

export function VerifyAuth({ children }: { children: any }) {

    const auth: string | null = localStorage.getItem('isAuthenticated')
    const access_token: string | null = localStorage.getItem('token')

    return auth === null || access_token === null
        ? children
        : <Navigate to="/dashboard" replace />
}