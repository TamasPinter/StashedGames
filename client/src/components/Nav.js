import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
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