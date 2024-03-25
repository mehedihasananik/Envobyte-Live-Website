"use client";
import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuLayoutGrid } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";

const DashBoardSideNav = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: LuLayoutGrid },
    { name: "Message", link: "/message", icon: FiMessageSquare },
    { name: "New Order", link: "/new-order", icon: HiMenuAlt3 },
    { name: "Manage Order", link: "/manage-order", icon: FiLayers },
  ];
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      <div className="bg-[#8CD3FB1A]">
        <div className=" lg:flex lg:justify-end h-full bg-[#8CD3FB1A">
          <HiMenuAlt3
            size={26}
            className="relative top-[20px] left-[10px] cursor-pointer block lg:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div>
          <section className="flex gap-6  ">
            <div
              className={` min-h-screen flex flex-col justify-between ${
                open ? "w-44 lg:w-72" : "hidden"
              } duration-500 text-[16px] text-[#444444] px-6 `}
            >
              <div>
                <div className="mt-4 flex flex-col justify-between gap-4 relative">
                  <div className="lg:pl-[13%] pt-1">
                    <img src="/assets/logo.png" alt="" />
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
                          className={`whitespace-pre  text-[16px] hover:bg-[#FFFFFF] hover:text-[#FF693B] py-[2%] ${
                            !open && "opacity-0 translate-x-28 overflow-hidden"
                          }`}
                        >
                          {menu?.name}
                        </h2>
                        <h2
                          className={`${
                            open && "hidden"
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
    </div>
  );
};

export default DashBoardSideNav;
