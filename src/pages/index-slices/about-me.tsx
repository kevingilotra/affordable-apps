import React, { FunctionComponent } from "react";

const aboutMe = {
  text:
    "My name is Kevin Gilotra, I was born and raised in Mississauga, ON for " +
    "the first two decades of my life after which I decided to pursue medical " +
    "school at Stony Brook University in Long Island, NY. I completed my " +
    "undergraduate degree in kinesiology at McMaster University as a part of the " +
    "class of 2021 where I gained numerous skills through my research and " +
    "extra-curricular endeavours. As someone who has been through the MD " +
    "admissions process in both Canada and the US, I have the credentials needed " +
    "to help you create a well-rounded application for medical school. During " +
    "my application cycle, I was fortunate to have interviewed at several " +
    "mid-tier and upper-tier medical schools in both the US and Canada, which " +
    "ultimately translated to 4 total acceptances as a student who had only just " +
    "completed his bachelor’s degree. I have the writing skills that can help " +
    "present your research, volunteering and extra-curricular activities in a " +
    "way that will make you stand out from the thousands of other applications " +
    "in the pile. Affordable Apps is a medical school application editing and " +
    "premedical student counseling service created by Kevin Gilotra with the " +
    "effort to",
};

export const AboutMe: FunctionComponent = () => {
  return (
    <div className="mb-15">
      <h2 className="text-3xl mb-5 font-bold">About Me</h2>
      <p>{aboutMe?.text}</p>
    </div>
  );
};
