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
        const fetchData = async () => {
            return await trendApi.getAll(limitValue, pageValue)
        }
        fetchData().then((result: any): any => {
            setResult(result.data)
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