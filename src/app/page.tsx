"use client";

import Image from "next/image";
import Avatar from "../../public/image/avatar.jpeg";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Specifics from "@/components/Specifics";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import darkModeStore from "@/store/darkModeStore";

const Home = observer(() => {
  const darkMode = darkModeStore.isDarkMode;

  return (
    <div>
      {darkMode ? <div>DARK!</div> : <div>WHITE!</div>}
      <button
        onClick={() => {
          darkModeStore.setDarkMode(!darkMode);
        }}
      >
        Change Mode
      </button>
    </div>
  );
});

export default Home;
