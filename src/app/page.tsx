"use client";

import { text } from "stream/consumers";
import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import nameStore from '@/store/namestore';


const Home = observer(() => {
  const [invitationContent, setInvitationContent] = useState({})
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
    textShadow: '2px 2px 2px rgba(26, 109, 255, 0.5)',
    marginBottom: '20px',
    fontFamily: 'Pretendard-Regular, sans-serif',
    animation: 'fadeInUp 2s ease-out forwards', // 애니메이션을 적용합니다.
  };

  const nameStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    margin: '200px',
    fontFamily: 'Roboto, sans-serif',
    position: 'absolute',
    top: '20px',
  };

  useEffect(() => {
    setInvitationContent({
      en: {
        title: `You are Invited to 'It was a summer'!`,
        message: "Thank you for accepting our invitation."
      },
      ko: {
        title: `'여름이였다'에 초대합니다!`,
        message: "우리의 초대를 받아주셔서 감사합니다."
      }
    });
  }, [nameStore.name]);

  const router = useRouter();

  const handleInvitationClick = () => {
    setShowInvitation(!showInvitation);
    const dir = showInvitation ? '/image/초대장.png' : '/image/편지열기.png';
    setImagePath(dir);
  };

  const handleLoginClick = () => {
    router.push('/login');
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
      margin: 0,
      position: 'relative'
    }}>
      <div style={nameStyle}>{`To. ${nameStore.name || 'Guest'}`}</div>
      {showInvitation ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <h1 style={titleStyle}>{invitationContent[language]?.title}</h1>
          <p style={{ fontFamily: 'Roboto, sans-serif', color: 'white' }}>{invitationContent[language]?.message}</p>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button style={buttonStyle} onClick={handleInvitationClick}>
              {language === 'en' ? 'Back to Home' : '홈으로 돌아가기'}
            </button>
            <button style={buttonStyle} onClick={handleLoginClick}>
              {language === 'en' ? 'Accept Invitation' : '로그인으로 이동'}
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={titleStyle}>{language === 'en' ? 'Welcome to the It was a summer day' : '홈 페이지에 오신 것을 환영합니다'}</h1>
          <button style={buttonStyle} onClick={handleInvitationClick}>
            {language === 'en' ? 'Go to Invitation' : '초대장으로 이동'}
          </button>

        </div>
      )}
      {/* 글자가 천천히 올라오는 애니메이션을 정의합니다. */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>

  );
});

export default Home;