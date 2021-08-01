import React, { FunctionComponent } from "react";
import { Testimonial } from "../../types";
import { TestimonialsListItem } from "../testimonialsListItem/testimonialsListItem";

export interface Testimonials {
  testimonials: Testimonial[];
}

export const Testimonials: FunctionComponent<Testimonials> = ({
  testimonials,
}) => {
  return (
    <div>
      <h2 className="text-3xl mb-5 font-bold">Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialsListItem {...testimonial} key={index} />
      ))}
    </div>
  );
};
