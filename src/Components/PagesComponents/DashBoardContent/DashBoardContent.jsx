"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashBoardContent = () => {
  return (
    <div className="lg:mx-10">
      {/* active project */}
      <div className="bg-white py-4 rounded-md   mb-5 md:px-7">
        <h3 className="text-[#0F172A] text-[24px] font-[600]">
          Active Projects (4)
        </h3>
      </div>
      <div className="bg-white pt-5 lg:pb-[10%] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-7 ">
          {/* 1st  */}
          <Link href={"#"}>
            <div className=" shadow-lg rounded-md border border-[#E2E8F0] pb-5">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0]">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/service1.jpeg"
                      alt=""
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5">
                  <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2">
                    Logo Design
                  </h3>
                  <span className="flex w-[100%] h-[1px] border border-[#E2E2E2]"></span>
                </div>
                <div className="pt-5 space-y-3">
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Place Date
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050]">12/08/23</h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Price
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Status
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050] font-[500]">
                        In Progress
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* 2nd */}
          <Link href={"#"}>
            <div className=" shadow-lg rounded-md border border-[#E2E8F0] pb-5">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0]">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/service2.png"
                      alt=""
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5">
                  <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2">
                    Logo Design
                  </h3>
                  <span className="flex w-[100%] h-[1px] border border-[#E2E2E2]"></span>
                </div>
                <div className="pt-5 space-y-3">
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Place Date
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050]">12/08/23</h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Price
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Status
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050] font-[500]">
                        In Progress
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* 3rd */}

          <Link href={"#"}>
            <div className=" shadow-lg rounded-md border border-[#E2E8F0] pb-5">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0]">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/service3.png"
                      alt=""
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5">
                  <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2">
                    Logo Design
                  </h3>
                  <span className="flex w-[100%] h-[1px] border border-[#E2E2E2]"></span>
                </div>
                <div className="pt-5 space-y-3">
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Place Date
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050]">12/08/23</h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Price
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Status
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050] font-[500]">
                        In Progress
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className=" shadow-lg rounded-md border border-[#E2E8F0] pb-5">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0]">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/service4.png"
                      alt=""
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5">
                  <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2">
                    Logo Design
                  </h3>
                  <span className="flex w-[100%] h-[1px] border border-[#E2E2E2]"></span>
                </div>
                <div className="pt-5 space-y-3">
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Place Date
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050]">12/08/23</h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Price
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between px-5">
                    <div>
                      <h3 className="text-[14px] text-[#505050] font-[500]">
                        Order Status
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#505050] font-[500]">
                        In Progress
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
