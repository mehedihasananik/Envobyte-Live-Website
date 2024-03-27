"use client";
import Container from "@/Components/Container/Container";
import API_ROUTES from "@/app/api/confiq";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.route}/home_brand`);
        const data = await response.json();
        setBrands(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#F8FAFC]  ">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 py-5 lg:py-2">
          {/* left side */}
          <div className="w-full text-center lg:text-left lg:w-[40%] font-Montserrat text-[#475569] text-[20px] font-bold">
            TRUSTED BY GLOBAL BRANDS
          </div>
          {/* right side */}
          <div className=" w-full lg:w-[60%] ">
            <div className="w-[100%] flex gap-x-10 items-center lg:justify-end">
              {brands.map((brand) => {
                return (
                  <Image
                    key={brand.id}
                    width={1000}
                    height={1000}
                    className="w-[101px] h-[70px] "
                    src={brand.logo}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
