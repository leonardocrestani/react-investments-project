import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/loginPage'
import { DashboardPage } from './pages/dashboardPage'
import { ProductsPage } from './pages/productsPage'
import { RegisterPage } from './pages/registerPage'
import { RequireAuth } from './requireAuth'

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path='/dashboard' element={<RequireAuth><DashboardPage /></RequireAuth>} />
                <Route exact path='/products' element={<ProductsPage />} />
                <Route exact path='/register' element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;