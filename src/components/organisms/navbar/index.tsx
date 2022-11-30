import { AppBar, Box, IconButton, Link, MenuItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" style={{ backgroundColor: '#2A2929', paddingLeft: '48px', paddingRight: '48px' }}>
                <Toolbar variant="dense">
                    <MenuItem>
                        <NavLink to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
                            <Typography textAlign="center">Dashboard</Typography>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/products" style={{ textDecoration: "none", color: "white" }}>
                            <Typography textAlign="center">Produtos</Typography>
                        </NavLink>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </Box>
    )
}