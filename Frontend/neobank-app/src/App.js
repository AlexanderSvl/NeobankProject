import './App.css';
import React from 'react'
import '../src/index.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import LandingPageComponent from './components/LandingPage';
import RegisterComponent from '../src/components/Register';
import LoginComponent from './components/Login';
import HomePageComponent from './components/homePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/register'} element={< RegisterComponent />}></Route>
                <Route path={'/login'} element={< LoginComponent />}></Route>
                <Route path={'/home'} element={< HomePageComponent />}></Route>
                <Route path={'/'} element={< LandingPageComponent />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
