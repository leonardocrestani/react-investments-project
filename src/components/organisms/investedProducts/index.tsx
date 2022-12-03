import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { trendApi } from '../../../services/trend.service';
import { InvestedCard } from '../../molecules/investedCard'
import { TableHeaderAtom } from '../../atoms/tableHeader'

interface IInvestedTrend {
    symbol: string,
    currentPrice: number
    amount: number
}

export const InvestedProducts = () => {

    const [trends, setTrends] = useState<IInvestedTrend[]>([])

    useEffect(() => {
        if (trends.length === 0) {
            const fetchData = async () => {
                return [
                    {
                        "_id": "63866c01025224375ab69aa3",
                        "symbol": "TORO4",
                        "currentPrice": 115.98,
                        "amount": 1
                    },
                    {
                        "_id": "63866e4afb0035f3608e1381",
                        "symbol": "PETR4",
                        "currentPrice": 28.44,
                        "amount": 1
                    },
                    {
                        "_id": "63866e704453399233730af1",
                        "symbol": "MGLU3",
                        "currentPrice": 25.91,
                        "amount": 1
                    },
                    {
                        "_id": "63866ea741ec6ffecf0dde7c",
                        "symbol": "VVAR3",
                        "currentPrice": 25.91,
                        "amount": 1
                    },
                    {
                        "_id": "63866ec090b0c64481e85988",
                        "symbol": "SANB11",
                        "currentPrice": 40.77,
                        "amount": 1
                    },
                    {
                        "_id": "63866ea741ec6ffecf0dde7c",
                        "symbol": "VVAR3",
                        "currentPrice": 25.91,
                        "amount": 1
                    },
                    {
                        "_id": "63866ec090b0c64481e85988",
                        "symbol": "SANB11",
                        "currentPrice": 40.77,
                        "amount": 1
                    },
                    {
                        "_id": "63866ea741ec6ffecf0dde7c",
                        "symbol": "VVAR3",
                        "currentPrice": 25.91,
                        "amount": 1
                    },
                    {
                        "_id": "63866ec090b0c64481e85988",
                        "symbol": "SANB11",
                        "currentPrice": 40.77,
                        "amount": 1
                    },
                    {
                        "_id": "63866ec090b0c64481e85988",
                        "symbol": "SANB11",
                        "currentPrice": 40.77,
                        "amount": 1
                    },
                    {
                        "_id": "63866ea741ec6ffecf0dde7c",
                        "symbol": "VVAR3",
                        "currentPrice": 25.91,
                        "amount": 1
                    },
                    {
                        "_id": "63866ec090b0c64481e85988",
                        "symbol": "SANB11",
                        "currentPrice": 40.77,
                        "amount": 1
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
            <TableHeaderAtom>Seus investimentos</TableHeaderAtom>
            <Grid container spacing={2}>
                {
                    trends.map((trend: IInvestedTrend) => (
                        <Grid item xs={4} >
                            <InvestedCard name={trend.symbol} price={trend.currentPrice} amount={trend.amount}></InvestedCard>
                        </Grid>)
                    )
                }
            </Grid>
        </>
    )
}