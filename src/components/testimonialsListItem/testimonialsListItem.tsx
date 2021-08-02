import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { Testimonial } from "../../types";

export interface TestimonialsListItem {
  testimonial: Testimonial;
}

export const TestimonialsListItem: FunctionComponent<Testimonial> = ({
  name,
  body,
  publishedDate,
  img,
  imgAlt,
}) => {
  return (
    <div className="rounded-lg shadow-lg flex flex-row p-5 mb-8">
      <div className="mr-10">
        {img ? (
          <Image
            fluid={img}
            alt={imgAlt}
            className="h-48 w-full sm:w-48 xl:h-52 xl:w-52 object-cover rounded-sm"
          />
        ) : null}
      </div>
      <div className="w-full flex flex-col justify-between">
        <div>
          <p className="font-bold">{name}</p>
          <p className="italic">{body}</p>
        </div>
        <p className="font-light">{publishedDate.toDateString()}</p>
      </div>
    </div>
  );
};
