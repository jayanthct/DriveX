import React from 'react';

function CarCard({carimg,cartitle,carprice}) {
  return (
    <article className="CarCard w-full p-[20px] pb-[24px] rounded-[16px] bg-back text-gray group hover:text-white gap-[16px] hover:bg-red flex justify-between items-start flex-col cursor-pointer transition-all">
      <div className="carimage w-full object-fill">
        <img className='rounded-[16px]' src={carimg} alt="carimg" />
      </div>
      <div className="cardetails flex flex-col gap-4 w-full">
        <h2 className="cartitle font-bold text-[30px]">{cartitle}</h2>
        <div className="carprice flex justify-between w-full items-end">
          <div className="price flex flex-col justify-start items-start">
            <p className="text-[#2222229f] group-hover:text-[#fcfcfca5]">Starting At</p>
            <h3 className="pricing font-bold text-[24px] -mt-1">₹{carprice}/Day</h3>
          </div>
          <button className="view flex font-bold bg-red text-white h-[32px] items-center px-[24px] py-[20px] rounded-full group-hover:bg-white group-hover:text-red transition-all">
            View
          </button>
        </div>
      </div>
    </article>
  );
}

export default CarCard;
