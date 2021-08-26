import React, { FunctionComponent } from "react";
import { CtaButton } from "../../components/cta-button";

const hero = {
  slogan: "More editing, less money",
  description: "Offering affordable and personalized application reviews for pre-meds across North America.",
  cta: "Book a call with me!",
  img: {
    src: "/images/home/hero.jpg",
    alt: "Laptop and Stethoscope",
  },
};

const Hero: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center my-15 text-center">
      <img
        className="md:w-10/12 w-full rounded"
        src="/images/home/hero.jpg"
        alt="Laptop and Stethoscope"
      />
      <h1 className="md:text-5xl text-2xl font-bold md:mt-10 mt-5">{ hero?.slogan }</h1>
      <p className="text-gray-600 mb-5">{ hero?.description }</p>
      <CtaButton classes="border-2 border-blue-500 bg-blue-500 hover:bg-white focus:bg-white hover:text-blue-500 focus:text-blue-500 text-xl"/>
    </div>
  );
};

export default Hero;
