"use client";

import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

const Home = observer(() => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [imagePath, setImagePath] = useState('/image/초대장.png');

  const language = languageStore.language || 'en'; 

  const buttonStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    fontSize: '16px',
    fontFamily: 'Pretendard-Regular, sans-serif',
    transition: 'background-image 0.3s ease',  // hover 효과를 부드럽게 만들기 위한 transition 추가
  };
  
  const buttonHoverStyle = {
    backgroundImage: 'linear-gradient(to top, rgba(217, 185, 255, 0.7), rgba(217, 185, 255, 0.2))',  // hover 시 그라데이션 효과를 더 강조합니다.
  };

  const titleStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
    fontFamily: 'Pretendard-Regular, sans-serif'
  };

  const handleInvitationClick = () => {
    setShowInvitation(!showInvitation);
    const dir = showInvitation ? '/image/초대장.png' : '/image/편지열기.png';
    setImagePath(dir);
    console.log(dir)
  };

  return (
    <div style={{
      backgroundImage: `url(${imagePath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      margin: 0
    }}>
      {showInvitation ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div>
            {/* 추가적인 내용이 여기에 들어갑니다. */}
          </div>
          <button style={{ ...buttonStyle, marginTop: 'auto' }} onClick={handleInvitationClick}>
            {language === 'en' ? 'Back to Home' : '홈으로 돌아가기'}
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={titleStyle}>{language === 'en' ? 'Welcome to the It was a summer day' : '홈 페이지에 오신 것을 환영합니다'}</h1>
          <button style={buttonStyle} onClick={handleInvitationClick}>
            {language === 'en' ? 'Go to Invitation' : '초대장으로 이동'}
          </button>
        </div>
      )}
    <style jsx global>{`
      @font-face {
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
      }
      body {
        font-family: 'Pretendard', sans-serif;
      }
    `}</style>
    </div>
  );
});

export default Home;
