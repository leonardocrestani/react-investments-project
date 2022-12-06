import Grid from "@mui/material/Grid"
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useUser } from "../../../contexts/userContext"
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import { SubmitButtonAtom } from "../../atoms/submitButton";


export const PersonalInformation = () => {

    const { full_name, cpf, account, checkingAccountAmount, consolidated } = useUser()

    const submitDeposit = () => {
        
    }

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center' >
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px", width: "60%" }}>
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'transparent', color: "#2A2929" }}>
                                <BadgeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Nome completo" secondary={full_name} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'transparent', color: "#2A2929" }}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="CPF" secondary={cpf} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'transparent', color: "#2A2929" }}>
                                <AccountBalanceIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Conta" secondary={account} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'transparent', color: "#2A2929" }}>
                                <AccountBalanceWalletIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Saldo" secondary={checkingAccountAmount} />
                        <SubmitButtonAtom onClick={submitDeposit} loading={false}>Depositar</SubmitButtonAtom>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'transparent', color: "#2A2929" }}>
                                <PaidIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Saldo provisionado" secondary={consolidated} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}