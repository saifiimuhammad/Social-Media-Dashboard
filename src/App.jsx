import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

import { useState } from "react";

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar logoTitle="Dashboard" toggleSidebar={toggleSidebar} showSidebar={showSidebar} />

      <Home />
    
    </>
  );
}

export default App;