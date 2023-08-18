import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; 
import Footer from './Components/Footer/Footer';
import './App.css';
import LayoutHome from './Layouts/LayoutHome'
import LoginPage from './Components/Connexion/Login';
import Dashboard from './Components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />     
        <Routes>
          <Route path="/home" element={<LayoutHome />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
