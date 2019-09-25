import React, { Component } from 'react'
import './Login.css'
import Signup from '../Signup/Signup';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';


class Login extends Component {
    state = {
        email: "",
        password: ""
}
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    signup = () => {
        axios.post('/api/login', this.state)
    }
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // if (name === "password") {
        //   value = value.substring(0, 15);
        // }
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    render() {
        return (
        <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login Form</h2>
                        <form className="login" />
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
                        </div>
                        <button  type="submit" className="btn btn-default" onClick={this.signup} >Log In</button>
                        <br />
                        <Router>
                            <div>
                            <p>Or sign up <a href="/signup">here</a></p>
                        <Route exact path="/signup" component={Signup} />
                            </div>
                        </Router>
                    </div>
            </div> 
         </div>
        )    
    }
}

export default Login;