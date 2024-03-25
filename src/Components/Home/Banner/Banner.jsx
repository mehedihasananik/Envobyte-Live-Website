import Container from '@/Components/Container/Container'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  
  return (
     <Container>
      {/* banner starts */}
     <div className="flex flex-col lg:flex-row items-center justify-between gap-11 pt-5 xl:pt-10 pb-10 ">
      {/* left side description */}
          <div className="flex flex-col ">
            {/* title starts*/}
            <div className="w-full lg:w-[450px] lg:pt-14 ">
              <h3 className="font-Raleway font-bold text-[30px] md:text-[40px] xl:text-[48px] xl:leading-[63.98px]">
                Creative Design  <span className="line-break"></span> and{" "}
                <span className="custom-rotate">Development </span> <br />
                for your product
              </h3>
            </div>
             {/* title ends*/}
            {/* description starts */}
            <div className="w-full lg:w-[450px] pt-4 text-[16px]">
              <p>
                Helped more than 200+ startups. We help businesses of all sizes
                by providing a complete solution including design, development,
                marketing, and many more.
              </p>
            </div>
             {/* description ends */}
            {/* buttons starts */}
            <div className="flex gap-6 py-6">
              <button className="text-[16px] whitespace-nowrap text-white bg-[#FF693B]  border border-[#FF693B] px-10 py-4 font-[600] rounded-lg  hover:bg-[#fff] hover:text-[#FF693B] transition-all duration-300">
                Get a Quote
              </button>
              <button className="text-[16px]  whitespace-nowrap text-[#FF693B] border border-[#FF693B] px-10 py-4 font-[600] rounded-lg  hover:bg-[#FF693B] hover:text-white transition-all duration-300">
                Our Services
              </button>
            </div>
              {/* buttons ends */}
          </div>
          <div>
            {/* right side image */}
            <div>
              <Image className='w-full h-full' width={1000} height={1000} src="/assets/banner.png" alt="" />
            </div>
          </div>
        </div>
         {/* banner ends */}
     </Container>
  )
}

export default Banner