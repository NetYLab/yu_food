import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-links">
                    <Link
                        to="/main"
                        className={location.pathname === '/main' ? 'active' : ''}
                    >
                        홈
                    </Link>
                    <Link
                        to="/notice"
                        className={location.pathname === '/notice' ? 'active' : ''}
                    >
                        공지사항
                    </Link>
                    <Link
                        to="/QnABoard"
                        className={location.pathname === '/QnABoard' ? 'active' : ''}
                    >
                        QnA
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;