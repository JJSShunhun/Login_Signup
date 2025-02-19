import React from 'react';
import '../assets/css/SignUpPage.css';

function SignUpPage() {
  return (
    <div className="signup-container">
      <h1 className="signup-title">회원가입</h1>
      <div className="signup-box">
        <input type="text" placeholder="아이디" className="input-field" />
        <input type="password" placeholder="비밀번호" className="input-field" />
        <input type="text" placeholder="이름" className="input-field" />
        <input type="text" placeholder="닉네임" className="input-field" />
        <input type="email" placeholder="이메일 주소" className="input-field" />
        <button className="signup-button">회원가입 완료</button>
      </div>
    </div>
  );
}

export default SignUpPage;
