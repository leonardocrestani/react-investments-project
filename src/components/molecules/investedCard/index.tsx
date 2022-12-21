import { Card, CardContent, Divider, Typography } from "@mui/material"
import { useState } from "react";

export const InvestedCard = ({ name, price, amount }: { name: string, price: number, amount: number }) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Card sx={{ minWidth: 275 }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ textAlign: 'center', backgroundColor: '#FEFEFE', border: '0.5px solid gainsboro', borderTop: '3px solid #1681E6', transition: 'transform .2s', transform: `${isHovering ? 'scale(1.05)' : 'scale(1)'}` }} >
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
                Quantidade: <b>{amount}</b>
            </Typography>
        </Card >
    )
}