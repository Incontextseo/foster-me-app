
import React, { Component } from 'react'
import './Signup.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login/Login';
import axios from 'axios';


class Signup extends Component {
    state = {
        email: "",
        password: ""
}
signup = () => {
    axios.post('/api/signup', this.state)
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
 
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    } 
    
    render() {
        return (
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup" />
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" value={this.state.email}
                                name="email"
                                 onChange={this.handleInputChange}
                                />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" value={this.state.password}
                                name="password"
                                 onChange={this.handleInputChange}
                                />
                        <button  type="submit" className="btn btn-default" onClick={this.signup} >Sign Up</button>

                        </div>
                        <br />
                        <Router>
                            <div>
                            <p>Or login <a href="/login">here</a></p>
                        <Route exact path="/login" component={Login} />
                            </div>
                        </Router>
                    </div>
                </div>
       </div> )
    }
}

// function signUpUser(email, passm
// word) {
//     $.post("/api/signup", {
//       email: email,
//       password: password
//     })
//     //   .then(function(data) {
//     //     window.location.replace("/members");
//     //     // If there's an error, handle it by throwing up a bootstrap alert
//     //   })
//       .catch(handleLoginErr);
//   }



export default Signup;