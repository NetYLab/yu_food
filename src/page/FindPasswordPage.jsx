import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Form } from '../components/Form';
import { FormItem } from '../components/FormItem';

const FindPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const handleSendVerificationCode = () => {
        // 실제 구현에서는 이메일로 인증 코드를 보내는 로직을 추가해야 합니다.
        console.log('인증 코드 전송 to', email);
        setIsCodeSent(true);
    };

    const handleVerify = () => {
        // 실제 구현에서는 인증 코드를 확인하는 로직을 추가해야 합니다.
        console.log('인증 코드 확인', verificationCode);
        setIsVerified(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 실제 구현에서는 서버에 비밀번호 재설정 요청을 보내는 로직을 추가해야 합니다.
        console.log('비밀번호 재설정 요청', { email });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">비밀번호 찾기</h2>
            <Form onSubmit={handleSubmit}>
                <FormItem className="flex gap-2">
                    <Input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-grow"
                    />
                    <Button type="button" onClick={handleSendVerificationCode} disabled={isCodeSent}>
                        {isCodeSent ? '전송됨' : '인증번호 전송'}
                    </Button>
                </FormItem>
                {isCodeSent && (
                    <FormItem className="flex gap-2">
                        <Input
                            type="text"
                            placeholder="인증번호"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            className="flex-grow"
                        />
                        <Button type="button" onClick={handleVerify} disabled={isVerified}>
                            {isVerified ? '인증됨' : '인증'}
                        </Button>
                    </FormItem>
                )}
                <Button type="submit" className="w-full mt-4" disabled={!isVerified}>
                    비밀번호 재설정
                </Button>
            </Form>
        </div>
    );
};

export default FindPasswordPage;