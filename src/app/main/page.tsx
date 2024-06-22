"use client";
import { observer } from "mobx-react";

const MainPage = observer(() => {
  return (
    <div>
        <button className="px-4 py-2 bg-white-500 text-black rounded-full hover:bg-blue-300 transition"
        >
          Upload
        </button>
    </div>
  );
});

export default MainPage;
