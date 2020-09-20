import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import Management from './component/Management';
import Disasters from './component/Disasters';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/management/:id' component={Management} />
        <Route path='/disasters' component={Disasters} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
