import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        navigate('/');
    };

    return (
        <div className="login_page">
            <h1 className="titleWrap">Login</h1>
            <form onSubmit={handleSubmit} className="contentWrap">
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">로그인</Button>
                <Button onClick={() => {/* 구글 로그인 로직 */}}>구글 로그인</Button>
                <Button onClick={() => {/* 카카오 로그인 로직 */}}>카카오 로그인</Button>
                <Button onClick={() => {/* 네이버 로그인 로직 */}}>네이버 로그인</Button>
            </form>
            <div className="bottomWrapper">
                <Link to="/signup" className="joinLink">회원가입</Link>
                <Link to="/find-password" className="joinLink">비밀번호 찾기</Link>
            </div>
        </div>
    );
};

export default Login;