import Container from "@/Components/Container/Container";
import DashBoardNav from "@/Components/Dashboard/DashBoardNav";
import DashBoardSideNav from "@/Components/Dashboard/DashBoardSideNav";
import DashBoardContent from "@/Components/PagesComponents/DashBoardContent/DashBoardContent";
import MessageContent from "@/Components/PagesComponents/MessageContent/MessageContent";
import React from "react";

const MessagePage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div>
        <div className="w-full flex">
          <DashBoardSideNav height="100vh" />
          <div className="w-full">
            <DashBoardNav title="message" />
            <MessageContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
