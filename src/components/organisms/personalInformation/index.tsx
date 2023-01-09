import Grid from "@mui/material/Grid"
import { Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useUser } from "../../../contexts/userContext"
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import { SubmitButtonAtom } from "../../atoms/submitButton";
import { useEffect, useState } from "react";
import { ListItemAvatarAtom } from '../../atoms/listItemAvatar'
import { DepositModal } from '../../molecules/depositModal'
import { userApi } from "../../../services/user.service";
import { strip, format } from "@fnando/cpf";


export const PersonalInformation = () => {

    const { user, update, token } = useUser()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            if(!user.document) {
                const token: any = localStorage.getItem('token')
                const document: any = localStorage.getItem('document')
                return await userApi.get(strip(document), token)
            }
            else {
                return await userApi.get(strip(user.document), token)
            }
        }
        fetchData().then((result: any): any => {
            const payload = Object.assign(result.data, {document: format(result.data.document), checkingAccountAmount: result.data.checkingAccountAmount.toLocaleString('pt-BR'), consolidated: result.data.consolidated.toLocaleString('pt-BR')})
            const token: any = localStorage.getItem('token')
            update(payload, token)
        }).catch((error) => {
            setShowErrorMessage(true)
        })
    }, []);

    const handleClickOpen = () => {
        setLoading(true)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLoading(false)
    };

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent='center' >
            <Grid item xs={12} style={{ padding: "0px", marginTop: "14px", width: "60%" }}> {
            !showErrorMessage ? <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatarAtom>
                            <BadgeIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Nome completo" secondary={user.full_name} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <ListItemAvatarAtom>
                                <PersonIcon />
                            </ListItemAvatarAtom>
                        </ListItemAvatar>
                        <ListItemText primary="CPF" secondary={user.document} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatarAtom>
                            <AccountBalanceIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Conta" secondary={user.account} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatarAtom>
                            <AccountBalanceWalletIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Saldo" secondary={`${user.checkingAccountAmount} R$`} />
                        <SubmitButtonAtom onClick={handleClickOpen} disabled={false} loading={loading}>Depositar</SubmitButtonAtom>
                        <DepositModal open={open} handleClose={handleClose}>Depósito</DepositModal>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatarAtom>
                            <PaidIcon />
                        </ListItemAvatarAtom>
                        <ListItemText primary="Saldo provisionado (saldo + posições)" secondary={`${user.consolidated} R$`} />
                    </ListItem>
                </List> : <h2 style={{textAlign: 'center'}}>Não foi possível buscar informações do cliente</h2>}
            </Grid>
        </Grid>
    )
}