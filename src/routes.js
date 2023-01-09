import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/loginPage'
import { DashboardPage } from './pages/dashboardPage'
import { ProductsPage } from './pages/productsPage'
import { RegisterPage } from './pages/registerPage'
import { RequireAuth } from './requireAuth'
import {VerifyAuth} from './verifyAuth'

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<VerifyAuth><LoginPage /></VerifyAuth>} />
                <Route exact path='/dashboard' element={<RequireAuth><DashboardPage /></RequireAuth>} />
                <Route exact path='/products' element={<RequireAuth><ProductsPage /></RequireAuth>} />
                <Route exact path='/register' element={<VerifyAuth><RegisterPage /></VerifyAuth>} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;