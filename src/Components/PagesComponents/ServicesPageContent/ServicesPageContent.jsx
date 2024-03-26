import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesPageContent = () => {
  return (
    <div className="service_section">
      <Container>
        <div className="py-5 md:py-16">
          {/* Service Page Content Starts */}
          {/* title & categories */}
          <div className="text-center">
            <h2 className="text-[22px] md:text-[30px] lg:text-[48px] font-Raleway font-bold">
              Choose a <span className="text-[#FF693B]">service</span> that you
              need
            </h2>
          </div>
          {/* category & search section */}
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
          {/* services */}
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 justify-items-center place-items-center gap-8 pb-8 md:gap-16 mt-5 md:mt-10 ">
            {/* one */}

        <Link href={"/service-order"}>
        <div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0]">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/portRelevant.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
                  <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
                    Logo Design
                  </h3>
                  <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                    Lorem ipsum dolor sit amet consectetur. Sodales malesuada
                    nulla sodales eget vitae turpis. Ac quis mauris vel arcu
                    lectus maecenas. Quis tellus risus senectus suscipit
                    accum...
                  </p>
                </div>
                <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                  <div className="font-Raleway">
                    <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                      Start From
                    </span>
                  </div>
                  <div>
                    <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                      20$
                    </span>
                  </div>
                  <div>
                    <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </Link>
             {/* two */}
        <Link href={"/service-order"}>
        <div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
            <div className="flex flex-col">
              <div className="bg-[#E2E8F0]">
                <div>
                  <Image
                    width={700}
                    height={700}
                    className="w-full h-[270px]"
                    src="/assets/portRelevant2.png"
                    alt=""
                  />
                </div>
              </div>

              {/* title & description */}

              <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
                <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
                  Logo Design
                </h3>
                <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                  Lorem ipsum dolor sit amet consectetur. Sodales malesuada
                  nulla sodales eget vitae turpis. Ac quis mauris vel arcu
                  lectus maecenas. Quis tellus risus senectus suscipit
                  accum...
                </p>
              </div>
              <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                <div className="font-Raleway">
                  <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                    Start From
                  </span>
                </div>
                <div>
                  <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                    20$
                  </span>
                </div>
                <div>
                  <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
    {/* one */}

    <Link href={"/service-order"}>
        <div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0]">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/portRelevant.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
                  <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
                    Logo Design
                  </h3>
                  <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                    Lorem ipsum dolor sit amet consectetur. Sodales malesuada
                    nulla sodales eget vitae turpis. Ac quis mauris vel arcu
                    lectus maecenas. Quis tellus risus senectus suscipit
                    accum...
                  </p>
                </div>
                <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                  <div className="font-Raleway">
                    <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                      Start From
                    </span>
                  </div>
                  <div>
                    <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                      20$
                    </span>
                  </div>
                  <div>
                    <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </Link>
             {/* two */}
        <Link href={"/service-order"}>
        <div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
            <div className="flex flex-col">
              <div className="bg-[#E2E8F0]">
                <div>
                  <Image
                    width={700}
                    height={700}
                    className="w-full h-[270px]"
                    src="/assets/portRelevant2.png"
                    alt=""
                  />
                </div>
              </div>

              {/* title & description */}

              <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
                <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
                  Logo Design
                </h3>
                <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                  Lorem ipsum dolor sit amet consectetur. Sodales malesuada
                  nulla sodales eget vitae turpis. Ac quis mauris vel arcu
                  lectus maecenas. Quis tellus risus senectus suscipit
                  accum...
                </p>
              </div>
              <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                <div className="font-Raleway">
                  <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
                    Start From
                  </span>
                </div>
                <div>
                  <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
                    20$
                  </span>
                </div>
                <div>
                  <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>    {/* one */}

<Link href={"/service-order"}>
<div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
      <div className="flex flex-col">
        <div className="bg-[#E2E8F0]">
          <div>
            <Image
              width={700}
              height={700}
              className="w-full h-[270px]"
              src="/assets/portRelevant.png"
              alt=""
            />
          </div>
        </div>

        {/* title & description */}

        <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
          <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
            Logo Design
          </h3>
          <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
            Lorem ipsum dolor sit amet consectetur. Sodales malesuada
            nulla sodales eget vitae turpis. Ac quis mauris vel arcu
            lectus maecenas. Quis tellus risus senectus suscipit
            accum...
          </p>
        </div>
        <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
          <div className="font-Raleway">
            <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
              Start From
            </span>
          </div>
          <div>
            <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
              20$
            </span>
          </div>
          <div>
            <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
</Link>
     {/* two */}
<Link href={"/service-order"}>
<div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
    <div className="flex flex-col">
      <div className="bg-[#E2E8F0]">
        <div>
          <Image
            width={700}
            height={700}
            className="w-full h-[270px]"
            src="/assets/portRelevant2.png"
            alt=""
          />
        </div>
      </div>

      {/* title & description */}

      <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
        <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
          Logo Design
        </h3>
        <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
          Lorem ipsum dolor sit amet consectetur. Sodales malesuada
          nulla sodales eget vitae turpis. Ac quis mauris vel arcu
          lectus maecenas. Quis tellus risus senectus suscipit
          accum...
        </p>
      </div>
      <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
        <div className="font-Raleway">
          <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
            Start From
          </span>
        </div>
        <div>
          <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
            20$
          </span>
        </div>
        <div>
          <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
            View
          </button>
        </div>
      </div>
    </div>
  </div>
</Link>    {/* one */}

<Link href={"/service-order"}>
<div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
      <div className="flex flex-col">
        <div className="bg-[#E2E8F0]">
          <div>
            <Image
              width={700}
              height={700}
              className="w-full h-[270px]"
              src="/assets/portRelevant.png"
              alt=""
            />
          </div>
        </div>

        {/* title & description */}

        <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
          <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
            Logo Design
          </h3>
          <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
            Lorem ipsum dolor sit amet consectetur. Sodales malesuada
            nulla sodales eget vitae turpis. Ac quis mauris vel arcu
            lectus maecenas. Quis tellus risus senectus suscipit
            accum...
          </p>
        </div>
        <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
          <div className="font-Raleway">
            <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
              Start From
            </span>
          </div>
          <div>
            <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
              20$
            </span>
          </div>
          <div>
            <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
</Link>
     {/* two */}
<Link href={"/service-order"}>
<div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
    <div className="flex flex-col">
      <div className="bg-[#E2E8F0]">
        <div>
          <Image
            width={700}
            height={700}
            className="w-full h-[270px]"
            src="/assets/portRelevant2.png"
            alt=""
          />
        </div>
      </div>

      {/* title & description */}

      <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
        <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
          Logo Design
        </h3>
        <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
          Lorem ipsum dolor sit amet consectetur. Sodales malesuada
          nulla sodales eget vitae turpis. Ac quis mauris vel arcu
          lectus maecenas. Quis tellus risus senectus suscipit
          accum...
        </p>
      </div>
      <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
        <div className="font-Raleway">
          <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-white transition-all duration-200">
            Start From
          </span>
        </div>
        <div>
          <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-white transition-all duration-200">
            20$
          </span>
        </div>
        <div>
          <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200">
            View
          </button>
        </div>
      </div>
    </div>
  </div>
</Link>
           
       
       
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPageContent;
