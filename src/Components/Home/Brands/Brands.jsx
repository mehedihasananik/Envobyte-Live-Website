import Container from '@/Components/Container/Container'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
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
            <div className="w-[100%] flex items-center justify-center">
              <Image
              width={763}
              height={78}
                className="w-ful h-full "
                src="/assets/Group 127.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Brands