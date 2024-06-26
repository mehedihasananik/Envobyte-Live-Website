import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import OrderSlider from "@/Components/Utilites/OrderSlider/OrderSlider";
import { HiArrowSmallRight } from "react-icons/hi2";
import Image from "next/image";
import RelevantServices from "@/Components/Utilites/RelevantServices/RelevantServices";
import Questions from "@/Components/Home/Questions/Questions";
import Container from "@/Components/Container/Container";
import ServicePortolio from "@/Components/Utilites/ServicePortfolio/ServicePortolio";

const ServiceOrderContent = () => {
  return (
    <>
      <Container>
        <div className="py-8">
          {/* title */}
          <div className="text-center font-Raleway pb-10">
            <h1 className="text-[#10F172A] text-[32px] md:text-[48px] font-bold ">
              UI/UX Design
            </h1>
            <h3 className="text-[18px] font-medium">
              Discover <span className="text-[#FF693B]">The Perfect Plan</span>
            </h3>
          </div>
          {/* packages */}
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-5 lg:gap-y-0 4xl:px-[10%]">
            {/* 1st package */}
            <div className="border border-[#CBD5E1] cursor-pointer transition-all duration-300  hover:border-[#FF693B] px-8 py-10 rounded-3xl">
              {/* title */}
              <div className="space-y-5">
                <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
                  Basic Package
                </h3>
                <p className="text-[15px] text-[#334155] font-normal">
                  Single web page or Homepage design up to 7 sections.
                </p>
              </div>
              {/* price */}
              <div className="py-2">
                <h2 className="text-[32px] font-semibold font-Raleway">$100</h2>
              </div>
              {/* order button */}
              <div className="py-4 md:pb-8">
                <button className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300">
                  Place Order Now
                </button>
              </div>
              {/* order details */}
              <div className="space-y-5">
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
              </div>
              {/* delivery date */}
              <div className="flex pt-14 lg:pt-28 items-center justify-between">
                {/* 1st */}
                <div className="flex items-center gap-1.5 font-Raleway  font-semibold">
                  <span>
                    <FaRegClock className="w-[24px] h-[24px]" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]">3 Days Delivery </span>{" "}
                    <img
                      className="w-[14px] h-[14px]"
                      src="/assets/mark.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-1 items-center justify-center font-Raleway  font-semibold">
                  <span>
                    <BiRevision className="w-[24px] h-[24px]" />
                  </span>
                  <span className="text-[16px]"> 1 Revisions</span>
                </div>
              </div>
            </div>
            {/* 2nd package */}
            <div className="border border-[#CBD5E1] cursor-pointer transition-all duration-300  hover:border-[#FF693B] px-8 py-10 rounded-3xl">
              {/* title */}
              <div className="space-y-5">
                <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
                  Basic Package
                </h3>
                <p className="text-[15px] text-[#334155] font-normal">
                  Single web page or Homepage design up to 7 sections.
                </p>
              </div>
              {/* price */}
              <div className="py-2">
                <h2 className="text-[32px] font-semibold font-Raleway">$100</h2>
              </div>
              {/* order button */}
              <div className="py-4 md:pb-8">
                <button className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300">
                  Place Order Now
                </button>
              </div>
              {/* order details */}
              <div className="space-y-5">
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
              </div>
              {/* delivery date */}
              <div className="flex pt-14 lg:pt-28 items-center justify-between">
                {/* 1st */}
                <div className="flex items-center gap-1.5 font-Raleway  font-semibold">
                  <span>
                    <FaRegClock className="w-[24px] h-[24px]" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]">3 Days Delivery </span>{" "}
                    <img
                      className="w-[14px] h-[14px]"
                      src="/assets/mark.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-1 items-center justify-center font-Raleway  font-semibold">
                  <span>
                    <BiRevision className="w-[24px] h-[24px]" />
                  </span>
                  <span className="text-[16px]"> 1 Revisions</span>
                </div>
              </div>
            </div>
            {/* 3rd package */}
            <div className="border border-[#CBD5E1] cursor-pointer transition-all duration-300  hover:border-[#FF693B] px-8 py-10 rounded-3xl">
              {/* title */}
              <div className="space-y-5">
                <h3 className="font-Raleway text-[16px] text-[#1E293B] font-bold">
                  Basic Package
                </h3>
                <p className="text-[15px] text-[#334155] font-normal">
                  Single web page or Homepage design up to 7 sections.
                </p>
              </div>
              {/* price */}
              <div className="py-2">
                <h2 className="text-[32px] font-semibold font-Raleway">$100</h2>
              </div>
              {/* order button */}
              <div className="py-4 md:pb-8">
                <button className="text-[16px] font-medium text-[#FF693B] border border-[#FF693B] px-6 py-2 w-full rounded-md hover:text-white hover:bg-[#FF693B] transition-all duration-300">
                  Place Order Now
                </button>
              </div>
              {/* order details */}
              <div className="space-y-5">
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <span>
                    <IoCheckmarkSharp className="text-[#FF8F5A] w-[16px] h-[16px]" />
                  </span>
                  <span className="text-[#646464] text-[16px] font-Roboto">
                    1 Page Web UI Design
                  </span>
                </div>
              </div>
              {/* delivery date */}
              <div className="flex pt-14 lg:pt-28 items-center justify-between">
                {/* 1st */}
                <div className="flex items-center gap-1.5 font-Raleway  font-semibold">
                  <span>
                    <FaRegClock className="w-[24px] h-[24px]" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]">3 Days Delivery </span>{" "}
                    <img
                      className="w-[14px] h-[14px]"
                      src="/assets/mark.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-1 items-center justify-center font-Raleway  font-semibold">
                  <span>
                    <BiRevision className="w-[24px] h-[24px]" />
                  </span>
                  <span className="text-[16px]"> 1 Revisions</span>
                </div>
              </div>
            </div>
          </div>
          {/* custom projects */}
          <div className="flex flex-col lg:flex-row justify-center items-center py-14 gap-5 text-center">
            <h2 className="text-[20px] text-[#646464]">
              <span className="text-[#FF693B]">
                Have a complex or custom project?{" "}
              </span>{" "}
              Send details and get offer
            </h2>
            <button className="border border-[#FF693B] text-[#FF693B] text-[16px] font-medium px-10 py-2 rounded-[4px] hover:text-white hover:bg-[#FF693B] transition-all duration-300">
              Get Custom Offer
            </button>
          </div>
          {/* order Slider */}
          <OrderSlider />
          {/* description */}
          <div className="bg-[#FCFCFC] mt-4 p-4 md:p-7 rounded-lg text-justify">
            <h2 className="text-[24px] font-bold font-Raleway text-[#333333]">
              Description
            </h2>
            <p className="text-[16px] text-[#666] pt-2">
              Lorem ipsum dolor sit amet consectetur. Eget egestas lectus sit
              velit vitae diam mollis tellus adipiscing. Arcu netus orci eu
              blandit quis arcu ut massa diam. Adipiscing consequat enim lacus
              in. Diam consequat proin cras cursus. Ultrices purus nunc integer
              amet ultrices. Tortor ut tempus feugiat ut. Semper purus sagittis
              sit tortor. Lorem ipsum dolor sit amet consectetur. Eget egestas
              lectus sit velit vitae diam mollis tellus adipiscing. Arcu netus
              orci eu blandit quis arcu ut massa diam. Adipiscing consequat enim
              lacus in. Diam consequat proin cras cursus. Ultrices purus nunc
              integer amet ultrices. Tortor ut tempus feugiat ut. Semper purus
              sagittis sit tortor. Lorem ipsum dolor sit amet consectetur. Eget
              egestas lectus sit velit vitae diam mollis tellus adipiscing. Arcu
              netus orci eu blandit quis arcu ut massa diam. Adipiscing
              consequat enim lacus in. Diam consequat proin cras cursus.
              Ultrices purus nunc integer amet ultrices. Tortor ut tempus
              feugiat ut. Semper purus sagittis sit tortor.
            </p>
          </div>

          {/* questions */}
        </div>
      </Container>
      {/* portfolios*/}
      <div className="text-center py-3 md:py-5">
        <h2 className="text-[32px] md:text-[48px] text-[#0F172A] font-bold font-Raleway">
          Portfolio&apos;s{" "}
        </h2>
      </div>
      <ServicePortolio />

      <div className="flex justify-center py-10">
        <button className="text-[16px] bg-[#FF693B] px-11 py-3 text-white rounded-xl border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300">
          See More
        </button>
      </div>
      <Container>
        {/* relevant services */}
        <RelevantServices />
      </Container>

      <div>
        <Questions
          title="Frequently Asked Questions"
          className="bg-[#F8FAFC]"
        />
      </div>
    </>
  );
};

export default ServiceOrderContent;
