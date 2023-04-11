import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import banner from '../images/banner.png'

const Nav = () => {

    const [activeLink, setActiveLink] = useState('home');

    const [links, setLinks] = useState([
        { name: 'home', path: '/' },
        { name: 'login', path: '/login' },
        { name: 'signup', path: '/signup' },
        { name: 'profile', path: '/profile' },
    ]);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    return (
        
        <nav className="navbar navbar-expand-sm navbar-light d-block bg-light">
            {/* < div className="banner vw-100"> */}
                <img src={banner} alt='banner'  height="200px" className="vw-100"/>
            {/* </div> */}
            <div className="container-fluid ">
                
                <a className="navbar-brand" href="#">Navbar</a>
                
                
                <div className="collapse navbar-collapse mb-4" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/signup">Signup</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </div>
                </div>
                
            </div>
        </nav>
    );
};

export default Nav;