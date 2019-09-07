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
                            <a class="nav-link active" href="/">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/sign-up">New</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/fosters">Current</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="/history" tabindex="-1" aria-disabled="true">History</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Nav