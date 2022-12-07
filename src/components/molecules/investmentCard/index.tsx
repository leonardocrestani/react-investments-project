import { Card, CardActions, CardContent, Divider, Typography } from "@mui/material"
import { useState } from "react"
import { SubmitButtonAtom } from '../../atoms/submitButton'
import { ISubmitButton } from "../form"
import { BuyModal } from '../buyModal'

export const InvestmentCard = ({ name, price }: { name: string, price: number }) => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)

    const submitButton: ISubmitButton = {
        method: 'POST',
        label: 'Comprar',
    }

    const onClick = async (): Promise<void> => {
        setLoading(true)

    }

    const handleClickOpen = () => {
        setLoading(true)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLoading(false)
    };

    return (
        <Card sx={{ minWidth: 275 }} style={{ textAlign: 'center', backgroundColor: '#FEFEFE' }}>
            <CardContent >
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body2">
                    {`Valor: ${price} R$`}
                </Typography>
            </CardContent>
            <Divider light style={{ margin: '0px 46px' }} />
            <CardActions style={{
                padding: '16px',
                justifyContent: "center"
            }}>
                <SubmitButtonAtom children={submitButton.label} onClick={handleClickOpen} loading={loading}></SubmitButtonAtom>
            </CardActions>
            <BuyModal open={open} handleClose={handleClose}>Comprar ação</BuyModal>
        </Card >
    )
}