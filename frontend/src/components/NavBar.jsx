import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import Logo from '/extra/logo.png'

const NavBar = () => {
    return (
        <>

            <ul className="navbar-menu">
                <Link to="/">
                    <img className='logo' src={Logo} alt="logo" />
                </Link>
                <Link to="/reg">
                    <li><a>Reg</a></li>
                </Link>
                <Link to="/login">
                    <li><a>Login</a></li>
                </Link>
                <Link to="/about">
                    <li><a>About</a></li>
                </Link>
                <Link to="/">
                    <li><a>Home</a></li>
                </Link>
            </ul>



        </>
    )
}

export default NavBar