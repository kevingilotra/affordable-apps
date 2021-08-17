import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";

interface AboutMe {
  founderImg: {
    src: string;
    alt: string;
  },
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
  founderImg: {
    src: "/images/about-me/kevin-gilotra.png",
    alt: "Kevin Gilotra, Founder of Aa",
  },
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
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-15">
        <h1 className="text-4xl mb-5 font-bold">Meet the Founder</h1>
        <div className="flex md:flex-row flex-col justify-center align-middle">
          <img className="md:w-1/2 w-full rounded-lg shadow-lg" src={aboutMe?.founderImg?.src} alt={aboutMe?.founderImg?.alt} />
          <div className="md:pl-10 md:pt-0 pt-5 ">
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
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
