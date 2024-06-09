"use client";

import Image from "next/image";
import Avatar from "../../public/image/avatar.jpeg";
import { observer } from "mobx-react";
import languageStore from "@/store/languageStore";

const Sidebar = observer(() => {
  const moveBase = () => {
    window.location.replace("/");
  };

  return (
    <div className="flex flex-col h-full w-1/4 bg-[#b0eaff] items-center pt-5">
      <Image
        src={Avatar}
        alt="Avatar"
        className="w-[250px] h-[250px] rounded-full shadow-2xl"
        onClick={moveBase}
      />
      <p className="mt-10 text-[50px] font-bold">Jay Lim</p>
      <p className="text-center">
        {languageStore.language === "en"
          ? "Hello! Welcome to my blog."
          : "안녕하세요! 제 블로그에 오신 것을 환영합니다!"}
        <br />
        {languageStore.language === "en"
          ? "Hope you guys have a nice day :)"
          : "여러분들 모두가 행복한 하루 보내시기를 :)"}
      </p>
    </div>
  );
});

export default Sidebar;
