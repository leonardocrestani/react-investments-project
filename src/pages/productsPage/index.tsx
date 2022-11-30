import { InvestmentsModal } from '../../components/organisms/investmentsModal'
import { Navbar } from '../../components/organisms/navbar'

export const ProductsPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div style={{ margin: '32px 124px' }}>
                <InvestmentsModal />
            </div>
        </>
    )
}