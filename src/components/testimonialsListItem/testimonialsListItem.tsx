import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { Testimonial } from "../../types";

export interface TestimonialsListItem {
  testimonial: Testimonial;
}

export const TestimonialsListItem: FunctionComponent<Testimonial> = ({
  testimonial,
  name,
  publishedDate,
  image,
  imageAlt,
}) => {
  return (
    <div className="rounded-lg shadow-lg flex flex-row p-5 mb-8">
      <div>
        <Image
          fluid={image}
          alt={imageAlt}
          className="h-48 w-full sm:w-48 xl:h-52 xl:w-52 object-cover rounded-sm"
        />
      </div>
      <div className="w-full">
        <p className="font-bold">{name}</p>
        <p className="italic">{testimonial}</p>
        <p className="relative left-10/12">{publishedDate.toDateString()}</p>
      </div>
    </div>
  );
};
