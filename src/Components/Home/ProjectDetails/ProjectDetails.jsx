import Container from "@/Components/Container/Container";
import React from "react";

const ProjectDetails = () => {
  return (
    <div className="bg-[#F8FAFC] py-5 pb-8 md:py-10 md:pb-14 lg:py-10">
      <Container>
        {/* project details */}
        {/* title & decription */}
        <div className="flex  md:flex-row justify-center items-center pt-6">
          <div>
            <img src="/assets/projectLogo.svg" alt="" />
          </div>
          <div>
            <h3 className="text-[26px] md:text-[32px] lg:text-[48px] font-Raleway font-bold">
              Let&apos;s discuss <span className="project_title"></span> your project
            </h3>
          </div>
        </div>
        <div className="text-center py-5">
          <p className=" text-[16px] text-[#475569]">
            Send details of the project and we will provide a quote for the
            project. Let&apos;s make <br /> something new, different, and more
            meaningful.
          </p>
        </div>
        {/* our details */}
        <div className="w-[100%] flex flex-col justify-center items-center  lg:flex-row lg:items-start lg:justify-between gap-10 pt-14">
          <div className="w-full lg:w-[40%] flex flex-col gap-10 md:pl-10 2xl:pl-0">
           
            <div className="flex  items-center gap-6 bg-[#FFFFFF] py-8  rounded-lg pl-5 lg:pl-5 lg:pr-14">
              <div className="bg-[#FFF5F1] p-4 rounded-lg">
                <img src="/assets/mail.svg" alt="" />
              </div>
              <div>
                <h3 className="text-[16px] text-[#94A3B8]">Email us</h3>
                <a target="_blank" href="mailto:support@envobyte.com" className="text-[#475569] text-[16px] pt-1">support@envobyte.com</a>
              </div>
            </div>

            <div className="flex  items-center gap-6 bg-[#FFFFFF] py-8  rounded-lg pl-5 pr-14">
              <div className="bg-[#FFF5F1] p-4 rounded-lg">
                <img src="/assets/whatsapp.svg" alt="" />
              </div>
              <div>
                <h3 className="text-[16px] text-[#94A3B8]">Whatsapp</h3>
                <a target="_blank" href="https://wa.me/8801711377731" className="text-[#475569] text-[16px] pt-1">+880 1711-377731</a>

              </div>
            </div>
          </div>

          <div className="w-full md:w-[60%]">
            <form action="">
              {/* first name & last name */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5  lg:flex-row md:gap-0">
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label className="text-[16px]" htmlFor="firstName">
                        Your First Name:
                      </label>
                      <input
                        className="w-full lg:w-[80%] py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label className="text-[16px] mt-3 lg:mt-0" htmlFor="lastname">
                        Your Last Name:
                      </label>
                      <input
                        className="w-full l lg:w-[80%] py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* email & phone number */}
                <div className="flex flex-col gap-5  lg:flex-row md:gap-0">
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label className="text-[16px]" htmlFor="email">
                        Your Email:
                      </label>
                      <input
                        className="w-full lg:w-[80%] py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col gap-3">
                      <label className="text-[16px] mt-3 lg:mt-0" htmlFor="lastname">
                        Your Phone Number:
                      </label>
                      <input
                        className="w-full l lg:w-[80%] py-4 border border-[#CBD5E1] px-4 rounded-md shadow-sm"
                        type="number"
                        id="number"
                        name="number"
                        placeholder="Enter your phone Number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="w-[100%]">
                    <div className="flex flex-col gap-3">
                      <label className="text-[16px]" htmlFor="firstName">
                        Message
                      </label>
                      <textarea
                        className="w-full lg:w-[90%] py-4 border border-[#CBD5E1] px-4 shadow-sm"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your message"
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  {" "}
                  <button className="text-[16px] bg-[#FF693B] px-8 py-4 text-white rounded-lg border border-[#FF693B]  hover:bg-white hover:text-[#FF693B] transition-all duration-300">
                    Send Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;