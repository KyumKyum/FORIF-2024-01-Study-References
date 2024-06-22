"use client";

import { text } from "stream/consumers";
import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";


const Home = observer(() => {

  const UserName = useRef(null);
  const UserPassWord = useRef(null);

  return (
    <div
      className="flex flex-col h-full w-full bg-sky-100 justify-center items-center"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D)', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: '20px',
    }}>

        <div className="mt-5 flex flex-col h-1/2 w-1/3 bg-white shadow-2xl justify-center items-center rounded-xl">

          <p className="text-3xl font-extrabold">로그인하세요</p>
          <p className="mt-2 text-md">추억의 사진을 색다르게 기억해보세요</p>

          <div className="mt-8 flex flex-col h-[50px] w-72 border-[1px] border-gray-800 bg-white rounded-lg">
            <textarea 
              className="text-lg content-center placeholder-gray-600 rounded-lg" 
              ref={UserName}
              placeholder="이름">
            </textarea>
          </div>

          <div className="mt-3 flex flex-col h-[50px] w-72 border-[1px] border-gray-800 bg-white rounded-lg">
            <textarea 
              className="text-lg content-center placeholder-gray-600 rounded-lg" 
              ref={UserPassWord}
              placeholder="비밀번호">
              </textarea>
          </div>

          <Link href="/main">
            <div className="mt-5 flex flex-col h-10 w-60 text-white bg-blue-600 justify-center items-center rounded-2xl hover:bg-blue-700 transition">로그인</div>
          </Link>

          </div>
    </div>
    
  );
});
export default Home;
