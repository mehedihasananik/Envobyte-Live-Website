import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import DashBoardOrder from "@/Components/PagesComponents/DashBoardOrder/DashBoardOrder";
import React from "react";

const DashBoardOrderPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="max-w-[1700px] mx-auto  lg:pl-[4%]">
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
