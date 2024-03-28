import Container from "@/Components/Container/Container";
import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import DashBoardContent from "@/Components/PagesComponents/DashBoardContent/DashBoardContent";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div>
        <div className="w-full flex">
          <DashBoardSideNav height="100vh" />
          <div className="w-full ">
            <DashBoardNav title="dashboard" />
            <DashBoardContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
