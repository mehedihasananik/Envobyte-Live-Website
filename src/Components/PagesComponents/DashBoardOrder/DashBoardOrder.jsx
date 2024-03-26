import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashBoardOrder = () => {
  return (
    <div>
      <div>
        <div className="pt-7">
          <div className="w-[100%] flex flex-col md:flex-row justify-center gap-x-10 gap-y-4 lg:gap-y-0">
            <div className="w-full md:w-[40%] lg:w-[25%]">
              <form>
                <select
                  id="logo"
                  className="cursor-pointer border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue>Select Category</option>
                  <option className="text-[#434348] text-[16px] ">
                    Logo Design
                  </option>
                  <option className="text-[#434348] text-[16px] pt-2">
                    Brochure Design
                  </option>
                  <option className="text-[#434348] text-[16px] pt-2">
                    Business Card
                  </option>
                  <option className="text-[#434348] text-[16px] pt-2">
                    Billboard and Banner Design
                  </option>
                  <option className="text-[#434348] text-[16px] pt-2">
                    Banner Ads Design
                  </option>
                  <option className="text-[#434348] text-[16px] pt-2">
                    UI/UX Design
                  </option>
                </select>
              </form>
            </div>

            {/* search */}
            <div className="w-full md:w-[40%] lg:w-[25%]">
              <form>
                <div className="relative w-full">
                  <input
                    type="search"
                    placeholder="What are you looking for?"
                    id="search"
                    className=" text-[#C1C1C1] py-[13px] px-[10px] border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-[#64748B]   "
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 pt-5 lg:pt-10 ">
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
                        Start From
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
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
                        Start From
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
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
                        Start From
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* 4th */}
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
                        Start From
                      </h3>
                    </div>
                    <div>
                      <h2 className="text-[14px] text-[#3371F2] font-[500]">
                        20$
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

export default DashBoardOrder;
