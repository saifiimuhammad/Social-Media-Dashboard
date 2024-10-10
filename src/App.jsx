import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; 
import Footer from './components/Footer';
import Signup from './pages/Signup';

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const menuOpts = ["Facebook", "Instagram", "Twitter", "Linkedin"];
  
  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} navLinks={menuOpts} />
      <Sidebar logoTitle="Dashboard" toggleSidebar={toggleSidebar} showSidebar={showSidebar} sidebarLinks={menuOpts} />

	  <Routes>
	  	<Route path='/' element={<Home/>} />
	  	<Route path='/signup' element={<Signup/>} />
	  </Routes>

      <Footer />
    </Router>
  );
}

export default App;
