import './App.css';
import React from 'react'
import '../src/index.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import LandingPageComponent from './components/LandingPageComponent/landingPage';
import RegisterComponent from './components/RegisterPageComponent/registerPage';
import LoginComponent from './components/LoginPageComponent/loginPage';
import HomePageComponent from './components/HomePageComponent/homePage';
import TransactionsComponent from './components/TransactionsComponent/transactions';
import SpendingsComponent from './components/SpendingsComponent/spendings';
import InvestingComponent from './components/InvestingComponent/investing';
import StocksComponent from './components/StocksComponent/stocks';
import StockDetailsComponent from './components/StockDetailsComponent/stockDetails'

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/register'} element={< RegisterComponent />}></Route>
                <Route path={'/login'} element={< LoginComponent />}></Route>
                <Route path={'/home'} element={< HomePageComponent />}></Route>
                <Route path={'/transactions'} element={< TransactionsComponent />}></Route>
                <Route path={'/spendings'} element={< SpendingsComponent />}></Route>
                <Route path={'/investing'} element={< InvestingComponent />}></Route>
                <Route path={"/stocks/:symbol"} element={<StockDetailsComponent />} />
                <Route path={'/stocks'} element={< StocksComponent />}></Route>
                <Route path={'/'} element={< LandingPageComponent />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
