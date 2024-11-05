import React from 'react';
import useNotices from '../hooks/useNotices';
import { useNavigate } from 'react-router-dom';

const NoticeBoard = () => {
    const { notices, isLoading, error } = useNotices();
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleRowClick = (id) => {
        navigate(`/notice/${id}`);
    };

    return (
        <div className="board-container">
            <table className="board-table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회</th>
                </tr>
                </thead>
                <tbody>
                {notices.map((notice) => (
                    <tr
                        key={notice.id}
                        onClick={() => handleRowClick(notice.id)}
                        className="clickable-row"
                        style={{ cursor: 'pointer' }} // 마우스 오버 시 커서 변경을 위해 추가
                    >
                        <td>{notice.id}</td>
                        <td>{notice.title}</td>
                        <td>{notice.author}</td>
                        <td>{notice.date}</td>
                        <td>{notice.views}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default NoticeBoard;