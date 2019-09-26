import React, { Component } from 'react'
import './Signup.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../../components/Login/Login';
import "./index" 
import axios from 'axios';
import { Redirect } from 'react-router';


class Signup extends Component {
    state = {
        email: "",
        password: "",
        redirect: false
}
signup = () => {
    axios.post('/api/auth/signup', this.state)
    .then(()=>this.setState({redirect: true}))
}
handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
 
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    } 
    
    render() {
        return (
                <div className="container">
                    {this.state.redirect?<Redirect to ="/fosters" /> : null}
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup" />
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" value={this.state.email}
                                name="email"
                                 onChange={this.handleInputChange}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" value={this.state.password}
                                name="password"
                                 onChange={this.handleInputChange}
                                />
                        <button  type="submit" className="btn btn-default" onClick={this.signup} >Sign Up</button>
                        </div>
                        <br />
                        <Router>
                            <div>
                            <p>Or login <a href="/">here</a></p>
                        <Route exact path="/login" component={Login} />
                            </div>
                        </Router>
                    </div>
                </div>
       </div> )
    }
}
export default Signup;