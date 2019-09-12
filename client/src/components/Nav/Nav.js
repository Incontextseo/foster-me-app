import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    render() {
        return (
            <nav className="pinned">
                <div>
                    <ul className="nav navList justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/fosters">My Fosters</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/history">My Past Fosters</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Nav