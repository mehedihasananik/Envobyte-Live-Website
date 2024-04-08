"use client";

import Accordion from "@/Components/Accordion/Accordion";
import API_ROUTES from "@/app/api/confiq";
import { useEffect, useState } from "react";
import { List } from "react-content-loader";

const Questions = ({ className, title }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.route}/faq`);
        const data = await response.json();
        setQuestions(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  const MyListLoader = () => <List />;

  return (
    <>
      <div className={`py-10 ${className}`}>
        <div className="max-w-[1680px] mx-auto md:px-[8%]">
          {loading ? (
            <div>
              <MyListLoader className="text-center flex justify-center items-center w-[100%]" />
            </div>
          ) : (
            <>
              <div className="text-center">
                <h3 className="text-[#0F172A] text-[32px] md:text-[48px] font-bold font-Raleway pb-5">
                  {title}
                </h3>
                <p className=" text-[#0F172A] text-[16px]  ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the{" "}
                </p>
              </div>
              <div className="py-10">
                <div className="p-4  rounded-lg">
                  {questions.map((question) => {
                    return (
                      <Accordion
                        title={question.title}
                        answer={question.details}
                        key={question.id}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Questions;
