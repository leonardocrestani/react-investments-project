import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { SubmitButtonAtom } from '../../atoms/submitButton'
import { ISubmitButton } from "../form"

export const InvestmentCard = ({ name, price }: { name: string, price: number }) => {

    const submitButton: ISubmitButton = {
        method: 'POST',
        label: 'Comprar',
    }

    const onClick = async (): Promise<void> => {
        console.log('clicou')
    }

    return (
        <Card sx={{ minWidth: 275 }} >
            <CardContent >
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body2">
                    {`Valor: ${price} R$`}
                </Typography>
            </CardContent>
            <CardActions>
                <SubmitButtonAtom children={submitButton.label} onClick={onClick} loading={false}></SubmitButtonAtom>
            </CardActions>
        </Card >
    )
}