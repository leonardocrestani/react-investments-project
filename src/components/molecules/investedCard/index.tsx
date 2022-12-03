import { Card, CardContent, Typography } from "@mui/material"

export const InvestedCard = ({ name, price, amount }: { name: string, price: number, amount: number }) => {

    return (
        <Card sx={{ minWidth: 275 }} >
            <CardContent >
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body2">
                    {`Valor: ${price} R$`}
                </Typography>
                <Typography variant="body2">
                    {`Quantidade: ${amount}`}
                </Typography>
            </CardContent>
        </Card >
    )
}