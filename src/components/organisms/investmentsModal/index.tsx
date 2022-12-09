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

    const [pageValue, setPageValue] = useState(1)
    const [limitValue, setLimitValue] = useState(6)

    const handleChange = (arg: any) => {
        if (arg.page) {
            setPageValue(arg.page);
        }
        if (arg.limit) {
            setLimitValue(arg.limit)
        }
    };

    useEffect(() => {
        console.log(pageValue, 'effect')
        console.log(limitValue, 'effect')
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
        //     return await trendApi.getAll(limitValue, pageValue)
        // }
        fetchData().then((result: any): any => {
            setResult(result)
            console.log('aaa')
        }).catch((error) => {
            console.log(error)
        })
    }, [pageValue, limitValue]);



    return (
        <Container fixed>
            <TableHeaderAtom pages={result.pages} handleChange={handleChange}>Produtos</TableHeaderAtom>
            <Grid container spacing={3}>
                {
                    result.trends.map((trend: ITrend) => (
                        <Grid item xs={6} >
                            <InvestmentCard name={trend.symbol} price={trend.currentPrice}></InvestmentCard>
                        </Grid>)
                    )
                }
            </Grid>
        </Container>
    )
}