import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">

                <div class="container-fluid">
                    <h1> <Link to="/" class="navbar-brand p-2" href="#"><img src="logo.png" alt="Logo" /> NewsHub</Link></h1>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <Link to='/Home' class="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/General' class="nav-link" aria-current="page">General</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Business' class="nav-link" aria-current="page">Business</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Entertainment' class="nav-link" aria-current="page">Entertainment</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Health' class="nav-link" aria-current="page">Health</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Science' class="nav-link" aria-current="page">Science</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Sports' class="nav-link" aria-current="page">Sports</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Technology' class="nav-link" aria-current="page">Technology</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
