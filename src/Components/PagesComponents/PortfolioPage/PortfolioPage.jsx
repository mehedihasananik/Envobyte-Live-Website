import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { HiArrowSmallRight } from "react-icons/hi2";

const PortfolioPage = () => {
  return (
    <div className='pt-8 lg:pt-20'>
        {/* title */}
        <div className='text-center lg:text-left text-[#0F172A] text-[32px] lg:text-[48px] font-Raleway font-semibold'>
        <h3>Our Amazing Portfolio</h3>
       
        </div>
        {/* service slection*/}
        <div className='grid grid-cols-1 md:space-x-3 lg:space-x-0 space-y-5 md:space-y-0 md:grid-cols-3   mt-10' >
            <div>
            <form className="max-w-sm ">
            <select id="logo" className="cursor-pointer border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option  defaultValue>Select Category</option>
                <option className='text-[#434348] text-[16px] '>Logo Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>Brochure Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>Business Card</option>
                <option className='text-[#434348] text-[16px] pt-2'>Billboard and Banner Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>Banner Ads Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>UI/UX Design</option>
            </select>
        </form>
            </div>
            <div>
            <form className="max-w-sm  ">
            <select id="countries" className="cursor-pointer  border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option  defaultValue>Select Category</option>
                <option className='text-[#434348] text-[16px] '>Logo Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>Brochure Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>Business Card</option>
                <option className='text-[#434348] text-[16px] pt-2'>Billboard and Banner Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>Banner Ads Design</option>
                <option className='text-[#434348] text-[16px] pt-2'>UI/UX Design</option>
            </select>
        </form>
            </div>

            {/* search */}
       <div>
        
<form class="max-w-sm">
        <div className="relative w-full">
            <input type="search" placeholder='What are you looking for?' id="search" className=" text-[#C1C1C1] py-[13px] px-[10px] border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-[#64748B]   ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>

</form>

       </div>
        </div>
        {/* portfolio */}
        <div>
          {/* 1st row */}
          <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
            {/* 1st row 1st column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px]"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <Link href={"/portfolio-details"} className=" text-[14px]  ">Read More </Link>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>

            {/* 1st row 2nd column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px]"
                  src="/assets/portfolio2.png"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <Link href={"/portfolio-details"} className=" text-[14px]  ">Read More </Link>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col md:flex-row  gap-10 justify-between pt-10 pb-5 ">
            {/* 2nd row 1st column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px] portfolio-bgHover"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <Link href={"/portfolio-details"} className=" text-[14px]  ">Read More </Link>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
            {/* 2nd row 2nd column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px]"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
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
          </div>  {/* 1st row */}
          <div className="  flex flex-col md:flex-row gap-10 justify-between pt-10 pb-5 ">
            {/* 1st row 1st column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px]"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <Link href={"/portfolio-details"} className=" text-[14px]  ">Read More </Link>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>

            {/* 1st row 2nd column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px]"
                  src="/assets/portfolio2.png"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <Link href={"/portfolio-details"} className=" text-[14px]  ">Read More </Link>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col md:flex-row  gap-10 justify-between pt-10 pb-5 ">
            {/* 2nd row 1st column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px] portfolio-bgHover"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <Link href={"/portfolio-details"} className=" text-[14px]  ">Read More </Link>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
            {/* 2nd row 2nd column card */}
            <div className="group flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] ">
              <div>
                <Image 
                width={800}
                height={262}
                 className="lg:w-[400px] h-[420px]"
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
                    This project for Arthemis Corporate. Making Brand Guideline
                    company. This project collaborate with another agency in
                    Jakartaand success for us to making arthemis happy.
                  </p>
                </div>
                <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                  {" "}
                  <Link href={"/portfolio-details"} className=" text-[14px]  ">Read More </Link>
                  <span className="w-[19px] font-bold">
                    <HiArrowSmallRight className="text-xl " />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8 lg:pt-16">
          <button className="text-[16px] bg-[#FF693B] px-10 py-3 text-white rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300">
          See more
          </button>
        </div>
    </div>
  )
}

export default PortfolioPage