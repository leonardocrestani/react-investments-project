import { Box } from "@mui/material"
import { Register } from "../../components/organisms/register"

export const RegisterPage = () => {
    return (
        <>
            <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' >
                <Register />
            </Box>
        </>
    )
}