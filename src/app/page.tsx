"use client";

import { text } from "stream/consumers";
import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";


const Home = observer(() => {
  const [invitationContent, setInvitationContent] = useState({});
  const [showInvitation, setShowInvitation] = useState(false);
  const [imagePath, setImagePath] = useState('/image/초대장.png');


  const language = languageStore.language || 'en'; 

  const buttonStyle = {
    backgroundColor: 'rgba(0, 0.2, 0.3, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif'
  };

  const titleStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
    fontFamily: 'Roboto, sans-serif'
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
    </div>
    
  );
});

export default Home;
