import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Form } from '../components/common/Form';
import { FormItem } from '../components/common/FormItem';
import './FindId.css';

const FindIdPage = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleSendVerificationCode = () => {
        console.log('인증 코드 전송');
    };

    const handleVerify = () => {
        console.log('인증 코드 확인');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ID 찾기 요청', { name, phoneNumber, email, verificationCode });
    };

    return (
        <div>
            <header className="top-bar">
                <Link to="/" className="logo">
                    <span style={{color: '#26baa4'}}>🍴</span>다이닝코드
                </Link>
                <div className="right-section">
                    <div className="search-bar-container">
                        <div className="search-bar">
                            <input type="text" placeholder="검색어를 입력하세요"/>
                            <span className="search-icon">🔍</span>
                        </div>
                    </div>
                    <Link to="/login" className="home-button">Login</Link>
                </div>
            </header>

            <NavBar />

            <div className="blue-banner">
                <h2>ID 찾기</h2>
            </div>

            <div className="content-area">
                <div className="board-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
                    <Form onSubmit={handleSubmit}>
                        <FormItem>
                            <Input
                                type="text"
                                placeholder="이름"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                type="tel"
                                placeholder="전화번호"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </FormItem>
                        <FormItem className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="이메일"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-grow"
                            />
                            <Button type="button" onClick={handleSendVerificationCode}>
                                인증번호 전송
                            </Button>
                        </FormItem>
                        <FormItem className="flex gap-2">
                            <Input
                                type="text"
                                placeholder="인증번호"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                required
                                className="flex-grow"
                            />
                            <Button type="button" onClick={handleVerify}>
                                인증
                            </Button>
                        </FormItem>
                        <Button type="submit" className="w-full">
                            ID 찾기
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FindIdPage;