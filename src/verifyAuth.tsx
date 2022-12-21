import { Navigate } from "react-router-dom"

export function VerifyAuth({ children }: { children: any }) {

    const auth: string | null = localStorage.getItem('isAuthenticated')

    return auth === null
        ? children
        : <Navigate to="/dashboard" replace />
}