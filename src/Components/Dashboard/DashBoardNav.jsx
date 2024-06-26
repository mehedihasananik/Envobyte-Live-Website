"use client";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DashBoardNav = ({ title }) => {
  return (
    <nav className="flex flex-col justify-center items-center md:flex-row md:justify-between w-[100%] py-4 px-5 lg:pr-12">
      <div>
        <h3 className="text-[#333] text-[28px] md:text-[30px] font-[600] capitalize px-5 py-3">
          {title}
        </h3>
      </div>
      <div>
        <ul className="flex items-center gap-x-7 pt-4">
          <Link
            href={"/"}
            className="text-[18px] hover:text-[#FF693B] transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href={"/portfolio"}
            className="text-[18px] hover:text-[#FF693B] transition-all duration-200"
          >
            Portfolio
          </Link>
          <Link href={"/"}>
            <img src="/assets/Active-Notification.png" alt="" />
          </Link>
          <button className="flex gap-3 items-center">
            <Dropdown
              label="Ryan Milan"
              dismissOnClick={false}
              renderTrigger={() => (
                <span>
                  {
                    <div className="flex gap-x-4 items-center">
                      <span>
                        {" "}
                        <img src="/assets/dashperson.png" alt="" />
                      </span>
                      <span className="flex items-center gap-x-4 text-[16px] hover:text-[#FF693B] transition-all duration-200">
                        Ryan Milan{" "}
                      </span>
                      <MdKeyboardArrowDown className="text-[24px] cursor-pointer" />
                    </div>
                  }
                </span>
              )}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default DashBoardNav;
