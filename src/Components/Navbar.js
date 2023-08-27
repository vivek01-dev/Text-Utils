import React from 'react'
import { Link } from 'react-router-dom'
// import { a } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">{props.title}</Link>
                <div className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                    <span className="navbar-hrefggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                        <li className="nav-item">
                            <li className="nav-a active" aria-current="page" href="/">Home</li>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-a" href="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}
