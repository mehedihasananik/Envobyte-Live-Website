import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DashBoardNav = ({ title }) => {
  return (
    <nav className="flex flex-col justify-center items-center md:flex-row md:justify-between w-[100%] py-4 px-2">
      <div>
        <h3 className="text-[#333] text-[32px] md:text-[40px] font-[600] capitalize px-5">
          {title}
        </h3>
      </div>
      <div>
        <ul className="flex items-center gap-3 pt-4">
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
            <img src="/assets/dashperson.png" alt="" />
            <span className="flex items-center gap-x-4 text-[16px] hover:text-[#FF693B] transition-all duration-200">
              Ryan Milan{" "}
              <MdKeyboardArrowDown className="text-[24px] text-[#9EA5B1]" />
            </span>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default DashBoardNav;
