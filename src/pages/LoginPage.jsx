import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Gig-Vibe</h1>
      <div className="login-box">
        <input type="text" placeholder="아이디" className="input-field" />
        <input type="password" placeholder="비밀번호" className="input-field" />
        <button className="login-button">로그인</button>
        <div className="additional-options">
          <button className="forgot-password">비밀번호 찾기</button>
          <button className="signup" onClick={handleSignUpClick}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

