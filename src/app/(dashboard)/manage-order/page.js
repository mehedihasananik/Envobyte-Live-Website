import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import DashBoardOrder from "@/Components/PagesComponents/DashBoardOrder/DashBoardOrder";
import ManageOrder from "@/Components/PagesComponents/ManageOrder/ManageOrder";
import React from "react";

const ManageOrderPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div>
        <div className="w-full flex">
          <DashBoardSideNav height="100vh" />
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
