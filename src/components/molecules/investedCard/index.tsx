import { Card, CardContent, Divider, Typography } from "@mui/material"

export const InvestedCard = ({ name, price, amount }: { name: string, price: number, amount: number }) => {

    return (
        <Card sx={{ minWidth: 275 }} style={{ textAlign: 'center', backgroundColor: '#FEFEFE' }} >
            <CardContent >
                <Typography gutterBottom variant="h4" component="div" style={{ marginBottom: '10px' }}>
                    {name}
                </Typography>
                <Typography variant="body2">
                    {`Valor: ${price} R$`}
                </Typography>
            </CardContent>
            <Divider light style={{ margin: '0px 46px' }} />
            <Typography variant="body2" style={{ padding: '16px' }}>
                {`Quantidade: ${amount}`}
            </Typography>
        </Card >
    )
}