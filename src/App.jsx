import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; 
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AccountSettings from './pages/AccountSettings';
import PrivateRoute from './components/PrivateRoute';

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  const menuOpts = [{ name: "Home", link: "/" }, { name: "Account Settings", link: "/account-settings" }];

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <Router>
    <Navbar toggleSidebar={toggleSidebar} navLinks={menuOpts} />
    <Sidebar logoTitle="Dashboard" toggleSidebar={toggleSidebar} showSidebar={showSidebar} sideLinks={menuOpts} />

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/dashboard' element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
    <Route path='/account-settings' element={ <PrivateRoute><AccountSettings /></PrivateRoute> } />
    </Routes>

    <Footer />
    </Router>
  );
}

export default App;
