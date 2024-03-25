import Container from "@/Components/Container/Container";
import Image from "next/image";

const Footer = () => {
  const footer = [
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About Us", link: "/about-us" },
  ];

  return (
    <Container>
      <div className="flex flex-col py-5 md:py-8 lg:flex-row justify-between items-center lg:py-20 ">
        {/* left side */}
        <div className="w-full py-4 md:justify-between md:items-center lg:py-10 lg:flex-col lg:justify-start lg:items-start lg:w-[30%]">
          {/* logo & description */}
          <div className="relative left-[-10px]">
            <Image className="w-[159px] h-[49px]" width={200} height={100} src="/assets/footer.png" alt="" />
          </div> 
          <div className="w-[250px] py-5">
            <h3 className="text-[16px] text-[#444444] ">
              We are an IT Company. We help businesses to bring ideas to life
              easily and affordably.
            </h3>
          </div>
        </div>

        
        {/* right side */}
        <div className="w-full  lg:w-[70%] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* footer links */}
          {/* 1st col */}
          <div>
            <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
              Company
            </h3>
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                About Us
              </li>
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                Services
              </li>
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                Terms & Conditions
              </li>
            </ul>
          </div>
          {/* 2nd col */}
          <div>
            <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
              Company
            </h3>
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                About Us
              </li>
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                Services
              </li>
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                Terms & Conditions
              </li>
            </ul>
          </div>
          {/* 3rd col */}
          <div>
            <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
              Company
            </h3>
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                About Us
              </li>
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                Services
              </li>
              <li className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                Terms & Conditions
              </li>
            </ul>
          </div>
          {/* 4th col */}
          <div>
            <h3 className="text-[18px] font-Raleway text-[#444444] font-bold">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-2 pt-5 text-[16px] text-[#444444]  ">
              <li className="flex items-center gap-3">
                <span>
                  <img src="/assets/mail.svg" alt="" />
                </span>
                <span className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                  {" "}
                  Ourstudio@hello.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <span>
                  <img src="/assets/whatsapp.svg" alt="" />
                </span>{" "}
                <span className="cursor-pointer hover:text-[#FF693B] transition-all duration-200">
                  {" "}
                  +1 386-688-3295
                </span>
              </li>
              <div className="flex gap-4 pt-4">
                <img className="cursor-pointer" src="assets/insta.svg" alt="" />
                <img
                  className="cursor-pointer"
                  src="assets/facebook.svg"
                  alt=""
                />
                <img
                  className="cursor-pointer"
                  src="/assets/twitter-color-svgrepo-com 1.svg"
                  alt=""
                />
                <img
                  className="cursor-pointer"
                  src="/assets/linkedin.svg"
                  alt=""
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center py-3 ">
        <p className="text-[#444444] text-[14px] font-bold">
          @2023 - ENVOBYTE, All rights are reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;