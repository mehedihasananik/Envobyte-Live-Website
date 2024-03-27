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
  console.log(about);

  return (
    <div className="py-10 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row   md:gap-[6%] 2xl:gap-[10%]">
          <div className="bg-[#DDFFFB]">
            <Image
              width={1000}
              height={1000}
              className="w-[650px]"
              src={about.image || "/about.png"}
              alt="about-img"
              priority
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
      </Container>
    </div>
  );
};

export default AboutUs;
