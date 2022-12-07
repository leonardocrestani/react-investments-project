import { Container, Divider } from '@mui/material'
import { Navbar } from '../../components/organisms/navbar'
import { PersonalInformation } from '../../components/organisms/personalInformation'
import { InvestedProducts } from '../../components/organisms/investedProducts'
import { Footer } from '../../components/organisms/footer'

export const DashboardPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container fixed>
                <PersonalInformation></PersonalInformation>
                <Divider variant="inset" style={{ margin: "24px 0px" }} />
                <InvestedProducts></InvestedProducts>
            </Container>
            <Footer></Footer>
        </>
    )
}