import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Styles/App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search';
import Fosters from './pages/Fosters';
import History from './pages/History';
import Nav from './components/Nav';
// import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD:client/src/App.js
=======
import Signup from './pages/Signup/Signup';
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b:client/src/App.js



function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/api/animals/search" component={Search} />
            <Route exact path="/fosters" component={Fosters} />
            <Route exact path="/api/animals/" component={Fosters} />
            <Route exact path="/api/animals/current/" component={Fosters} />
            <Route exact path="/history" component={History} />
            <Route exact path="/api/animals/past" component={History} />
<<<<<<< HEAD:client/src/App.js
=======
            <Route exact path="/signup" component={Signup} />
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b:client/src/App.js
        <Footer />
      </div>
    </Router>
  );
}

export default App;