import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useParams } from 'react-router'
import ReactDom from 'react-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import Management from './component/Management';
import Disasters from './component/Disasters';

import Test from './component/Test'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/management' component={Management} />
        <Route path='/disasters' component={Disasters} />
        <Route path='/test/:id' component={Test} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
