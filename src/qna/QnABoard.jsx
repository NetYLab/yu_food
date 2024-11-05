import React from 'react';
import { Link } from 'react-router-dom';
import { QnABoardTable } from './QnABoardTable';
import { useQnAPosts } from '../hooks/useQnAPosts';
import NavBar from '../components/common/NavBar';
import SearchBar from '../components/SearchBar';

const QnABoard = () => {
    const { posts, isLoading, error } = useQnAPosts();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="qna-page">
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
                    <h2>QnA</h2>
                    <button className="button button-teal">
                        글 작성
                    </button>
                </div>
                <div className="content-area">
                    <QnABoardTable posts={posts} />
                </div>
            </main>
        </div>
    );
};

export default QnABoard;