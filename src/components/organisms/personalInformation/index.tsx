import Grid from "@mui/material/Grid"
import { Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useUser } from "../../../contexts/userContext"
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import { SubmitButtonAtom } from "../../atoms/submitButton";
import { useState } from "react";
import { ListItemAvatarAtom } from '../../atoms/listItemAvatar'
import { DepositModal } from '../../molecules/depositModal'


export const PersonalInformation = () => {

    const { full_name, cpf, account, checkingAccountAmount, consolidated } = useUser()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)

    const handleClickOpen = () => {
        setLoading(true)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLoading(false)
    };

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
                        <ListItemAvatarAtom>
                            <BadgeIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Nome completo" secondary={full_name} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <ListItemAvatarAtom>
                                <PersonIcon />
                            </ListItemAvatarAtom>
                        </ListItemAvatar>
                        <ListItemText primary="CPF" secondary={cpf} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatarAtom>
                            <AccountBalanceIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Conta" secondary={account} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatarAtom>
                            <AccountBalanceWalletIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Saldo" secondary={`${checkingAccountAmount} R$`} />
                        <SubmitButtonAtom onClick={handleClickOpen} loading={loading}>Depositar</SubmitButtonAtom>
                        <DepositModal open={open} handleClose={handleClose}>Depósito</DepositModal>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatarAtom>
                            <PaidIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Saldo provisionado" secondary={`${consolidated} R$`} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}