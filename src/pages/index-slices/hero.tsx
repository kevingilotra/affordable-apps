import React, { FunctionComponent } from "react";
import Testimonials from "../../createPages/templates/testimonials";

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
      <button className="rounded-full bg-blue-500 text-white px-5 py-2">{ hero?.cta }</button>
    </div>
  );
};

export default Hero;
