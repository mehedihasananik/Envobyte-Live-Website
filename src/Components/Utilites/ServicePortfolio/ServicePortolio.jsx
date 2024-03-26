"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

// import required modules
import { Navigation } from "swiper/modules";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

const ServicePortolio = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const breakpoints = {
    // when window width is >= 1024px (lg)
    1920: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1336: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px (md)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 320px (sm)
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };
  return (
    <div className="xl:pl-[10%]">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={breakpoints}
        className="mySwiper "
      >
        <SwiperSlide className="">
          <Link href={"/portfolio-details"}>
            <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
              {/* 1st row 1st column card */}
              <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[350.45px] h-[420px]"
                    src="/assets/portfolio1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href={"/portfolio-details"}>
            <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
              {/* 1st row 1st column card */}
              <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[350.45px] h-[420px]"
                    src="/assets/portfolio3.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="">
          <Link href={"/portfolio-details"}>
            <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
              {/* 1st row 1st column card */}
              <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[350.45px] h-[420px]"
                    src="/assets/portfolio4.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href={"/portfolio-details"}>
            <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
              {/* 1st row 1st column card */}
              <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
                <div>
                  <Image
                    width={800}
                    height={262}
                    className="w-full lg:w-[350.45px] h-[420px]"
                    src="/assets/portfolio1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10 portfolio-bgHover">
                  <div className="text-center">
                    <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                      App & Web Development
                    </h4>
                    <h3 className="text-[16px] font-bold font-Raleway text-[#333333] portfolio-textHover">
                      Visuel Agency <br /> Photo Brand
                    </h3>
                    <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                      This project for Arthemis Corporate. Making Brand
                      Guideline company. This project collaborate with another
                      agency in Jakartaand success for us to making arthemis
                      happy.
                    </p>
                  </div>
                  <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                    {" "}
                    <button className=" text-[14px]  ">Read More </button>
                    <span className="w-[19px] font-bold">
                      <HiArrowSmallRight className="text-xl " />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicePortolio;
