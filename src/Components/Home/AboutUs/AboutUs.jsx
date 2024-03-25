 "use client"
 import Container from "@/Components/Container/Container";
import React, { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";

const AboutUs = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className="py-10 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row   md:gap-[6%] 2xl:gap-[10%]">
                    <div className="bg-[#DDFFFB]">
                        <img className="w-[600px]" src="/assets/about.png" alt="" />
                    </div>

                    <div className="pt-10">
                        {/* title & description */}
                        <div className="w-full text-center lg:text-left lg:w-[544px]">
                            <h2 className="text-[26px] md:text-[38px] lg:text-[48px] font-bold font-Raleway text-[#0F172A] md:leading-[55px]">
                                How about some fact number about us
                            </h2>
                            <p className="text-[16px] text-[#666666] py-5">
                                We love to help. Our services help startups and enterprise
                                businesses to sustain and grow their brands on the internet
                                ecosystem.
                            </p>
                        </div>

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="flex justify-between gap-6 md:gap-0  ">
                                <div>
                                    <h3 className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                                        {counterOn &&
                                            <CountUp start={0} end={6} duration={3} delay={0} />
                                        } +
                                    </h3>
                                    <p className="text-[16px] text-[#64748B] w-20">
                                        Years of Experience
                                    </p>
                                </div>
                                <div className="text-[30px] md:text-[48px] text-[#0A2C8C] ">
                               <div className="font-bold">
                               <CountUp
                                    start={0}
                                    end={1000}
                                    duration={2}
                                    delay={0}
                                    redraw={true}
                                    formattingFn={(value) => {
                                        if (value >= 1000) {
                                            return '1k ';
                                        }
                                        return value;
                                    }}
                                />
                                    <span>+</span>
                               </div>
                                    <p className="text-[16px] text-[#64748B] w-20">
                                        {" "}
                                        Numbers of Country
                                    </p>
                                </div>

                                <div>
                                    <h3  className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                                        {counterOn &&
                                            <CountUp start={0} end={300} duration={2} delay={0} />
                                        } +
                                    </h3>
                                    <p className="text-[16px] text-[#64748B] w-20">
                                        Customers Satisfaction
                                    </p>
                                </div>
                                <div>
                                <h3  className="text-[30px] md:text-[48px] text-[#0A2C8C] font-bold">
                                        {counterOn &&
                                            <CountUp start={0} end={35} duration={3} delay={0} />
                                        } +
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
