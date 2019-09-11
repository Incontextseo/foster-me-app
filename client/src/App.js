import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search';
import Fosters from './pages/Fosters';
import History from './pages/History';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/fosters" component={Fosters} />
            <Route exact path="/history" component={History} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
