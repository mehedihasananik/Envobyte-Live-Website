"use client";
import Loading from "@/Components/Utilites/Loading/Loading";
import API_ROUTES from "@/app/api/confiq";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { HiArrowSmallRight } from "react-icons/hi2";

const PortfolioPage = () => {
  const [portfolioCategories, setPortfolioCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [serviceCategories, setServiceCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_ROUTES.route}/sevice_portfolio`);
      const response2 = await fetch(`${API_ROUTES.route}/service`);
      const serviceCategoriesResponse = await fetch(
        `${API_ROUTES.route}/category`
      );
      const data = await response.json();
      const data2 = await response2.json();
      const serviceCategoriesResponseData =
        await serviceCategoriesResponse.json();
      setPortfolioCategories(data);
      setServices(data2);
      setServiceCategories(serviceCategoriesResponseData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleServiceChange = (e) => {
    const selectedValue = parseInt(e.target.value);

    // Set selectedServiceId to the chosen value, or 0 if "Select Category" is chosen
    setSelectedServiceId(selectedValue);
  };

  const handleCategoryChange = (e) => {
    const selectedCategoryId = parseInt(e.target.value);
    setSelectedCategoryId(selectedCategoryId);
  };

  // Filter portfolio based on selected service and category
  const filteredPortfolio = portfolioCategories.filter(
    (item) =>
      (selectedServiceId === 0 || item.service_id === selectedServiceId) &&
      (selectedCategoryId === 0 || item.category_id === selectedCategoryId)
  );

  return (
    <div className="pt-8 lg:pt-20">
      {/* title */}
      <div className="text-center lg:text-left text-[#0F172A] text-[32px] lg:text-[48px] font-Raleway font-semibold">
        <h3>Our Amazing Portfolio</h3>
      </div>
      {/* service slection*/}
      <div className="grid grid-cols-1 md:space-x-3 lg:space-x-20 space-y-5 md:space-y-0 md:grid-cols-3    mt-10">
        <div>
          <form className="max-w-sm ">
            <select
              onChange={handleServiceChange}
              id="logo"
              className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={0} // Set the default value to 0
            >
              <option value={0}>Select Category</option>{" "}
              {/* Specify value attribute */}
              {services.slice(1, 6).map((category) => (
                <option
                  key={category.service_id}
                  value={category.service_id}
                  className="text-[#434348] text-[16px]"
                >
                  {category.service_name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div>
          <form className="max-w-sm">
            <select
              onChange={handleCategoryChange}
              id="categories"
              className="cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={0}>Select Category</option>
              {serviceCategories.map((category) => (
                <option
                  key={category.category_id}
                  value={category.category_id}
                  className="text-[#434348] text-[16px]"
                >
                  {category.category_name}
                </option>
              ))}
            </select>
          </form>
        </div>

        {/* search */}
        <div>
          <form className="max-w-sm">
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
      </div>
      {/* portfolio */}
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 justify-between pt-10 pb-5 ">
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <>
              {filteredPortfolio.map((portfolio) => (
                <Link key={portfolio.id} href={`/portfolio/${portfolio.slug}`}>
                  <div className="group">
                    <div className="portfolio-bgHover cursor-pointer flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl border border-[#CBD5E1]">
                      <div>
                        <Image
                          width={800}
                          height={262}
                          className="w-full lg:w-[400px] h-[420px] object-cover"
                          src={portfolio.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center p-3 md:py-0 2xl:px-10">
                        <div className="text-center">
                          <h4 className="text-[14px] text-[#999999] pt-3 pb-3 md:pt-0 md:pb-6 portfolio-textHover">
                            {portfolio.heading}
                          </h4>
                          <p className="w-[250px] text-[14px] text-[#666666] py-3 portfolio-textHover">
                            {portfolio.text}
                          </p>
                        </div>
                        <div className="group flex justify-center items-center gap-2 text-[#FF693B] font-bold mt-5 portfolio-textHover pb-6 lg:pb-0">
                          {" "}
                          <button className="text-[14px]">Read More</button>
                          <span className="w-[19px] font-bold">
                            <HiArrowSmallRight className="text-xl" />
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center pt-8 lg:pt-16">
        <button className="text-[16px] bg-[#FF693B] px-10 py-3 text-white rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300">
          See more
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
