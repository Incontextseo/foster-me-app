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
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/search">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/fosters">My Fosters</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/history">My Past Fosters</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Nav