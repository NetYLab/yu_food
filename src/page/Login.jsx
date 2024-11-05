import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Join.css';  // 스타일은 공유해서 사용
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";

const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };

    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw) {
            alert('로그인에 성공했습니다.')
        } else {
            alert("이메일 또는 비밀번호를 확인해주세요.");
        }
    }

    return (
        <div>
            <Header />
            <NavBar />
            <div className="join-container">
                <h1 className="join-title">
                    로그인
                </h1>

                <div className="join-form">
                    <div className="input-group">
                        <div className="input-label">이메일</div>
                        <div className="input-wrapper">
                            <input
                                className={`input-field ${!emailValid && email.length > 0 ? 'error' : ''}`}
                                type="text"
                                placeholder="test@gmail.com"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        {!emailValid && email.length > 0 && (
                            <div className="error-message">올바른 이메일을 입력해주세요.</div>
                        )}
                    </div>

                    <div className="input-group">
                        <div className="input-label">비밀번호</div>
                        <div className="input-wrapper">
                            <input
                                className={`input-field ${!pwValid && pw.length > 0 ? 'error' : ''}`}
                                type="password"
                                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                                value={pw}
                                onChange={handlePw}
                            />
                        </div>
                        {!pwValid && pw.length > 0 && (
                            <div className="error-message">영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                    </div>
                </div>

                <button
                    className="submit-button"
                    onClick={onClickConfirmButton}
                    disabled={notAllow}
                >
                    로그인
                </button>

                <div className="login-links">
                    <Link to="/join" className="link">회원가입</Link>
                    <span className="divider">|</span>
                    <Link to="/FindIdPage" className="link">아이디 찾기</Link>
                    <span className="divider">|</span>
                    <Link to="/FindPasswordPage" className="link">비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}