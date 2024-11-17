import React from "react";
import carimage from "../assets/Images/RedCarSide.png";

function WhyChooseSection() {
  return (
    <>
      <section className="whychoose h-full flex  gap-[46px] justify-between items-center px-[6%] py-[2%] w-full">
        <div className="textsection flex flex-col justify-start items-start gap-[36px]">
          <p className="primary font-bold text-[56px] -mt-1">
            Why Choose DriveX?
          </p>

          <p className="description w-[25ch] text-[#2222229f] text-[18px]">
            Join our satisfied customers who trust us for their journeys. We
            serve with a lot of values that you can feel directly.
          </p>
        </div>
        <div className="imagesection relative">
          <div className="font-bold bg-gradient-to-r text-[18px] left-[10%] top-[18%] flex items-center justify-center absolute from-white/60 to-white/20 border border-white rounded-[20px] shadow-md backdrop-blur-sm opacity-100 p-[32px]">
            Easy Booking
          </div>
          <div className="font-bold bg-gradient-to-r text-[18px] right-[10%] top-[4%] flex items-center justify-center absolute from-white/60 to-white/20 border border-white rounded-[20px] shadow-md backdrop-blur-sm opacity-100 p-[32px]">
            Quality & Variety
          </div>
          <div className="font-bold bg-gradient-to-r text-[18px] right-[24%] bottom-[2%] flex items-center justify-center absolute from-white/60 to-white/20 border border-white rounded-[20px] shadow-md backdrop-blur-sm opacity-100 p-[32px]">
            Affordable Rates
          </div>

          <img src={carimage} alt="" className="carimage w-full" />
        </div>
      </section>
    </>
  );
}

export default WhyChooseSection;
