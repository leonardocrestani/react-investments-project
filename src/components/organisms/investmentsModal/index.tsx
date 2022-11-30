import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { trendApi } from '../../../services/trend.service';
import { InvestmentCard } from '../../molecules/investmentCard'
import { TableHeaderAtom } from '../../atoms/tableHeader'

interface ITrend {
    symbol: string,
    currentPrice: number
}

export const InvestmentsModal = () => {

    const [trends, setTrends] = useState<ITrend[]>([])

    useEffect(() => {
        if (trends.length === 0) {
            const fetchData = async () => {
                return await trendApi.getAll()
            }
            fetchData().then((result: any): any => {
                setTrends(result.data)
                console.log('aaa')
            }).catch((error) => {
                console.log(error)
            })
        }
    });

    return (
        <div style={{ margin: '32px' }}>
            <TableHeaderAtom>Produtos</TableHeaderAtom>
            <Grid container spacing={2}>
                {
                    trends.map((trend: ITrend) => (
                        <Grid item xs={4} >
                            <InvestmentCard name={trend.symbol} price={trend.currentPrice}></InvestmentCard>
                        </Grid>)
                    )
                }
            </Grid>
        </div>
    )
}