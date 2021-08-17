import React, { FunctionComponent } from "react";

export interface CtaButton {
  classes?: string;
}

export const CtaButton: FunctionComponent<CtaButton> = ({
  classes
}) => {
  return (
    <a href="https://calendly.com/affordableapps/15-minute-free-consultation" target="_blank"
       className={`rounded-full text-white px-5 py-2 ${classes}`}>
      Book a call with me!
    </a>
  );
};
