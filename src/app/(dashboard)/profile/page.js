import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import Profile from "@/Components/Profile/Profile";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div>
        <div className="w-full flex">
          <DashBoardSideNav height="100vh" />
          <div className="w-full">
            <DashBoardNav title="Profile" />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
