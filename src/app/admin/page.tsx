"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import nameStore from '../../store/namestore';

const Admin = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const router = useRouter();

  const handleSendInvitation = async () => {
    nameStore.setName(name); // 이름을 저장
    
    // 성공적으로 전송 
    setStatus('Invitation sent successfully');

    // 초대장 전송 후 페이지로 이동
    setTimeout(() => {
      router.push(`/`);
    }, 2000); // 2초 후에 이동
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Join us, Summertime</h1>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />
        </div>
        <button onClick={handleSendInvitation} style={styles.button}>
          Send Invitation
        </button>
        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url('/image/초대장.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: 0,
    margin: 0,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center' as 'center',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box' as 'border-box',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box' as 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  status: {
    marginTop: '20px',
    color: 'green',
    textAlign: 'center' as 'center',
  },
};

export default Admin;
