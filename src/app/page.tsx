"use client";

import Sidebar from "@/components/Sidebar";
import Specifics from "@/components/Specifics";
import { useEffect, useState } from "react";

export default function Home() {
  const [ctr, setCtr] = useState(0);

  const increment = () => {
    setCtr(ctr + 1);
  };

  useEffect(() => {
    // Functions to execute
    console.log("Hello! I'm useEffect!");
  }, [ctr]);

  return (
    <div>
      <p className="text-2xl">{ctr}</p>
      <button onClick={increment}>Increase!</button>
    </div>
  );
}
