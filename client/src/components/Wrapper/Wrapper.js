import React, { Component } from 'react'
import './Wrapper.css'

class Wrapper extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                This is the Wrapper!
            </div>
        );
    }
}

// function Wrapper(props) {
//     return <main className="wrapper" {...props} />;
//   }


export default Wrapper