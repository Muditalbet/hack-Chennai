import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
