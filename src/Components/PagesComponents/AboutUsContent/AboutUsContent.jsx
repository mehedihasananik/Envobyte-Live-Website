import Container from "@/Components/Container/Container";
import Image from "next/image";
import React from "react";

const AboutUsContent = () => {
  return (
    <Container>
      <div>
        {/* titles & description */}
        <div className="pt-5 md:pt-10 lg:pt-20 space-y-4">
          <h2 className="text-[32px] lg:text-[48px] text-[#0F172A] font-bold font-Raleway text-center lg:text-left">About Company</h2>
          <p className="text-[18px] text-justify">
            Your project&apos;s status, budget spend, and progress are always
            visible and trackable by you… even at 3am on a Sunday. We believe
            complete transparency forms healthy communication, and healthy
            communication builds perfect products. consectetur nunc enim Lorem
            ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci
            consectetur nunc enim. Scelerisque molestie aliquam ac maurnati
            egestas. Sed Lorem ipsum dolor sit amet consectetur. Nulla sed eu
            quam congue orci consectetur nunc Lorem ipsum dolor sit amet
            consectetur. c enim Lorem ipsum dolor sit amet consectetur. Nulla
            sed eu quam congue orci consectetur nunc enim. Scelerisque molestie
            aliquam ac maurnatis egestas. Sed Lorem ipsum dolor sit amet
            consectetur. Nulla sed eu quam congue orci consectetur nunc Lorem
            ipsum dolor sit amet consectetur.c enim Lorem ipsum dolor sit amet
            consectetur. Nulla sed eu quam congue orci consectetur nunc enim.
            Scelerisque molestie aliquam ac maurnatis egestas. Sed Lorem ipsum
            dolor sit amet consectetur. Nulla sed eu quam congue orci
            consectetur nunc Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* mission & vision */}
        <div className="grid grid-cols-1 justify-items-center lg:justify-items-start gap-y-10 lg:gap-y-0 lg:grid-cols-3 pt-10 lg:pt-16 lg:gap-x-10  ">
          {/* 1st col */}
            <div className="flex items-center gap-3">
              <div>
                <Image className="w-[220px]"  width={500} height={500} src="/assets/mission1.png" alt="" />
              </div>
              <div className="space-y-3">
               <div><Image className="w-[220px]"  width={500} height={500} src="/assets/mission2.png" alt="" /></div>
               <div>
                <Image className="w-[220px]"  width={500} height={500} src="/assets/mission3.png" alt="" /></div>
              </div>
              
            </div>
        {/* 2nd col */}
            <div className="space-y-3 text-center lg:text-left lg:pt-[8%]">
              {/* logo */}
              <div className="flex justify-center lg:justify-start">
                <img src="/assets/missionLogo.png" alt="" />
              </div>
              {/* title */}
              <div><h1 className="text-[18px] md:text-[32px] font-semibold ">Mission </h1></div>
              {/* description */}
              <div>
                <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc enim. Scelerisque molestie aliquam ac maurnatis egestas. Sed Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc</p>
              </div>
            </div>
            <div>
              {/* 3rd col */}
              <div className="space-y-3  text-center lg:text-left lg:pt-[8%]">
              {/* logo */}
              <div className="flex justify-center lg:justify-start">
                <img src="/assets/missionLogo.png" alt="" />
                
              </div>
              {/* title */}
              <div><h1 className="text-[18px] md:text-[32px] font-semibold ">Mission </h1></div>
              {/* description */}
              <div>
                <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc enim. Scelerisque molestie aliquam ac maurnatis egestas. Sed Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc</p>
              </div>
            </div>
            </div>
        </div>
        {/* values */}
        <div className="lg:pt-20 lg:pb-4 space-y-3">
          <h3 className="text-[32px] text-[#334155] text-center lg:text-left">Our Values</h3>
          <div className="w-full lg:w-[70%] text-center lg:text-left space-y-3">
            <h1 className="text-[#0F172A] text-[32px] lg:text-[48px] font-bold font-Raleway leading-tight">When all the parts come together, extraordinary things can happen</h1>
            <p className="text-[#334155] text-[16px]">To us, world-class digital products take more than intelligent code or creative design. It requires true partnership between the ideators and the innovators. Our collaborations are built on a bedrock of transparency, communication, expert project management, and attention to detail.</p>
          </div>
        </div>
        {/* Transparency */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%]  flex flex-col justify-center" >
           <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">Transparency</h2>
           <div  className="text-[#334155] text-center lg:text-left text-[18px] space-y-5 pt-5">
           <p>Your project&apos;s status, budget spend, and progress are always visible and trackable by you… even at 3am on a Sunday. We believe complete transparency forms healthy communication, and healthy communication builds perfect products. <br/>
           </p>
           <p>consectetur nunc enim Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc enim. Scelerisque molestie aliquam ac maurnatis egestas. Sed Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc Lorem ipsum dolor sit amet consectetur.</p>
           </div>
          
          </div>
          {/* right side */}
          <div className="lg:w-[50%] flex justify-center lg:justify-end gap-x-3 ">
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB.png" alt="" />
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB2.png" alt="" />
          </div>
        </div>
        {/* communication */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row-reverse  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%] text-center lg:text-left flex flex-col justify-center" >
           <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">Communication</h2>
           <div  className="text-[#334155] text-[18px] space-y-5 pt-5">
           <p>Your project&apos;s status, budget spend, and progress are always visible and trackable by you… even at 3am on a Sunday. We believe complete transparency forms healthy communication, and healthy communication builds perfect products. <br/>
           </p>
           <p>consectetur nunc enim Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc enim. Scelerisque molestie aliquam ac maurnatis egestas. Sed Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc Lorem ipsum dolor sit amet consectetur.</p>
           </div>
          
          </div>
          {/* right side */}
          <div className="lg:w-[50%] flex justify-center lg:justify-start gap-x-3 ">
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB3.png" alt="" />
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB4.png" alt="" />
          </div>
        </div>
        {/* Project Management */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%] flex flex-col justify-center" >
           <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">Project Management</h2>
           <div  className="text-[#334155] text-center lg:text-left text-[18px] space-y-5 pt-5">
           <p>Your project&apos;s status, budget spend, and progress are always visible and trackable by you… even at 3am on a Sunday. We believe complete transparency forms healthy communication, and healthy communication builds perfect products. <br/>
           </p>
           <p>consectetur nunc enim Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc enim. Scelerisque molestie aliquam ac maurnatis egestas. Sed Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc Lorem ipsum dolor sit amet consectetur.</p>
           </div>
          
          </div>
          {/* right side */}
          <div className="lg:w-[50%] flex justify-center lg:justify-end gap-x-3 ">
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB5.png" alt="" />
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB6.png" alt="" />
          </div>
        </div>
        {/* Attention To Details */}
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row-reverse  lg:justify-between my-5 lg:py-20">
          {/* left side */}
          <div className="lg:w-[50%] flex flex-col justify-center text-center lg:text-left" >
           <h2 className="text-[#0F172A] text-[32px] font-bold font-Raleway text-center lg:text-left">Attention To Details</h2>
           <div  className="text-[#334155] text-[18px] space-y-5 pt-5">
           <p>Your project&apos;s status, budget spend, and progress are always visible and trackable by you… even at 3am on a Sunday. We believe complete transparency forms healthy communication, and healthy communication builds perfect products. <br/>
           </p>
           <p>consectetur nunc enim Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc enim. Scelerisque molestie aliquam ac maurnatis egestas. Sed Lorem ipsum dolor sit amet consectetur. Nulla sed eu quam congue orci consectetur nunc Lorem ipsum dolor sit amet consectetur.</p>
           </div>
          
          </div>
          {/* right side */}
          <div className="lg:w-[50%] flex justify-center lg:justify-start gap-x-3 ">
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB7.png" alt="" />
          <Image className="w-[320px] h-[400px]"  width={500} height={500} src="/assets/aboutusB8.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsContent;
