import React from "react";
import Sidebar from "../Sidebar";
import Specifics from "../Specifics";

interface CanvasProps {
  children: React.ReactNode;
}

export default function Canvas({ children }: CanvasProps) {
  return (
    <main className="flex flex-row h-svh">
      <Sidebar />
      <Specifics>{children}</Specifics>
    </main>
  );
}
