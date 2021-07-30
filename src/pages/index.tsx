import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export interface Service {
  title: string;
  description?: string;
}

const services = [
  {
    title: "Free Consultation",
    description: "",
  },
  {
    title: "AMCAS Activities Section",
    description: "",
  },
  {
    title: "AMCAS Personal Statement",
    description: "",
  },
  {
    title: "UofT/UWO Essay Editing",
    description: "",
  },
  {
    title: "Secondary Applications",
    description: "",
  },
  {
    title: "OMSAS ABS",
    description: "",
  },
];

const Index: FunctionComponent = () => {
  return (
    <>
      <SEO title="Home" image="/logo.png" />
      <Layout>
        <div className="flex md:flex-row flex-col justify-center items-center mb-10">
          <div className="w-full my-12 mr-6">
            <img className="w-full rounded-lg"
                 src="/images/home/hero.jpg"
                 alt="Laptop and Stethoscope"
            />
          </div>
          <div className="flex flex-col my-12 ml-6 font-bold">
            <p className="mb-10">Need help editing your med school applications?</p>
            <p className="mb-10">
              Can’t afford companies charging 1000s of dollars for a task that only takes 1-2 hours?
            </p>
            <p>You’ve come to the right place</p>
          </div>
        </div>
        <div>
          <h3 className="text-3xl">What do you need help with?</h3>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {services.map((service, index) => (
              <div className="border-4 border-blue-400 p-5 rounded-sm flex justify-center items-center" key={index}>
                {service.title}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
