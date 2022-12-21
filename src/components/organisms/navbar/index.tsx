import { AppBar, Avatar, Box, MenuItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useUser } from "../../../contexts/userContext"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SubjectIcon from '@mui/icons-material/Subject';

export const Navbar = () => {

    const { logout } = useUser()

    return (
            <AppBar position="sticky" color="primary" style={{ backgroundColor: '#2A2929', padding: '4px 138px', marginBottom: '26px', borderTop: '5px solid #1681E6', }}>
                <Toolbar>
                    <NavLink to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
                        <MenuItem>
                            <Avatar sx={{ bgcolor: 'transparent', marginRight: '4px' }}>
                                <DashboardOutlinedIcon />
                            </Avatar>
                            <Typography textAlign="center">Dashboard</Typography>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/products" style={{ textDecoration: "none", color: "white" }}>
                        <MenuItem>
                            <Avatar sx={{ bgcolor: 'transparent', marginRight: '4px' }}>
                                <SubjectIcon />
                            </Avatar>
                            <Typography textAlign="center">Produtos</Typography>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/login" onClick={logout} style={{ textDecoration: "none", color: "white", marginLeft: "auto" }}>
                        <MenuItem>
                            <Typography textAlign="center">Sair</Typography>
                        </MenuItem>
                    </NavLink>
                </Toolbar>
            </AppBar>
    )
}