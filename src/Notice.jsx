import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import NoticeBoard from './notice/NoticeBoard';
import SearchBar from './SearchBar';

const Notice = () => {
    return (
        <div className="notice-page">
            <header className="top-bar">
                <Link to="/" className="logo">
                    <span className="logo-icon">🍴</span>
                    <span className="logo-text">다이닝코드</span>
                </Link>
                <div className="right-section">
                    <SearchBar />
                    <Link to="/login" className="login-button">Login</Link>
                </div>
            </header>
            <NavBar />
            <main className="main-content">
                <div className="blue-banner">
                    <h2>공지사항</h2>
                    <button className="button button-teal">공지 작성</button>
                </div>
                <NoticeBoard />
            </main>
        </div>
    );
};

export default Notice;

