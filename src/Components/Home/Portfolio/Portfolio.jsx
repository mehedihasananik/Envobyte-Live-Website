import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HiArrowSmallRight } from "react-icons/hi2";

const Portfolio = () => {
  return (
    <div className=" md:py-5 lg:pt-20 ">
      <Container>
        <div className="text-center lg:text-left">
          <h3 className="text-[32px] text-[portfolio-details0F172A] xl:text-[48px] font-bold font-Raleway">
            Our Amazing Portfolio
          </h3>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:justify-between py-4  pt-5">
          <div>
            <h3 className="text-[16px] text-[portfolio-details666666]">
              Our beautiful work you need to know!
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 md:gap-10 text-[portfolio-details9E9E9E] text-[16px] lg:text-[16px] ">
            <div className="flex gap-10">
              <button className="text-[portfolio-detailsFA8D59] font-bold  transition-all">
                All
              </button>
              <button className="hover:text-[portfolio-detailsFA8D59] transition-all">
                Graphic Design
              </button>
              <button className="hover:text-[portfolio-detailsFA8D59] transition-all">
                Web Development
              </button>
            </div>
            <div className="flex gap-10">
              <button className="hover:text-[portfolio-detailsFA8D59] transition-all whitespace-nowrap">
                App Development
              </button>
              <button className="hover:text-[portfolio-detailsFA8D59] transition-all">
                Marketing
              </button>
              <button className="hover:text-[portfolio-detailsFA8D59] transition-all ">
                Video & Animation
              </button>
            </div>
          </div>
        </div>
        {/* card */}
        <div>
          {/* 1st row */}
          <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
            {/* 1st row 1st column card */}
            <Link href="portfolio-details">
              <div className="group cursor-pointer flex flex-col xl:flex-row justify-between bg-[portfolio-detailsFFFFFF] rounded-xl border border-[portfolio-detailsCBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[400px] h-[420px]"
                    src="/assets/portfolio1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[portfolio-details999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[portfolio-details333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[portfolio-details666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[portfolio-detailsFF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </Link>

            {/* 1st row 2nd column card */}
            <Link href="portfolio-details">
              <div className="group cursor-pointer flex flex-col xl:flex-row justify-between bg-[portfolio-detailsFFFFFF] rounded-xl border border-[portfolio-detailsCBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[400px] h-[420px]"
                    src="/assets/portfolio2.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[portfolio-details999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[portfolio-details333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[portfolio-details666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[portfolio-detailsFF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col md:flex-row  gap-10 justify-between pt-10 pb-5 ">
            {/* 2nd row 1st column card */}
            <Link href={"portfolio-details"}>
              <div className="group cursor-pointer flex flex-col xl:flex-row justify-between bg-[portfolio-detailsFFFFFF] rounded-xl border border-[portfolio-detailsCBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[400px] h-[420px] portfolio-bgHover object-cover"
                    src="/assets/portfolio3.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[portfolio-details999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[portfolio-details333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[portfolio-details666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[portfolio-detailsFF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </Link>
            {/* 2nd row 2nd column card */}
            <Link href="portfolio-details">
              <div className="group cursor-pointer flex flex-col xl:flex-row justify-between bg-[portfolio-detailsFFFFFF] rounded-xl border border-[portfolio-detailsCBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[400px] h-[420px]"
                    src="/assets/portfolio4.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[portfolio-details999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[portfolio-details333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[portfolio-details666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[portfolio-detailsFF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <button className="text-[16px] bg-[portfolio-detailsFF693B] px-10 py-3 text-white rounded-xl border border-[portfolio-detailsFF693B]  hover:bg-white hover:text-[portfolio-detailsFF693B] transition-all duration-300">
            View All Portfolio
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
