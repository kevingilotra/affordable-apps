import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Testimonial } from "../../types";

export interface TestimonialsListItem {
  testimonial: Testimonial;
}

export const TestimonialsListItem: FunctionComponent<Testimonial> = ({
  name,
  testimonial,
  rating,
  publishedDate,
  img,
  imgAlt,
}) => {
  const ratingArr = new Array(5);
  for (let i = 0; i < rating; i += 1) {
    ratingArr[i] = 1;
  }

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
          <p className="italic mb-3">{testimonial}</p>
        <div className="flex flex-row justify-between">
          <p className="font-bold">
            <span>{name} - </span>
            <span>
              {ratingArr.map((val, index) => (
                <FontAwesomeIcon icon={faStar} key={index} />
              ))}
            </span>
          </p>
          <p className="font-light">{publishedDate?.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};
