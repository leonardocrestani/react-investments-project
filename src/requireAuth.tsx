import { Navigate } from "react-router-dom"

export function RequireAuth({ children }: { children: any }) {

    const auth: string | null = localStorage.getItem('isAuthenticated')

    return auth === 'true'
        ? children
        : <Navigate to="/login" replace />
}