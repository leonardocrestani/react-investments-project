import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { trendApi } from '../../../services/trend.service';
import { userApi } from "../../../services/user.service";
import { InvestedCard } from '../../molecules/investedCard'
import { TableHeaderAtom } from '../../molecules/tableHeader'

interface IInvestedTrend {
    symbol: string,
    currentPrice: number
    amount: number
}

interface IFetchResult {
    checkingAccountAmount: number,
    positions: Array<IInvestedTrend>,
    consolidated: number,
    limit: number,
    page: number,
    pages: number
}

export const InvestedProducts = () => {

    const [result, setResult] = useState<IFetchResult>({
        checkingAccountAmount: 0,
        positions: [],
        consolidated: 0,
        limit: 0,
        page: 0,
        pages: 0,
    })

    const [pageValue, setPageValue] = useState(1)
    const [limitValue, setLimitValue] = useState(1)

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
                positions: [{
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
        //     return await userApi.findPosition('08000700034', limitValue, pageValue)
        // }
        fetchData().then((result: any): any => {
            setResult(result)
            console.log('aaa')
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }, [pageValue, limitValue]);

    return (
        <Container fixed>
            <TableHeaderAtom pages={result.pages} handleChange={handleChange}>Seus investimentos</TableHeaderAtom>
            <Grid container spacing={3}>
                {
                    result.positions.map((position: IInvestedTrend) => (
                        <Grid item xs={6} >
                            <InvestedCard name={position.symbol} price={position.currentPrice} amount={position.amount}></InvestedCard>
                        </Grid>)
                    )
                }
            </Grid>
        </Container>
    )
}