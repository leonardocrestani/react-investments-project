import { Container, Divider } from '@mui/material'
import { Navbar } from '../../components/organisms/navbar'
import { PersonalInformation } from '../../components/organisms/personalInformation'
import { InvestedProducts } from '../../components/organisms/investedProducts'

export const DashboardPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container fixed>
                <PersonalInformation></PersonalInformation>
                <Divider variant="inset" style={{ margin: "24px 0px" }} />
                <InvestedProducts></InvestedProducts>
            </Container>
        </>
    )
}