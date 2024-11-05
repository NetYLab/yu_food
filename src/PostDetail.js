import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const samplePost = {
                id: id,
                title: "이거 어떻게 해요?",
                author: "윤민서",
                date: "2024.09.01",
                content: "React 공부 하고 있습니다",
                votes: 5,
                views: 120
            };
            setPost(samplePost);
        };

        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <div className="top-bar">
                <Link to="/" className="logo">
                    <span style={{color: '#26baa4'}}>🍴</span>다이닝코드
                </Link>
                <div className="right-section">
                    <div className="search-bar">
                        <input type="text"/>
                        <span className="search-icon">🔍</span>
                    </div>
                    <Link to="/login" className="home-button">Login</Link>
                </div>
            </div>
            <div className="blue-banner">
                <h2>QnA</h2>
                <button className="button button-teal">
                    글 작성
                </button>
            </div>
            <div className="content-area">
                <div className="post-detail">
                    <h2>{post.title}</h2>
                    <div className="post-info">
                        <div className="post-info-item">
                            <span className="post-info-label">작성자:</span>
                            <span>윤민서</span>
                        </div>
                        <div className="post-info-item">
                            <span className="post-info-label">작성일:</span>
                            <span>2024.09.01</span>
                        </div>
                        <div className="post-info-item">
                            <span className="post-info-label">추천:</span>
                            <span>5</span>
                        </div>
                        <div className="post-info-item">
                            <span className="post-info-label">조회:</span>
                            <span>120</span>
                        </div>
                    </div>
                    <div className="post-content">
                        {post.content}
                    </div>
                    <Link to="/QnABoard" className="button button-teal">목록으로 돌아가기</Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;