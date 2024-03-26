import React from "react";

import Container from "@/Components/Container/Container";
import Accordion from "@/Components/Accordion/Accordion";

const Questions = ({ className, title }) => {
  return (
    <div className={`py-10 ${className}`}>
      <div className="max-w-[1680px] mx-auto md:px-[8%]">
        <div className="text-center">
          <h3 className="text-[#0F172A] text-[32px] md:text-[48px] font-bold font-Raleway pb-5">
            {title}
          </h3>
          <p className=" text-[#0F172A] text-[16px]  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the{" "}
          </p>
        </div>
        <div className="py-10">
          <div className="p-4  rounded-lg">
            <Accordion
              title="How does TanahAir create website content without knowing our Business plan?"
              answer="We will report each section that has been done, such as Flow, wireframe for each category, then full wireframe until it becomes a complete design and we will report the development of the website approximately every 1 week."
            />
            <Accordion
              title="How much does a website cost? "
              answer="We will report each section that has been done, such as Flow, wireframe for each category, then full wireframe until it becomes a complete design and we will report the development of the website approximately every 1 week."
            />
            <Accordion
              title="What services does TanahAir Offer? "
              answer="We will report each section that has been done, such as Flow, wireframe for each category, then full wireframe until it becomes a complete design and we will report the development of the website approximately every 1 week."
            />
            <Accordion
              title="What often will results be reported?"
              answer="We will report each section that has been done, such as Flow, wireframe for each category, then full wireframe until it becomes a complete design and we will report the development of the website approximately every 1 week."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
