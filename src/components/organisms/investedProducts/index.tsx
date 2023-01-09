import { strip } from "@fnando/cpf";
import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useUser } from "../../../contexts/userContext";
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

    const { user, token } = useUser()

    const [result, setResult] = useState<IFetchResult>({
        checkingAccountAmount: 0,
        positions: [],
        consolidated: 0,
        limit: 0,
        page: 0,
        pages: 0,
    })

    const [pageValue, setPageValue] = useState(1)
    const [limitValue, setLimitValue] = useState(6)

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

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
            if (!user.document) {
                const token: any = localStorage.getItem('token')
                const document: any = localStorage.getItem('document')
                return await userApi.get(strip(document), token)
            }
            else {
                return await userApi.findPosition(strip(user.document), limitValue, pageValue, token)
            }
        }
        fetchData().then((result: any): any => {
            setResult(result.data)
        }).catch((error) => {
            setShowErrorMessage(true)
        })
    }, [pageValue, limitValue, user.document]);

    return (
        <Container fixed>
            {result.positions.length > 0 ?
                <>  <TableHeaderAtom pages={result.pages} handleChange={handleChange}>Seus investimentos</TableHeaderAtom><Grid container spacing={3}>
                    {result.positions.map((position: IInvestedTrend) => (
                        <Grid item xs={6}>
                            <InvestedCard name={position.symbol} price={position.currentPrice} amount={position.amount}></InvestedCard>
                        </Grid>)
                    )}
                </Grid> </> : !showErrorMessage ? <h2 style={{ textAlign: 'center' }}>Você ainda não possui posições</h2> : <h2 style={{ textAlign: 'center' }}>Não foi possível buscar as posições do cliente</h2>
            }
        </Container>
    )
}