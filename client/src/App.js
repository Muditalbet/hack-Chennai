import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useParams } from 'react-router'
import ReactDom from 'react-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'

import Test from './component/Test'
import './App.css';

function Management(){
  let { id } = useParams()
  return <h2>User {id}</h2>
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/:test' component={Test} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
