import React, { FunctionComponent } from "react";
import { Testimonial } from "../../types";
import { TestimonialsListItem } from "../../components/testimonialsListItem/testimonialsListItem";

export interface TestimonialPage {
  testimonials: Testimonial[];
}

const Testimonials: FunctionComponent<TestimonialPage> = ({
  testimonials,
}) => {
  return (
    <div>
      <h2 className="text-3xl mb-5 font-bold italic">Testimonials</h2>
      {testimonials?.map((testimonial, index) => (
        <TestimonialsListItem {...testimonial} key={index} />
      ))}
    </div>
  );
};

export default Testimonials;
