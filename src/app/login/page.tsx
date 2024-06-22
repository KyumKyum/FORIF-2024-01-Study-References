"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { observer } from "mobx-react";
import languageStore from "@/store/languageStore";

const Login = observer(() => {
  const UserName = useRef(null);
  const UserPassWord = useRef(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: input })
      });
      const data = await response.json();
      if (response.ok) {
        setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: data.response }]);
      } else {
        console.error('Error:', data);
        setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: '안녕'}]);
      }
    } catch (error) {
      console.error('Request failed', error);
      setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: '안녕' }]);
    }
    setInput('');
  };

  return (
    <div className="flex flex-col h-full w-full bg-sky-100 justify-center items-center"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: '30px',
        fontFamily: 'Pretendard-Regular, sans-serif',
      }}
    >
      <div className="mt-5 flex flex-col h-1/2 w-1/3 bg-white shadow-2xl bg-opacity-50 border-1 border-white-500 border-opacity-130 justify-center items-center rounded-xl">
        <p className="mt-15 text-2xl font-extrabold">Welcome!</p>
        <p className="mt-1 text-md font-normal">Remember your memories in a different way</p>

        <div className="mt-8 flex flex-col h-[50px] w-72 border-[1px] border-white-800 bg-white rounded-lg">
          <textarea 
            className="ml-3 text-lg content-center placeholder-white-100 rounded-xl font-medium" 
            ref={UserName}
            placeholder="Name"
          />
        </div>

        <div className="mt-3 flex flex-col h-[50px] w-72 border-[1px] border-white-800 bg-white rounded-lg">
          <textarea 
            className="ml-3 text-lg content-center placeholder-white-600 rounded-lg font-normal" 
            ref={UserPassWord}
            placeholder="Password"
          />
        </div>

        <Link href="/main">
          <div className="mt-5 flex flex-col h-10 w-60 text-white bg-blue-600 justify-center items-center rounded-full font-semibold">Login</div>
        </Link>

        <button 
          className="mt-5 flex flex-col h-10 w-60 text-white bg-green-600 justify-center items-center rounded-full font-semibold"
          onClick={() => setShowChatbot(!showChatbot)}
        >
          {showChatbot ? 'Close Chatbot' : 'Chat with us'}
        </button>
      </div>
      
      {showChatbot && (
        <div className="fixed bottom-10 right-10 w-1/3 h-1/3 bg-white shadow-2xl rounded-xl p-5">
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="flex">
              <input 
                type="text" 
                className="flex-grow border border-gray-300 p-2 rounded-l-lg"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button 
                className="bg-blue-600 text-white p-2 rounded-r-lg"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Login;
