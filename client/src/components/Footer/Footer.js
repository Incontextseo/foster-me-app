import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                This is the Footer!
            </div>
        )
    }
}

export default Footer