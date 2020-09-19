import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useParams } from 'react-router'
import ReactDom from 'react-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import Management from './component/Management';

import Test from './component/Test'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/management' component={Management} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
