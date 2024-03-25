"use client";
import Container from "@/Components/Container/Container";
import React, { useRef, useState } from "react";

const RequirementContent = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = () => {
    // Handle file input change here if needed
  };

  return (
    <div className="pt-5">
      <Container>
        <div className="bg-[#F4F4F4] p-5 md:p-10 rounded-md">
          {/* title */}
          <div>
            <h3 className="text-[36px] font-Raleway font-[600] text-[#333333] px-4">
              Requirements
            </h3>
          </div>
          {/* form */}
          <div className=" pt-5">
            <form className="bg-[#FFFFFF] rounded-md">
              <div className=" mb-4 px-5 pt-5 pb-1 rounded-t-md ">
                <label
                  htmlFor="businessName"
                  className="block text-[18px] font-Raleway font-[600] text-[#444444] mb-2 space-x-1 "
                >
                  <span className="bg-[#EBEBEB] text-[14px] font-[600] py-[4px]  px-[8px] rounded-full font-Raleway text-center">
                    <span> 1</span>
                  </span>{" "}
                  <span>What is your Logo or Business name?</span>
                </label>
                <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-4 px-8">
                  <input
                    type="text"
                    id="businessName"
                    className="w-full md:w-[85%] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-[16px] font-Raleway  text-[#323941] font-[400] "
                    placeholder="Write your answer here"
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg-[#FFF3EF] text-[16px] text-[#FF693B] font-[600] px-10 py-2.5 rounded-md whitespace-nowrap"
                  >
                    Attach file
                  </button>
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </div>
              </div>
              <div className="mb-4  px-5 pt-2 pb-1 rounded-t-md">
                <label
                  htmlFor="businessName"
                  className="block text-[18px] font-Raleway font-[600] text-[#444444] mb-2 space-x-1"
                >
                  <span className="bg-[#EBEBEB] text-[14px] font-[600] py-[4px]  px-[8px] rounded-full font-Raleway text-center">
                    <span>2</span>
                  </span>{" "}
                  <span>
                    Provide a brief description of your brand, company or
                    business etc.
                  </span>
                </label>
                <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-4 px-8">
                  <input
                    type="text"
                    id="businessName"
                    className="w-full md:w-[85%] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-[16px] font-Raleway  text-[#323941] font-[400] "
                    placeholder="Write your answer here"
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg-[#FFF3EF] text-[16px] text-[#FF693B] font-[600] px-10 py-2.5 rounded-md whitespace-nowrap"
                  >
                    Attach file
                  </button>
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </div>
              </div>


              <div className="mb-4 px-5 pt-2 pb-1 rounded-t-md">
                <label
                  htmlFor="businessName"
                  className="block text-[18px] font-Raleway font-[600] text-[#444444] mb-2 space-x-1"
                >
                  <span className="bg-[#EBEBEB] text-[14px] font-[600] py-[4px]  px-[8px] rounded-full font-Raleway text-center">
                    <span>3</span>
                  </span>{" "}
                  <span>
                    Do you have any idea in mind, or sketch, or image for the
                    logo? <span className="text-[#0A2C8C]">(optional)</span>
                  </span>
                </label>
                <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-4 px-8">
                  <input
                    type="text"
                    id="businessName"
                    className="w-full md:w-[85%] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-[16px] font-Raleway  text-[#323941] font-[400] "
                    placeholder="Write your answer here"
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg-[#FFF3EF] text-[16px] text-[#FF693B] font-[600] px-10 py-2.5 rounded-md whitespace-nowrap"
                  >
                    Attach file
                  </button>
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </div>
              </div>
              <div className="mb-4 px-5 pt-2 pb-1 rounded-t-md">
                <label
                  htmlFor="businessName"
                  className="block text-[18px] font-Raleway font-[600] text-[#444444] mb-2 space-x-1"
                >
                  <span className="bg-[#EBEBEB] text-[14px] font-[600] py-[4px]  px-[8px] rounded-full font-Raleway text-center">
                    <span>4</span>
                  </span>{" "}
                  <span>
                    Do you have any brand guideline or Preferred style, color
                    scheme and fonts?
                    <span className="text-[#0A2C8C]">(optional)</span>
                  </span>
                </label>
                <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-4 px-8">
                  <input
                    type="text"
                    id="businessName"
                    className="w-full md:w-[85%] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-[16px] font-Raleway  text-[#323941] font-[400] "
                    placeholder="Write your answer here"
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg-[#FFF3EF] text-[16px] text-[#FF693B] font-[600] px-10 py-2.5 rounded-md whitespace-nowrap"
                  >
                    Attach file
                  </button>
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </div>
              </div>
              <div className="mb-4 px-5 pt-2 pb-5 rounded-t-md">
                <label
                  htmlFor="businessName"
                  className="block text-[18px] font-Raleway font-[600] text-[#444444] mb-2 space-x-1"
                >
                  <span className="bg-[#EBEBEB] text-[14px] font-[600] py-[4px]  px-[8px] rounded-full font-Raleway text-center">
                    <span>5</span>
                  </span>{" "}
                  <span>
                    Provide some samples that you liked.
                    <span className="text-[#0A2C8C]">(optional)</span>
                  </span>
                </label>
                <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-4 px-8">
                  <input
                    type="text"
                    id="businessName"
                    className="w-full md:w-[85%] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-[16px] font-Raleway  text-[#323941] font-[400] "
                    placeholder="Write your answer here"
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg-[#FFF3EF] text-[16px] text-[#FF693B] font-[600] px-10 py-2.5 rounded-md whitespace-nowrap"
                  >
                    Attach file
                  </button>
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </div>
              </div>
              <div className="text-center md:text-left md:px-12 md:pt-5">
                <button
                  type="submit"
                  className="bg-[#FF693B] text-[16px] font-[600] text-white px-5 py-2.5 rounded-md"
                >
                  Submit Requirement
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center px-5 pb-5 md:flex-row md:justify-start md:items-start  md:px-12 bg-[#FFFFFF] py-5 md:pb-20 text-[#484848] font-Raleway text-[12px]   gap-x-1 italic rounded-b-md">
            <span className="font-[600] ">Note:</span>
            <span>
              Please submit the complete requirements of the project. Change
              requirements in the middle of the project may be subject to extra
              charges.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RequirementContent;
