"use client";
import React, { useEffect, useState } from "react";
import Container from "@/Components/Container/Container";
import API_ROUTES from "@/app/api/confiq";
import Image from "next/image";
import Link from "next/link";
import ServiceLoading from "@/Components/Utilites/Loading/ServiceLoading";
import ServiceButton from "@/Components/Utilites/ServiceButton/ServiceButton";

const ServicesPageContent = () => {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [serviceItems, setServiceItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_ROUTES.route}/service`);
      const response2 = await fetch(`${API_ROUTES.route}/sevice_items`);
      const data = await response.json();
      const data2 = await response2.json();
      setServiceCategories(data);
      setServices(data2);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedServiceId) {
      const filteredItems = services.filter(
        (item) => item.service_id === parseInt(selectedServiceId)
      );
      setServiceItems(filteredItems);
    } else {
      // If no service selected, show all service items
      setServiceItems(services);
    }
  }, [selectedServiceId, services]);

  const handleServiceChange = (e) => {
    setSelectedServiceId(e.target.value);
  };

  return (
    <div className="service_section">
      <Container>
        <div className="py-5 md:py-16">
          <div className="text-center">
            <h2 className="text-[22px] md:text-[30px] lg:text-[48px] font-Raleway font-bold">
              Choose a <span className="text-[#FF693B]">service</span> that you
              need
            </h2>
          </div>
          <div className="pt-7">
            <div className="w-[100%] flex flex-col md:flex-row justify-center gap-x-10 gap-y-4 lg:gap-y-0">
              <div className="w-full md:w-[40%] lg:w-[25%]">
                <form>
                  <select
                    onChange={handleServiceChange}
                    id="logo"
                    className="cursor-pointer border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select Category</option>
                    {serviceCategories.slice(1, 6).map((category) => (
                      <option
                        key={category.service_id}
                        value={category.service_id}
                        className="text-[#434348] text-[16px] "
                      >
                        {category.service_name}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
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
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 justify-items-center place-items-center gap-8 pb-8 md:gap-16 mt-5 md:mt-10 ">
            {loading ? (
              <>
                <ServiceLoading />
                <ServiceLoading />
                <ServiceLoading />
                <ServiceLoading />
              </>
            ) : (
              <>
                {serviceItems.map((service) => (
                  <>
                    <div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
                      <div className="flex flex-col">
                        <div className="bg-[#E2E8F0]">
                          <div>
                            <Image
                              width={700}
                              height={700}
                              className="w-full h-[270px]"
                              src={service.image || "/assets/portRelevant.png"}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="px-5 group-hover:bg-[#FF693B] group-hover:text-white transition-all duration-200">
                          <h3 className="text-[24px] font-bold  font-Raleway pt-5 pb-2">
                            {service.title}
                          </h3>
                          <p className="text-[14px] text-[#475569] group-hover:text-white transition-all duration-200">
                            {service.details}
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
                            <Link
                              className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200"
                              href={`/services/${service.id}`}
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPageContent;
