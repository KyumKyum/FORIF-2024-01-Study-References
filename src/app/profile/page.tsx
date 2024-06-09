"use client";

import Sidebar from "@/components/Sidebar";
import Specifics from "@/components/Specifics";
import languageStore from "@/store/languageStore";
import { observer } from "mobx-react";

const Profile = observer(() => {
  return (
    <div>
      <p>
        {languageStore.language === "en"
          ? "Jay Lim, a developer who loves workout."
          : "운동하는 개발자 임규민입니다 :)"}
      </p>
    </div>
  );
});

export default Profile;
