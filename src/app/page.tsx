"use client";

import { text } from "stream/consumers";
import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Home = observer(() => {

  const UserName = useRef(null);
  const UserPassWord = useRef(null);

  return (

    <div className="flex flex-col h-full w-full bg-sky-100 justify-center items-center">

        <div className="flex flex-col h-1/2 w-1/3 bg-white justify-center items-center shadow-2xl rounded-lg">

          <p className="mt-5 text-5xl text-center font-extrabold">로그인하세요</p>

          <div className="flex flex-col h-15 w-72 bg-white shadow-sm">
            <textarea className="text-md" ref={UserName}>이름</textarea>
          </div>

          <div className="mt-10 flex flex-col h-15 w-72 bg-white shadow-sm">
            <textarea className="text-md" ref={UserPassWord}>비밀번호</textarea>
          </div>

          </div>
    </div>
    
  );
});
export default Home;
