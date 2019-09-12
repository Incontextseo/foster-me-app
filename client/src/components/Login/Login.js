import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                This is the Login! Once logged in, you see a menu of buttons to go to:
                - Search Fosters
                - My Fosters
                - Foster History
            </div>
        )
    }
}

export default Login