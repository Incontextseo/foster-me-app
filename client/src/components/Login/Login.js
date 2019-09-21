import React, { Component } from 'react'
import './Login.css'
import Signup from '../Signup/signup';
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
                        </div>
                        <button  type="submit" className="btn btn-default" onClick={this.signup} >Log In</button>
                        <br />
                        <Router>
                            <div>
                            <p>Or sign up <a href="/Signup">here</a></p>
                        <Route exact path="/Search" component={Signup} />
                            </div>
                        </Router>
                    </div>
            </div> 
         </div>
        )    
    }
}

export default Login




// $(document).ready(function() {
//     // Getting references to our form and inputs
//     var loginForm = $("form.login");
//     var emailInput = $("input#email-input");
//     var passwordInput = $("input#password-input");
  
//     // When the form is submitted, we validate there's an email and password entered
//     loginForm.on("submit", function(event) {
//       event.preventDefault();
//       var userData = {
//         email: emailInput.val().trim(),
//         password: passwordInput.val().trim()
//       };
  
//       if (!userData.email || !userData.password) {
//         return;
//       }
  
//       // If we have an email and password we run the loginUser function and clear the form
//       loginUser(userData.email, userData.password);
//       emailInput.val("");
//       passwordInput.val("");
//     });
  
//     // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
//     function loginUser(email, password) {
//       $.post("/api/login", {
//         email: email,
//         password: password
//       })
//         .then(function() {
//           window.location.replace("/members");
//           // If there's an error, log the error
//         })
//         .catch(function(err) {
//           console.log(err);
//         });
//     }
//   });
  