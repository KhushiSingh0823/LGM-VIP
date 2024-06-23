import React from 'react';
import '../styles/UserCard.css';

const Navbar =({ getUsers }) =>{
    return (
        <nav className="navbar">
            <span className="brand">LetsGrowMore</span>
            <button onClick = {getUsers} className="get-users-btn">Get Users</button>
        </nav>
    );
};

export default Navbar;