import './App.css';
import React from 'react'
import '../src/index.css';
import Register from '../src/components/Register'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
    return (
      <div>
      <Router>
          <Routes>
            <Route path={'/register'} element={<Register />}></Route>
            <Route path={'/'} element={<LandingPage />}></Route>
          </Routes>
      </Router>
      </div>
      
    );  
}

export default App;
