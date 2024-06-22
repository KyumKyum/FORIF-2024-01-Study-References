"use client";

import { text } from "stream/consumers";
import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";


const Login = observer(() => {
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
        <p className="mt-15 text-2xl font-bold !important">Welcome!</p>
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
      </div>
    </div>
  );
});

export default Login;
