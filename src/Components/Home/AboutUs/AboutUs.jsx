"use client";
import Container from "@/Components/Container/Container";
import API_ROUTES from "@/app/api/confiq";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AboutUs = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.route}/about_us_home`);
        const data = await response.json();
        setAbout(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-10 overflow-hidden">
      <Container>
        {loading ? (
          <>
            {" "}
            <>
              <div>
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
              </div>
            </>
          </>
        ) : (
          <div className="flex flex-col lg:flex-row   md:gap-[6%] 2xl:gap-[10%]">
            <div className="bg-[#DDFFFB]">
              <Image
                width={1000}
                height={1000}
                className="w-[650px]"
                src={about.image || "/about.png"}
                alt="about-img"
              />
            </div>
            <div className="pt-10">
              {/* title & description */}
              <div className="w-full text-center lg:text-left lg:w-[544px]">
                <h2 className="text-[26px] md:text-[38px] lg:text-[48px] font-bold font-Raleway text-[#0F172A] md:leading-[55px]">
                  {about.heading}
                </h2>
                <p className="text-[16px] text-[#666666] py-5">{about.text}</p>
              </div>

              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="flex justify-between gap-6 md:gap-0  ">
                  <div>
                    <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={about.experience}
                          duration={3}
                          delay={0}
                        />
                      )}{" "}
                      +
                    </h3>
                    <p className="text-[16px] text-[#64748B] w-20">
                      Years of Experience
                    </p>
                  </div>
                  <div className="text-[30px] md:text-[48px] text-[#0A2C8C] ">
                    <div className="font-bold">
                      <CountUp
                        start={0}
                        end={about.project}
                        duration={2}
                        delay={0}
                        redraw={true}
                        formattingFn={(value) => {
                          if (value >= about.project) {
                            return "1k ";
                          }
                          return value;
                        }}
                      />
                      <span>+</span>
                    </div>
                    <p className="text-[16px] text-[#64748B] w-20">
                      {" "}
                      Project Completed
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={about.customers}
                          duration={2}
                          delay={0}
                        />
                      )}{" "}
                      +
                    </h3>
                    <p className="text-[16px] text-[#64748B] w-20">
                      Customers Satisfaction
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={about.country}
                          duration={3}
                          delay={0}
                        />
                      )}{" "}
                      +
                    </h3>
                    <p className="text-[16px] text-[#64748B] w-20">
                      {" "}
                      Numbers of Country
                    </p>
                  </div>
                </div>
              </ScrollTrigger>

              <div className="py-8 text-center lg:text-left">
                <button className=" text-[16px] bg-[#FF693B] px-10 py-3 text-white rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AboutUs;
