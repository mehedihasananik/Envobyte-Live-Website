"use client";

import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuLayoutGrid } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { Sidebar } from "flowbite-react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const DashBoardSideNav = ({ height }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: LuLayoutGrid },
    { name: "Message", link: "/message", icon: FiMessageSquare },
    { name: "New Order", link: "/new-order", icon: HiMenuAlt3 },
    { name: "Manage Order", link: "/manage-order", icon: FiLayers },
  ];

  return (
    <div className="relative">
      <div className="bg-[#8CD3FB1A] hidden md:block">
        <div className=" lg:flex lg:justify-end h-full bg-[#8CD3FB1A]">
          <HiMenuAlt3
            size={26}
            className="relative top-[20px] left-[10px] lg:left-0 lg:top-0 lg:relative cursor-pointer block lg:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <div className=" hidden lg:block">
          <section className="flex gap-6  ">
            <div
              style={{ height: height }}
              className={` h-[${height}] flex flex-col justify-between w-44 lg:w-72 duration-500 text-[16px] text-[#444444] px-6`}
            >
              <div>
                <div className="mt-4 flex flex-col justify-between gap-4 relative">
                  <div className="lg:pl-[13%] pt-1">
                    <Link href={"/"}>
                      {" "}
                      <img src="/assets/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="w-full">
                    {menus?.map((menu, i) => (
                      <Link
                        href={menu?.link}
                        key={i}
                        className={` ${
                          menu?.margin && "mt-6"
                        } group flex items-center text-sm  gap-3.5 font-[400] p-2 hover:bg-[#FFFFFF] hover:text-[#FF693B] rounded-md`}
                      >
                        <div>
                          {React.createElement(menu?.icon, { size: "20" })}
                        </div>
                        <h2
                          className={`whitespace-pre  text-[16px] hover:bg-[#FFFFFF] hover:text-[#FF693B] py-[2%] `}
                        >
                          {menu?.name}
                        </h2>
                        <h2
                          className={` bg-white font-semibold whitespace-pre  rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden hover:bg-[#FFFFFF] hover:text-[#FF693B]`}
                        >
                          {menu?.name}
                        </h2>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <button className="flex justify-left items-center mb-10 gap-3 text-[16px] text-[#444444] hover:bg-[#FFFFFF] hover:text-[#FF693B] w-full py-2 px-2 ">
                  <span>
                    <LuLogOut />
                  </span>{" "}
                  Logout
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className=" lg:hidden">
          <section className="flex gap-6  ">
            <div
              style={{ height: height }}
              className={` h-[${height}] flex flex-col justify-between ${
                showSidebar ? "w-44 lg:w-72 block" : "hidden"
              } duration-500 text-[16px] text-[#444444] px-6 `}
            >
              <div>
                <div className="mt-4 flex flex-col justify-between gap-4 relative">
                  <div className="lg:pl-[13%] pt-1">
                    <Link href={"/"}>
                      {" "}
                      <img src="/assets/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="w-full">
                    {menus?.map((menu, i) => (
                      <Link
                        href={menu?.link}
                        key={i}
                        className={` ${
                          menu?.margin && "mt-6"
                        } group flex items-center text-sm  gap-3.5 font-[400] p-2 hover:bg-[#FFFFFF] hover:text-[#FF693B] rounded-md`}
                      >
                        <div>
                          {React.createElement(menu?.icon, { size: "20" })}
                        </div>
                        <h2
                          className={`whitespace-pre  text-[16px] hover:bg-[#FFFFFF] hover:text-[#FF693B] py-[2%] `}
                        >
                          {menu?.name}
                        </h2>
                        <h2
                          className={`${
                            !showSidebar && "hidden"
                          } absolute left-48 bg-white font-semibold whitespace-pre  rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden hover:bg-[#FFFFFF] hover:text-[#FF693B]`}
                        >
                          {menu?.name}
                        </h2>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <button className="flex justify-left items-center mb-10 gap-3 text-[16px] text-[#444444] hover:bg-[#FFFFFF] hover:text-[#FF693B] w-full py-2 px-2 ">
                  <span>
                    <LuLogOut />
                  </span>{" "}
                  Logout
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="md:hidden z-50">
        <button className="absolute top-[1.8%] left-[40px]">
          <RiBarChartHorizontalLine
            className="text-[20px]"
            onClick={toggleSidebar}
          />
        </button>
        {showSidebar && (
          <Sidebar className="pt-[32%]" aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                  Kanban
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        )}
      </div>
    </div>
  );
};

export default DashBoardSideNav;
