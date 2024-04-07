"use client";

import Container from "@/Components/Container/Container";
import API_ROUTES from "@/app/api/confiq";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Banner = () => {
  // banner states
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  // updating the states
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.route}/home_banner`);
        const data = await response.json();
        setBanner(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {/* Display loading state if loading */}
      {loading ? (
        <div
          role="status"
          className="py-[10%] space-y-8 flex flex-row-reverse animate-pulse md:space-y-0 md:space-x-8  md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        /* banner starts */
        <div className="flex flex-col lg:flex-row items-center justify-between gap-11 pt-5 xl:pt-10 pb-10 ">
          {/* left side description */}
          <div className="flex flex-col ">
            {/* title starts*/}
            <div className="w-full lg:w-[450px] lg:pt-14 ">
              <h3 className="font-Raleway font-bold text-[30px] md:text-[40px] xl:text-[48px] xl:leading-[63.98px]">
                Creative Design <span className="line-break"></span> and{" "}
                <span className="custom-rotate">Development </span> <br />
                for your product
              </h3>
            </div>
            {/* title ends*/}
            {/* description starts */}
            <div className="w-full lg:w-[450px] pt-4 text-[16px]">
              <p>{banner.details}</p>
            </div>
            {/* description ends */}
            {/* buttons starts */}
            <div className="flex gap-6 py-6">
              {/* quote button */}
              <Link
                href={"#projectDetails"}
                className="text-[16px] whitespace-nowrap text-white bg-[#FF693B]  border border-[#FF693B] px-10 py-4 font-[600] rounded-lg  hover:bg-[#fff] hover:text-[#FF693B] transition-all duration-300"
              >
                Get a Quote
              </Link>
              {/* our services */}
              <Link
                href={"/services"}
                className="text-[16px]  whitespace-nowrap text-[#FF693B] border border-[#FF693B] px-10 py-4 font-[600] rounded-lg  hover:bg-[#FF693B] hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
            {/* buttons ends */}
          </div>
          <div>
            {/* right side image */}
            <div>
              <Image
                className="w-[742px] h-[554px]"
                width={500}
                height={500}
                src={banner.banner}
                quality={100}
                alt="banner image"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
        /* banner ends */
      )}
    </Container>
  );
};

export default Banner;
