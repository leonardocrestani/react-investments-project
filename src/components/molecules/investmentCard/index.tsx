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
        setIsHovering(false)
    };

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Card sx={{ minWidth: 275 }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ textAlign: 'center', backgroundColor: '#FEFEFE', border: '0.5px solid gainsboro', transition: 'transform .2s', transform: `${isHovering ? 'scale(1.05)' : 'scale(1)'}` }}>
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
            <BuyModal open={open} handleClose={handleClose}>{`Comprar ação ${name}`}</BuyModal>
        </Card >
    )
}