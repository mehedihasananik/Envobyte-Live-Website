"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Container from "@/Components/Container/Container";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="login_singUp">
      <Container>
        {/* login */}
        <div className="w-full h-fit flex justify-center pt-5 ">
          <div className="shadow-md  border rounded-lg py-5 px-10  md:py-10 md:px-12">
            {/* title */}
            <div className="text-center pb-10 md:pb-14">
              <h3 className="text-[32px] md:text-[40px] text-[#333333] font-Raleway font-bold">
                Create account
              </h3>
              <p className="text-[16px]  text-[#032333] font-Raleway font-semibold">
                Let&apos;s create your account
              </p>
            </div>
            {/* social login */}
            <div className="flex flex-col md:flex-row gap-10 pb-8 lg:pb-12">
              <button className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md">
                <img src="/assets/gLogo.png" alt="" />{" "}
                <span className="text-[14px]text-[#032333]">
                  Continue with Google
                </span>
              </button>
              <button className="flex justify-center items-center gap-2 font-Raleway border p-2 rounded-md">
                <img src="/assets/fLogo.png" alt="" />{" "}
                <span className="text-[14px]text-[#032333]">
                  Continue with Facebook
                </span>
              </button>
            </div>
            {/* or break */}
            <div className="flex items-center gap-x-5  md:pt-0">
              <span className="w-[50%] h-[1px] border"></span>{" "}
              <span className="text-[14px] font-Raleway text-[#032333] font-medium">
                Or
              </span>{" "}
              <span className="w-[50%] h-[1px] border"></span>
            </div>
            {/* form */}
            <div className="pt-4 md:pt-8">
              <form className="flex max-w-md flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500] "
                      htmlFor="name"
                      value="Name"
                    />
                  </div>
                  <TextInput
                    id="name"
                    type="name"
                    icon={IoPersonSharp}
                    placeholder="Loredana Catalina"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500] "
                      htmlFor="email1"
                      value="Email"
                    />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    icon={HiMail}
                    placeholder="exemple@email.com"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      className="text-[16px] font-Raleway text-[#032333] font-[500]"
                      htmlFor="password1"
                      value="Password"
                    />
                  </div>
                  <TextInput
                    id="password1"
                    type="password"
                    icon={IoMdLock}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Checkbox
                      className="text-[14px] text-[#FF693B] focus:outline-none focus:ring focus:ring-white cursor-pointer font-[500]"
                      color="success"
                      id="remember"
                    />
                    <Label
                      className="text-[14px] font-Raleway px-2 font-[600]"
                      htmlFor="remember"
                    >
                      I agree to the{" "}
                      <a
                        className="text-[#FF693B] border-b border-b-[#FF693B]"
                        href=""
                      >
                        Terms of service
                      </a>{" "}
                      and{" "}
                      <a
                        className="text-[#FF693B] border-b border-b-[#FF693B]"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </Label>
                  </div>
                </div>
                <button
                  className="bg-[#FF693B] text-[16px] font-semibold font-Raleway md:mt-6 py-2 hover:bg-[#fff] hover:text-[#FF693B] flex justify-center items-center rounded-md text-white border border-[#FF693B] transition-all duration-300"
                  type="submit"
                >
                  Create Account{" "}
                  <span>
                    <FiArrowRight className="text-[20px] mx-1" />
                  </span>
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center pt-5  md:pt-8">
              <div className="text-[14px] font-Raleway font-[500] gap-1 ">
                <span className="text-[#032333]">
                  {" "}
                  Already have an account?{" "}
                </span>
                <Link
                  href={"/login"}
                  className=' text-[#FF693B]  border-b border-[#FF693B] border-["1px solid"] font-[500]'
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
