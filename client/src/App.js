import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Styles/App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search';
import Fosters from './pages/Fosters';
import History from './pages/History';
import NoMatch from "./pages/NoMatch";
import Nav from './components/Nav';
// import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/Signup';

class App extends Component {

  render() {
    
    return (
      <Router>
        <div className="app__container">
          {/* <Header /> */}
          <Nav />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/api/animals/search" component={Search} />
              <Route exact path="/fosters" component={Fosters} />
              <Route exact path="/api/animals/" component={Fosters} />
              <Route exact path="/api/animals/current/" component={Fosters} />
              <Route exact path="/history" component={History} />
              <Route exact path="/api/animals/past" component={History} />
              <Route exact path="/signup" component={Signup} />
              <Route component={NoMatch} />
            </Switch>

            <Footer />
          </div>
        </Router>
      );
    };
  };

export default App;