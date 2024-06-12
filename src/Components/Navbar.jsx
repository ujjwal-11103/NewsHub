import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">
                    <h1> <Link to="/" className="navbar-brand p-2" href="#"><img src="logo.png" alt="Logo" /> NewsHub</Link></h1>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to='/Home' className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/General' className="nav-link" aria-current="page">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Business' className="nav-link" aria-current="page">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Entertainment' className="nav-link" aria-current="page">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Health' className="nav-link" aria-current="page">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Science' className="nav-link" aria-current="page">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Sports' className="nav-link" aria-current="page">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Technology' className="nav-link" aria-current="page">Technology</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
