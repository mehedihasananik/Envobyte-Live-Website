"use client";

import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  const menus = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About Us", link: "/about-us" },
  ];

  return (
    <div>
      <Container>
        {/* navbar started */}
        {/* for large devices */}
        <div>
          <nav className="hidden  lg:flex justify-between items-center pt-5 ">
            {/* logo */}
            <div>
              <Image
                src="/assets/logo.png"
                width={159}
                height={49}
                alt="Picture of the logo"
              />
            </div>
            {/* nav items */}
            <div className="flex items-center gap-10 text-[#1E1E24]">
              <ul className="flex gap-10">
                {menus.map((item, index) => {
                  return (
                    <Link
                      className="text-[16px] text-[#0F172A] cursor-pointer font-normal hover:text-[#FF693B] transition-colors duration-300"
                      href={item.link}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
              {/* nav button */}
              <Link
                href={"/login"}
                className=" bg-[#FF693B] border border-[#FF693B] text-white font-medium px-10 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      </Container>

      {/* for small devices */}
      <div className=" lg:hidden">
        <Navbar>
          <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <Image
              src="/assets/logo.png"
              width={100}
              height={49}
              alt="Picture of the logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="">
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link as={Link} href="#">
              Services
            </Navbar.Link>
            <Navbar.Link href="#">Portfolio</Navbar.Link>
            <Navbar.Link href="#">About us</Navbar.Link>
            <Link
              href={"/login"}
              className=" bg-[#FF693B] border border-[#FF693B] text-white font-medium px-10 py-2 rounded-lg hover:bg-white hover:text-[#FF693B] transition-all duration-300"
            >
              Login
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
