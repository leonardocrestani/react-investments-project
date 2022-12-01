import { Container } from '@mui/system'
import { InvestmentsModal } from '../../components/organisms/investmentsModal'
import { Navbar } from '../../components/organisms/navbar'

export const ProductsPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container fixed>
                <InvestmentsModal />
            </Container>
        </>
    )
}