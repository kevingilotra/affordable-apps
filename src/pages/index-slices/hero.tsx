import React, { FunctionComponent } from "react";

const hero = {
  slogan: "More editing for less money",
  description: "Offering affordable and personalized application reviews for pre-meds across North America",
  cta: "Book a call with me!",
  img: {
    src: "/images/home/hero.jpg",
    alt: "Laptop and Stethoscope",
  },
};

export const Hero: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <img
        className="w-2/5 rounded"
        src="/images/home/hero.jpg"
        alt="Laptop and Stethoscope"
      />
      <h1 className="text-5xl font-bold mt-10">{ hero?.slogan }</h1>
      <p className="text-gray-500 mb-10">{ hero?.description }</p>
      <button className="rounded-full bg-blue-500 text-white px-5 py-2">{ hero?.cta }</button>
    </div>
  );
};
