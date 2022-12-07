import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { trendApi } from '../../../services/trend.service';
import { InvestmentCard } from '../../molecules/investmentCard'
import { TableHeaderAtom } from '../../molecules/tableHeader'

interface ITrend {
    symbol: string,
    currentPrice: number
}

interface IFetchResult {
    trends: Array<ITrend>,
    limit: number,
    page: number,
    pages: number
}

export const InvestmentsModal = () => {

    const [result, setResult] = useState<IFetchResult>({
        trends: [],
        limit: 0,
        page: 0,
        pages: 0,
    })

    useEffect(() => {
        if (result.trends.length === 0) {
            const fetchData = async () => {
                return {
                    trends: [{
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
                    ],
                    limit: 5,
                    pages: 2,
                    page: 1
                }
            }
            // const fetchData = async () => {
            //     return await trendApi.getAll(5, 0)
            // }
            fetchData().then((result: any): any => {
                setResult(result)
                console.log('aaa')
            }).catch((error) => {
                console.log(error)
            })
        }
    });

    return (
        <Container fixed>
            <TableHeaderAtom limit={result.limit} pages={result.pages}>Produtos</TableHeaderAtom>
            <Grid container spacing={2}>
                {
                    result.trends.map((trend: ITrend) => (
                        <Grid item xs={4} >
                            <InvestmentCard name={trend.symbol} price={trend.currentPrice}></InvestmentCard>
                        </Grid>)
                    )
                }
            </Grid>
        </Container>
    )
}