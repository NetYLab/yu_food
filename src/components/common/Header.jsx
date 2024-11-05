import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoIcon from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img
                    src={logoIcon}
                    alt="YU FOOD 로고"
                    className="logo-icon"
                />
                <span className="logo-text">YU FOOD</span>
            </Link>

            <div className="header-right">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="검색어를 입력하세요"
                    />
                    <span className="search-icon">🔍</span>
                </div>
                <Link to="/login" className="login-button">
                    Login
                </Link>
            </div>
        </header>
    );
};

export default Header;