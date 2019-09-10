import React, { Component } from 'react'
import './Animals.css'

class Animals extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                This is the list of Animals!
            </div>
        )
    }
}

export default Animals