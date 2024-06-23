"use client"
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () =>{

    }




  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Effortlessly Rent or Reserve Your Ideal Car Today
        </h1>
        <p className="hero__subtitle">
        Simplify Your Car Rental Experience with Our Seamless Booking Process
        </p>

        <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
