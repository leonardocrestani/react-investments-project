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
                return [
                    {
                        "_id": "63866c01025224375ab69aa3",
                        "symbol": "TORO4",
                        "currentPrice": 115.98
                    },
                    {
                        "_id": "63866e4afb0035f3608e1381",
                        "symbol": "PETR4",
                        "currentPrice": 28.44
                    },
                    {
                        "_id": "63866e704453399233730af1",
                        "symbol": "MGLU3",
                        "currentPrice": 25.91
                    },
                    {
                        "_id": "63866ea741ec6ffecf0dde7c",
                        "symbol": "VVAR3",
                        "currentPrice": 25.91
                    },
                    {
                        "_id": "63866ec090b0c64481e85988",
                        "symbol": "SANB11",
                        "currentPrice": 40.77
                    }
                ]
            }
            fetchData().then((result: any): any => {
                setTrends(result)
                console.log('aaa')
            }).catch((error) => {
                console.log(error)
            })
        }
    });

    return (
        <>
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
        </>
    )
}