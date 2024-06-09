"use client";

import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

const Home = observer(() => {
  return (
    <div>
      <button
        className="flex w-60 h-10 bg-black text-white"
        onClick={languageStore.changeLanguage}
      >
        {languageStore.language === "en" ? "Language: English" : "언어: 한국어"}
      </button>
    </div>
  );
});
export default Home;
