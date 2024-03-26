import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import DashBoardOrder from "@/Components/PagesComponents/DashBoardOrder/DashBoardOrder";
import OrderDelivery from "@/Components/PagesComponents/OrderDelivery/OrderDelivery";
import React from "react";

const OrderDeliveryPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="max-w-[1700px] mx-auto  lg:pl-[4%]">
        <div className="w-full flex">
          <DashBoardSideNav height="161vh" />
          <div className="w-full">
            <DashBoardNav title="Order #F06CE0914A11" />
            <OrderDelivery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeliveryPage;
