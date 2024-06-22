"use client";
import { observer } from "mobx-react";

const MainPage = observer(() => {
  return (
    <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
        >
          Upload
        </button>
    </div>
  );
});

export default MainPage;
