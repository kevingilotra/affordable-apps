import React, { FunctionComponent } from "react";

interface Service {
  title: string;
  description?: string;
  href: string;
}

const services: Service[] = [
  {
    title: "Free Consultation",
    description: "Get a free 15-minute consultation with me",
    href: "/services/consultation",
  },
  {
    title: "AMCAS Activities Section",
    description: "$30",
    href: "/services/amcas-activities",
  },
  {
    title: "AMCAS Personal Statement",
    description: "$30",
    href: "/services/amcas-personal-statement",
  },
  {
    title: "UofT/UWO Essay Editing",
    description: "$25/school",
    href: "/services/uoft-uwo-essay",
  },
  {
    title: "Secondary Applications",
    description: "$25/school",
    href: "/services/sec-apps",
  },
  {
    title: "OMSAS ABS",
    description: "Autobiographical Sketch - $25",
    href: "/services/omsas-abs",
  },
];

export const Services: FunctionComponent = () => {
  return (
    <div className="mb-15">
      <h2 className="text-3xl mb-5 font-bold">What do you need help with?</h2>
      <div
        className="grid gap-10 mx-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {services.map((service, index) => (
          <a
            href={service?.href}
            key={index}
            className="p-5 rounded-lg shadow-lg bg-white text-black hover:bg-gray-300 transition ease-in-out duration-200"
          >
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold">{service.title}</p>
              <p className="text-xs">{service?.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
