import React, { Component } from 'react'
import './Login.css'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
// import Register from '../Register/Register';
import { Redirect } from 'react-router';
<<<<<<< HEAD
class Login extends Component {
   state = {
       email: "",
       password: "",
       redirect: false
   }
   componentWillUnmount() {
       window.clearTimeout(this.timeout)
   }
   Login = () => {
       axios.post('/api/auth/login', this.state)
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
   render() {
       return (
       <div className="container">
             {this.state.redirect?<Redirect to ="/fosters" /> : null}
               <div className="row">
                   <div className="col-md-6 col-md-offset-3">
                       <h2>Login Form</h2>
                       <form className="login" />
                       <div className="form-group">
                           <label htmlFor="exampleInputEmail1">Email address </label>
                           <input type="email" className="form-control" id="email-input" placeholder="Email" value={this.state.email}
                               name="email"
                                onChange={this.handleInputChange}
                               />
                           </div>
                       <div className="form-group">
                           <label htmlFor="exampleInputPassword1">Password </label>
                           <input type="password" className="form-control" id="password-input" placeholder="Password" value={this.state.password}
                               name="password"
                                onChange={this.handleInputChange}
                               />
                       </div>
                       <button  type="submit" className="search__btn" onClick={this.Login} >Log In</button>
                       <br />
                       {/* <Router> */}
                           <div>
                           <p>Or sign up <a href="/signup">here</a></p>
                       {/* <Route exact path="/signup" component={Register} /> */}
                           </div>
                       {/* </Router> */}
                   </div>
           </div>
        </div>
       )
   }
}
=======


class Login extends Component {
    state = {
        email: "",
        password: "",
        redirect: false
    }
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    Login = () => {
        axios.post('/api/auth/login', this.state)
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
      
    render() {
        return (
        <div className="container">
              {this.state.redirect?<Redirect to ="/fosters" /> : null}
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
                        <button  type="submit" className="btn btn-default" onClick={this.Login} >Log In</button>
                        <br />
                        {/* <Router> */}
                            <div>
                            <p>Or sign up <a href="/signup">here</a></p>
                        {/* <Route exact path="/signup" component={Register} /> */}
                            </div>
                        {/* </Router> */}
                    </div>
            </div> 
         </div>
        )    
    }
}

>>>>>>> 2a36e05a44986093c20e48da8c34220d238bf9f3
export default Login;