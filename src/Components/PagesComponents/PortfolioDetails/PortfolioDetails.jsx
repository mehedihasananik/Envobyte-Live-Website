import Container from "@/Components/Container/Container";
import Image from "next/image";
import React from "react";

const PortfolioDetails = ({ singlePortfolio }) => {
  console.log(singlePortfolio);
  return (
    <div>
      <div className="md:py-10 md:pb-14 ">
        <Container>
          {singlePortfolio.map((portfolio) => {
            const { title, details, image, caption_text } = portfolio;
            return (
              <div key={portfolio.id}>
                {/* title */}
                <div className="text-center pt-7 md:pt-0">
                  <h1 className=" text-[20px] md:text-[30px] lg:text-[54px] font-Raleway font-bold lg:leading-[63.4px] text-[#000000] ">
                    {portfolio?.title}
                  </h1>
                </div>
                <div>
                  <p className="text-[18px] font-Roboto text-[#333333] md:leading-[27px] text-left py-5">
                    {portfolio?.details}
                  </p>
                </div>
                <div className="w-[100%]">
                  <Image
                    className="w-full h-[75vh] rounded-md"
                    width={1000}
                    height={1000}
                    src={portfolio?.image}
                    alt="image"
                  />
                </div>
                <div className="text-center py-4 md:pt-5 md:py-0">
                  <h3 className="text-gray-500 text-[18px] md:text-[20px]  font-Raleway font-semibold">
                    {portfolio?.caption_text}
                  </h3>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
      <div className="text-center bg-[#FF693B08] py-8 md:py-14 md:pb-16">
        <h3 className="text-[20px] md:text-[32px] lg:text-[54px] text-[#111111] lg:leading-[101px] font-semibold">
          Let&apos;s Choose Us for Your Next Project
        </h3>
        <button className="bg-[#FF693B] border border-[#FF693B] text-[18px] font-Poppins text-white px-5 py-2 md:px-10 md:py-3 rounded-lg mt-3 transition-all duration-300 hover:bg-[#fff] hover:text-[#FF693B]">
          Contact Us
        </button>
      </div>
      <div className="bg-[#F8FAFC] py-5 md:py-10">
        <div className="text-center">
          <h3 className="text-[20px] lg:text-[48px] font-Raleway font-bold md:leading-[63px]">
            Relevant Services{" "}
          </h3>
        </div>
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-8 md:gap-16 mt-5 md:mt-10 ">
            {/* one */}
            <div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0] ">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/portRelevant.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-200">
                  <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2 group-hover:text-white transition-all duration-200">
                    Logo Design
                  </h3>
                  <p className="text-[14px] text-[#475569]  group-hover:text-white transition-all duration-200">
                    Lorem ipsum dolor sit amet consectetur. Sodales malesuada
                    nulla sodales eget vitae turpis. Ac quis mauris vel arcu
                    lectus maecenas. Quis tellus risus senectus suscipit
                    accum...
                  </p>
                </div>
                <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                  <div className="font-Raleway">
                    <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#FFF] transition-all duration-200">
                      Start From
                    </span>
                  </div>
                  <div>
                    <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#FFF] transition-all duration-20">
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
            {/* two */}
            <div className="group max-w-xs shadow-lg rounded-md border border-[#E2E8F0]  cursor-pointer">
              <div className="flex flex-col">
                <div className="bg-[#E2E8F0] ">
                  <div>
                    <Image
                      width={700}
                      height={700}
                      className="w-full h-[270px]"
                      src="/assets/portRelevant2.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* title & description */}

                <div className="px-5 group-hover:bg-[#FF693B] transition-all duration-200">
                  <h3 className="text-[24px] font-bold text-[#1E293B] font-Raleway pt-5 pb-2 group-hover:text-white transition-all duration-200">
                    Logo Design
                  </h3>
                  <p className="text-[14px] text-[#475569]  group-hover:text-white transition-all duration-200">
                    Lorem ipsum dolor sit amet consectetur. Sodales malesuada
                    nulla sodales eget vitae turpis. Ac quis mauris vel arcu
                    lectus maecenas. Quis tellus risus senectus suscipit
                    accum...
                  </p>
                </div>
                <div className="flex items-center justify-between px-5 py-5 group-hover:bg-[#FF693B] transition-all duration-200">
                  <div className="font-Raleway">
                    <span className=" font-bold text-[16px] text-[#1E293B] group-hover:text-[#FFF] transition-all duration-200">
                      Start From
                    </span>
                  </div>
                  <div>
                    <span className="font-Raleway text-[20px] font-bold text-[#0A2C8C] group-hover:text-[#FFF] transition-all duration-20">
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioDetails;
