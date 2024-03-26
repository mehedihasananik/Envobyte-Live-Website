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

const Testimonial = () => {
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
      slidesPerView: 3,
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
    <div className=" overflow-hidden ">
      <Container>
        {/* services */}
        <div className="py-5 xl:pt-10 ">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20 xl:gap-12 py-8">
            {/* left heading & description*/}
            <div className="w-full text-center lg:text-left lg:w-[35%]">
              <div className="lg:w-[400px]">
                <h3 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold font-Raleway text-[#0F172A]">
                  What Are People Saying About Us
                </h3>
              </div>
              <div className="pt-4 lg:w-[380px]  ">
                <p className="text-[16px] text-[#666666] font-normal">
                  We aim to provide top-notch quality service and client
                  satisfaction. We are happy to help a lot of companies.
                </p>
              </div>
              <div>
                <span className="text-[48px] font-Raleway text-[#0A2C8C] font-bold">
                  01
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  / 05
                </span>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start gap-6 py-4 ">
                <div className="group text-center" onClick={() => goPrev()}>
                  <button className=" bg-[#FF9F711A]  group-hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300">
                    <HiArrowLeft className="text-[#FF693B]  group-hover:text-[#fff] w-[24px] h-[24px]" />
                  </button>
                </div>
                <div className="group" onClick={() => goNext()}>
                  <button className=" bg-[#FF9F711A]  group-hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300">
                    <HiArrowRight className="text-[#FF693B]  group-hover:text-[#fff] w-[24px] h-[24px]" />
                  </button>
                </div>
              </div>
            </div>
            {/* right swiper */}
            <div className="w-full lg:w-[65%]  ">
              {/* cards */}
              <Swiper
                ref={swiperRef}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={breakpoints}
                className="mySwiper mx-auto "
              >
                <SwiperSlide className="">
                  <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 cursor-pointer">
                    <div className=" relative ">
                      <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                        <img src="/assets/testmonial1.png" alt="" />
                      </div>
                      <div className="pt-14   pb-4">
                        {" "}
                        <h2 className="text-[24px] text-[#333333] group-hover:text-[#fff] font-Raleway font-bold">
                          Michael Tatum
                        </h2>
                        <p className="text-[14px] text-[#999999] pt-3 group-hover:text-[#fff]">
                          Senior UX Designer
                        </p>
                      </div>
                      <div>
                        <p className="w-full lg:w-[260px] text-[16px] text-[#666666] pt-1 pb-12 group-hover:text-[#fff]">
                          Tanahair is the friendliest and most efficient company
                          I have ever used. The whole thing takes time to
                          introduce the product and as a result puts forward
                          only the best opportunities that really suit you. they
                          help from start to finish to create a great product
                          identity for your company.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 cursor-pointer">
                    <div className=" relative ">
                      <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                        <img src="/assets/testimonial2.png" alt="" />
                      </div>
                      <div className="pt-14   pb-4">
                        {" "}
                        <h2 className="text-[24px] text-[#333333] group-hover:text-[#fff] font-Raleway font-bold">
                          Michael Tatum
                        </h2>
                        <p className="text-[14px] text-[#999999] pt-3 group-hover:text-[#fff]">
                          Senior UX Designer
                        </p>
                      </div>
                      <div>
                        <p className="w-full lg:w-[260px] text-[16px] text-[#666666] pt-1 pb-12 group-hover:text-[#fff]">
                          Tanahair is the friendliest and most efficient company
                          I have ever used. The whole thing takes time to
                          introduce the product and as a result puts forward
                          only the best opportunities that really suit you. they
                          help from start to finish to create a great product
                          identity for your company.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 cursor-pointer">
                    <div className=" relative ">
                      <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                        <img src="/assets/testimonial3.png" alt="" />
                      </div>
                      <div className="pt-14   pb-4">
                        {" "}
                        <h2 className="text-[24px] text-[#333333] group-hover:text-[#fff] font-Raleway font-bold">
                          Michael Tatum
                        </h2>
                        <p className="text-[14px] text-[#999999] pt-3 group-hover:text-[#fff]">
                          Product Manager
                        </p>
                      </div>
                      <div>
                        <p className="w-full lg:w-[260px] text-[16px] text-[#666666] pt-1 pb-12 group-hover:text-[#fff]">
                          Tanahair is the friendliest and most efficient company
                          I have ever used. The whole thing takes time to
                          introduce the product and as a result puts forward
                          only the best opportunities that really suit you. they
                          help from start to finish to create a great product
                          identity for your company.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 cursor-pointer">
                    <div className=" relative ">
                      <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                        <img src="/assets/testmonial1.png" alt="" />
                      </div>
                      <div className="pt-14   pb-4">
                        {" "}
                        <h2 className="text-[24px] text-[#333333] group-hover:text-[#fff] font-Raleway font-bold">
                          Michael Tatum
                        </h2>
                        <p className="text-[14px] text-[#999999] pt-3 group-hover:text-[#fff]">
                          Senior UX Designer
                        </p>
                      </div>
                      <div>
                        <p className="w-full lg:w-[260px] text-[16px] text-[#666666] pt-1 pb-12 group-hover:text-[#fff]">
                          Tanahair is the friendliest and most efficient company
                          I have ever used. The whole thing takes time to
                          introduce the product and as a result puts forward
                          only the best opportunities that really suit you. they
                          help from start to finish to create a great product
                          identity for your company.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 cursor-pointer">
                    <div className=" relative ">
                      <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                        <img src="/assets/testimonial2.png" alt="" />
                      </div>
                      <div className="pt-14   pb-4">
                        {" "}
                        <h2 className="text-[24px] text-[#333333] group-hover:text-[#fff] font-Raleway font-bold">
                          Michael Tatum
                        </h2>
                        <p className="text-[14px] text-[#999999] pt-3 group-hover:text-[#fff]">
                          Senior UX Designer
                        </p>
                      </div>
                      <div>
                        <p className="w-full lg:w-[260px] text-[16px] text-[#666666] pt-1 pb-12 group-hover:text-[#fff]">
                          Tanahair is the friendliest and most efficient company
                          I have ever used. The whole thing takes time to
                          introduce the product and as a result puts forward
                          only the best opportunities that really suit you. they
                          help from start to finish to create a great product
                          identity for your company.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="pl-4 mt-10 bg-[#F8FAFC] hover:bg-[#1E293B] group  rounded-md transition-all duration-300 cursor-pointer">
                    <div className=" relative ">
                      <div className="absolute top-[-25px] left-[140px] md:left-[120px] lg:left-0">
                        <img src="/assets/testimonial3.png" alt="" />
                      </div>
                      <div className="pt-14   pb-4">
                        {" "}
                        <h2 className="text-[24px] text-[#333333] group-hover:text-[#fff] font-Raleway font-bold">
                          Michael Tatum
                        </h2>
                        <p className="text-[14px] text-[#999999] pt-3 group-hover:text-[#fff]">
                          Senior UX Designer
                        </p>
                      </div>
                      <div>
                        <p className="w-full lg:w-[260px] text-[16px] text-[#666666] pt-1 pb-12 group-hover:text-[#fff]">
                          Tanahair is the friendliest and most efficient company
                          I have ever used. The whole thing takes time to
                          introduce the product and as a result puts forward
                          only the best opportunities that really suit you. they
                          help from start to finish to create a great product
                          identity for your company.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
