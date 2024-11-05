// NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-menu">
            <ul>
                <li><NavLink to="/main" activeClassName="active">홈</NavLink></li>
                <li><NavLink to="/notice" activeClassName="active">공지사항</NavLink></li>
                <li><NavLink to="/QnABoard" activeClassName="active">QnA</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;

