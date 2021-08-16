import React, { FunctionComponent } from "react";

interface AboutMe {
  items: {
    title: string;
    description: string;
  }[],
  links: {
    title: string;
    href: string;
    target?: string;
  }[];
}


const aboutMe: AboutMe = {
  items: [
    {
      title: "Name",
      description: "Kevin Gilotra",
    },
    {
      title: "Hometown",
      description: "Mississauga, ON, Canada",
    },
    {
      title: "Bachelor's",
      description: "BSc. Kinesiology at McMaster University – Class of 2021",
    },
    {
      title: "MD (in progress)",
      description: "Stony Brook University Renaissance School of Medicine – Class of 2025",
    },
    {
      title: "Hobbies",
      description: "Cricket, basketball, PC gaming, cooking, (rewatching) Netflix, spending quality time with family/friends, coding, Xbox, soccer, stocks/trading, reading (non-fiction books) and learning new skills.",
    },
    {
      title: "Research Interests",
      description: "Cardiac surgery, cardiology, diabetes, low back pain, mitochondrial dynamics in skeletal muscle, CARM1 protein function, complementary/alternative/integrative medicine and quality assessment of scientific information.",
    },
  ],
  links: [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/kevingilotra/",
      target: "_blank"
    },
    {
      title: "ORCID ID",
      href: "https://orcid.org/0000-0001-6407-0022",
      target: "_blank"
    },
  ],
};

const AboutMe: FunctionComponent = () => {
  return (
    <div className="md:-mx-10 p-10 bg-blue-300 mb-15">
      <h2 className="text-3xl mb-5 font-bold italic underline">Meet the Founder</h2>
      {aboutMe?.items?.map((item, index) => (
        <p className="mb-3" key={index}>
          <span className="font-bold">{item?.title}: </span>
          <span>{item?.description}</span>
        </p>
      ))}
      {aboutMe?.links?.map((link) => (
        <p className="mb-3">
          <span className="font-bold">{link?.title}: </span>
          <a className="underline text-blue-600" href={link?.href} target={link?.target}>{link?.href}</a>
        </p>
      ))}
    </div>
  );
};

export default AboutMe;
