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

const Services = () => {
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
    2500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
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
      <div className="max-w-[1680px] mx-auto px-[4%] md:px[8%] 4xl:px-[0] 4xl:max-w-[1920px] 4xl:pl-[10%]">
        {/* services */}
        <div className="py-6 xl:pt-10 ">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20 xl:gap-12 lg:py-8">
            {/* left heading & description*/}
            <div className="w-full lg:w-[35%]">
              <div className="w-full lg:w-[400px]">
                <h3 className="text-center lg:text-left text-[30px] md:text-[48px] font-bold font-Raleway text-[#0F172A]">
                  Kick Start With Our Services{" "}
                </h3>
              </div>
              <div className="pt-4 w-full text-center lg:text-left lg:w-[380px] ">
                <p className="text-[16px] text-[#666666] font-normal">
                  We help businesses to bring their products to life, improve
                  growth and reach ultimate success. We provide all services
                  that you need for your business.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-[48px] font-Raleway text-[#1E293B] font-bold">
                  02
                </span>
                <span className="text-[16px] font-bold text-[#94A3B8] font-Raleway">
                  /12
                </span>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start gap-6 py-4 ">
                <div className="group text-center" onClick={() => goPrev()}>
                  <button className=" bg-[#FF9F711A]  group-hover:bg-[#FF693B] px-5 py-5 rounded-lg transition-all duration-300">
                    <HiArrowLeft className="text-[#FF693B]  group-hover:text-[#fff] w-[24px] h-[24px]" />
                  </button>
                </div>
                <div className="group" onClick={() => goNext()}>
                  <button className=" bg-[#FF693B]  group-hover:bg-[#FF9F711A] px-5 py-5 rounded-lg transition-all duration-300">
                    <HiArrowRight className="text-[#fff]  group-hover:text-[#FF693B] w-[24px] h-[24px]" />
                  </button>
                </div>
              </div>
              <div className="py-8 lg:py-5 text-center lg:text-left  lg:mt-8">
                <button className="bg-[#FF693B] text-white text-[16px]  font-semibold py-4 px-14 rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300">
                  View all
                </button>
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
                className="mySwiper "
              >
                <SwiperSlide className="">
                  <div className="group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer">
                    <div className="flex flex-col">
                      <div className="bg-[#E2E8F0] group-hover:bg-[#FF693B]">
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

                      <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-300 ">
                        <h3 className="  text-[24px] font-bold text-[#1E293B] font-Raleway pt-5   group-hover:text-white transition-all duration-300 ">
                          Logo Design
                        </h3>
                        <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                          Lorem ipsum dolor sit amet consectetur. Sodales
                          malesuada nulla sodales eget vitae turpis. Ac quis
                          mauris vel arcu lectus maecenas. Quis tellus risus
                          senectus suscipit accum...
                        </p>
                      </div>
                      <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300">
                        <div className="font-Raleway">
                          <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#fff] ">
                            Start From
                          </span>
                        </div>
                        <div>
                          <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#fff]">
                            20$
                          </span>
                        </div>
                        <div>
                          <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer">
                    <div className="flex flex-col">
                      <div className="bg-[#E2E8F0] group-hover:bg-[#FF693B]">
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

                      <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-300 ">
                        <h3 className="  text-[24px] font-bold text-[#1E293B] font-Raleway pt-5   group-hover:text-white transition-all duration-300 ">
                          Logo Design
                        </h3>
                        <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                          Lorem ipsum dolor sit amet consectetur. Sodales
                          malesuada nulla sodales eget vitae turpis. Ac quis
                          mauris vel arcu lectus maecenas. Quis tellus risus
                          senectus suscipit accum...
                        </p>
                      </div>
                      <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300">
                        <div className="font-Raleway">
                          <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#fff] ">
                            Start From
                          </span>
                        </div>
                        <div>
                          <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#fff]">
                            20$
                          </span>
                        </div>
                        <div>
                          <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer">
                    <div className="flex flex-col">
                      <div className="bg-[#E2E8F0] group-hover:bg-[#FF693B]">
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

                      <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-300 ">
                        <h3 className="  text-[24px] font-bold text-[#1E293B] font-Raleway pt-5   group-hover:text-white transition-all duration-300 ">
                          Logo Design
                        </h3>
                        <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                          Lorem ipsum dolor sit amet consectetur. Sodales
                          malesuada nulla sodales eget vitae turpis. Ac quis
                          mauris vel arcu lectus maecenas. Quis tellus risus
                          senectus suscipit accum...
                        </p>
                      </div>
                      <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300">
                        <div className="font-Raleway">
                          <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#fff] ">
                            Start From
                          </span>
                        </div>
                        <div>
                          <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#fff]">
                            20$
                          </span>
                        </div>
                        <div>
                          <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer">
                    <div className="flex flex-col">
                      <div className="bg-[#E2E8F0] group-hover:bg-[#FF693B]">
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

                      <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-300 ">
                        <h3 className="  text-[24px] font-bold text-[#1E293B] font-Raleway pt-5   group-hover:text-white transition-all duration-300 ">
                          Logo Design
                        </h3>
                        <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                          Lorem ipsum dolor sit amet consectetur. Sodales
                          malesuada nulla sodales eget vitae turpis. Ac quis
                          mauris vel arcu lectus maecenas. Quis tellus risus
                          senectus suscipit accum...
                        </p>
                      </div>
                      <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300">
                        <div className="font-Raleway">
                          <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#fff] ">
                            Start From
                          </span>
                        </div>
                        <div>
                          <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#fff]">
                            20$
                          </span>
                        </div>
                        <div>
                          <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="group shadow-lg rounded-md border border-[#E2E8F0]   cursor-pointer">
                    <div className="flex flex-col">
                      <div className="bg-[#E2E8F0] group-hover:bg-[#FF693B]">
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

                      <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-300 ">
                        <h3 className="  text-[24px] font-bold text-[#1E293B] font-Raleway pt-5   group-hover:text-white transition-all duration-300 ">
                          Logo Design
                        </h3>
                        <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-300">
                          Lorem ipsum dolor sit amet consectetur. Sodales
                          malesuada nulla sodales eget vitae turpis. Ac quis
                          mauris vel arcu lectus maecenas. Quis tellus risus
                          senectus suscipit accum...
                        </p>
                      </div>
                      <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-300">
                        <div className="font-Raleway">
                          <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#fff] ">
                            Start From
                          </span>
                        </div>
                        <div>
                          <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#fff]">
                            20$
                          </span>
                        </div>
                        <div>
                          <button className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-300">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
