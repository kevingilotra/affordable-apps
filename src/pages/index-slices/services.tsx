import React, { FunctionComponent } from "react";
import Testimonials from "../../createPages/templates/testimonials";

interface Service {
  title: string;
  description?: string;
  price: string;
}

const services: Service[] = [
  {
    title: "Free 15-Minute Consultation",
    description: "BEFORE you pay for anything, you can ask ANY questions you have about my services, credentials and what you can expect from Aa over a 15-minute phone call with me!",
    price: "FREE",
  },
  {
    title: "AMCAS Activities Section",
    description: "Includes unlimited edits for the 15 entries in your Activities section and brainstorming ideas for how you can utilize AMCAS character limits effectively to discuss more life experiences in your application!",
    price: "$30",
  },
  {
    title: "AMCAS Personal Statement",
    description: "Unlimited edits of your personal statement to ensure your essay effectively explains why you want to pursue a medical career in a unique fashion!",
    price: "$30",
  },
  {
    title: "OMSAS Autobiographical Sketch Editing",
    description: " Includes unlimited edits for up to 32 entries in your ABS and assistance with making your experiences stand out from other applicants!",
    price: "$30",
  },
  {
    title: "School-Specific Essay/Secondary Application Editing",
    description: "Includes editing for individual school-specific applications to ensure your essay answers meet the mission statements of each school and help you stand out from other applicants!",
    price: "$25 (per school)"
  },
  {
    title: "Interview Prep",
    description: "Includes mock interview questions (MMI, MPI, and panel) with corresponding personalized feedback for you over a Zoom call with each sessions being customized based on your needs",
    price: "$20 (per hour)"
  },
];

const slice = {
  services,
  footer: "***A minimum of 2 hours is spent on each application document you request editing for"
};

const Services: FunctionComponent = () => {
  return (
    <div className="md:-mx-10 md:p-10 px-3 py-5 border-2 border-blue-500 text-blue-500 mb-15">
      <h2 className="text-3xl mb-5 font-bold italic">What do you need help with?</h2>
        {slice?.services.map((service, index) => (
          <div key={index}
               className={`p-5 mb-10 flex flex-col justify-between rounded-lg shadow-lg bg-white text-black transition ease-in-out duration-200`}>
            <p className="font-bold mr-5 flex-1 mb-2">{service.title}</p>
            <p className="text-sm mb-1">{service?.description}</p>
            <p className="text-red-600">{service?.price}</p>
          </div>
        ))}

        <p>{slice?.footer}</p>
    </div>
  );
};

export default Services;
