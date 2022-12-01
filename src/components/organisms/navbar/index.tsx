import { AppBar, Box, MenuItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useUser } from "../../../contexts/userContext"

export const Navbar = () => {

    const { logout } = useUser()

    return (
        <Box sx={{ flexGrow: 1 }} style={{marginBottom: '26px'}}>
            <AppBar position="static" color="primary" style={{ backgroundColor: '#2A2929', padding: '4px 138px' }}>
                <Toolbar variant="dense">
                    <NavLink to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
                        <MenuItem>
                            <Typography textAlign="center">Dashboard</Typography>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/products" style={{ textDecoration: "none", color: "white" }}>
                        <MenuItem>
                            <Typography textAlign="center">Produtos</Typography>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/" onClick={logout} style={{ textDecoration: "none", color: "white", marginLeft: "auto" }}>
                        <MenuItem>
                            <Typography textAlign="center">Sair</Typography>
                        </MenuItem>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    )
}