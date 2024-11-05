import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Join.css';
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";  // 경로는 실제 파일 위치에 맞게 조정

const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
}


export default function Join() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [phone, setPhone] = useState('');
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
            alert("등록되지 않은 회원입니다.");
        }
    }

    return (
        <div>
            <Header />
            <NavBar />
            <div className="join-container">
                <h2 className="join-title">회원가입</h2>

                <div className="join-form">
                    <div className="input-group">
                        <label className="input-label">이메일 주소</label>
                        <div className="input-wrapper">
                            <input
                                className={`input-field ${!emailValid && email.length > 0 ? 'error' : ''}`}
                                type="email"
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
                        <label className="input-label">비밀번호</label>
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

                    <div className="input-group">
                        <label className="input-label">비밀번호 확인</label>
                        <div className="input-wrapper">
                            <input
                                className={`input-field ${pw !== confirmPw && confirmPw.length > 0 ? 'error' : ''}`}
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요"
                                value={confirmPw}
                                onChange={(e) => setConfirmPw(e.target.value)}
                            />
                        </div>
                        {pw !== confirmPw && confirmPw.length > 0 && (
                            <div className="error-message">비밀번호가 일치하지 않습니다.</div>
                        )}
                    </div>

                    <div className="input-group">
                        <label className="input-label">전화번호</label>
                        <div className="input-wrapper">
                            <input
                                className="input-field"
                                type="tel"
                                placeholder="010-0000-0000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="verification-button"
                    onClick={onClickConfirmButton}
                    disabled={notAllow}
                >
                    가입하기
                </button>
            </div>
        </div>
    );
}