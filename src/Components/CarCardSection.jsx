import React from "react";
import CarCard from "./CarCard";
import carimg1 from "../assets/Images/BMW.png";
import carimg2 from "../assets/Images/Audi.png";
import carimg3 from "../assets/Images/Toyato.png";
import carimg4 from "../assets/Images/Benz.png";
import carimg5 from "../assets/Images/Tesla.png";
import carimg6 from "../assets/Images/Ford.png";

function CarCardSection() {

  const cars = [
    { carimg: carimg3, cartitle: "Toyota - Camry Hybrid", carprice: "2099" },
    { carimg: carimg6, cartitle: "Ford - Mustang Convertible", carprice: "999" },
    { carimg: carimg4, cartitle: "Mercedes-Benz - C-Class Coupe", carprice: "1109" },
    { carimg: carimg2, cartitle: "Audi A4 Sedan", carprice: "1229" },
    { carimg: carimg1, cartitle: "BMW X5 SUV", carprice: "1599" },
    { carimg: carimg5, cartitle: "Tesla - Model 3", carprice: "1999" },
  ];

  return (
    <>
      <section className="feature h-full flex flex-col gap-[46px] justify-center items-center px-[10%] py-[2%] w-full">
        <div className="sectiontitles flex flex-col justify-center items-center">
          <p className="secondary font-semibold text-[20px]">THE CARS</p>
          <p className="primary font-bold text-[56px] -mt-1">
            Our Impressive Fleet
          </p>
        </div>

        <div className="cardgrid grid grid-cols-3 gap-6 justify-between">
          {cars.map((car, index) => (
            <CarCard
              key={index}
              carimg={car.carimg}
              cartitle={car.cartitle}
              carprice={car.carprice}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CarCardSection;
