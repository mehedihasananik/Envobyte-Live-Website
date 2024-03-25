import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import DashBoardOrder from "@/Components/PagesComponents/DashBoardOrder/DashBoardOrder";
import ManageOrder from "@/Components/PagesComponents/ManageOrder/ManageOrder";
import React from "react";

const ManageOrderPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="max-w-[1700px] mx-auto  lg:pl-[4%]">
        <div className="w-full flex">
          <DashBoardSideNav />
          <div className="w-full">
            <DashBoardNav title="Manage-order" />
            <ManageOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrderPage;
