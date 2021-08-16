import React, { FunctionComponent } from "react";

const hero = {
  slogan: "More editing, less money",
  description: "Offering affordable and personalized application reviews for pre-meds across North America",
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
        className="md:w-2/5 w-full rounded"
        src="/images/home/hero.jpg"
        alt="Laptop and Stethoscope"
      />
      <h1 className="md:text-5xl text-4xl font-bold md:mt-10 mt-5">{ hero?.slogan }</h1>
      <p className="text-gray-500 mb-10">{ hero?.description }</p>
      <a href="https://calendly.com/affordableapps/15-minute-free-consultation" target="_blank" className="rounded-full bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white px-5 py-2">
        { hero?.cta }
      </a>
    </div>
  );
};

export default Hero;
