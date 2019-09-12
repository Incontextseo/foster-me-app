import React, { Component } from 'react'
import './Filter.css'

class Filter extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                This is the Search Filter!
            </div>
        )
    }
}

export default Filter