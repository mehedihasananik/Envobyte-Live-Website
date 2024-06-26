import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import DashBoardOrder from "@/Components/PagesComponents/DashBoardOrder/DashBoardOrder";
import React from "react";

const DashBoardOrderPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div>
        <div className="w-full flex">
          <DashBoardSideNav height="100vh" />
          <div className="w-full">
            <DashBoardNav title="new-order" />
            <DashBoardOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardOrderPage;
