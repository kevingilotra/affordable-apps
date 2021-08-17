import React, { FunctionComponent } from "react";
import { CtaButton } from "../../components/cta-button";

const whyChooseData = {
  section1: {
    points: [
      "Aa OFFERS the LOWEST PRICE you will find on the internet for med school application editing and interview preparation services",
      "Aa PROVIDES multiple rounds of edits for each application document and consistent support throughout the ENTIRE application process",
      "Aa GUARANTEES 100% of your money REFUNDED back if you’re completely unsatisfied with the services provided",
      "Aa DONATES 50% of annual proceeds to the National Pediatric Cancer Foundation",
    ],
    cta: ""
  },
  section2: {
    img: {
      src: "/images/home/domestic-foreign.jpg",
      alt: "Affordable Apps helps students with Domestic & Foreign Med Schools!",
    },
    caption: "Applying to medical schools outside your home country is hard. Lucky for you, I received interviews and acceptances at several schools in the US despite being a Canadian applicant. By applying the knowledge from my past experiences, my service can effectively raise your chances of attaining a seat at med schools across North America regardless of your citizenship!"
  }
};

const WhyChoose: FunctionComponent = () => {
  return (
    <div>
      <div className="md:-mx-10 p-10 bg-yellow-100 mb-15">
        <h2 className="text-3xl mb-5 font-bold italic">Why Choose Affordable Apps (Aa)?</h2>
        <ul>
          {whyChooseData?.section1?.points.map((point, index) => (
            <li className="list-disc list-inside mb-4" key={index}>{point}</li>
          ))}
        </ul>
        <CtaButton classes="mt-5 bg-black border-2 border-black text-white hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black"/>
      </div>
      <div className="md:p-10 p-5 border-4 border-yellow-200 mb-15">
        <h2 className="text-3xl mb-5 font-bold italic text-yellow-300">Aa helps students apply to Foreign & Domestic schools!</h2>
        <img src={whyChooseData?.section2?.img?.src}
         alt={whyChooseData?.section2?.img?.alt} />
        <p className="my-5">{whyChooseData?.section2?.caption}</p>
        <a className="text-blue-600 underline hover:text-blue-400 focus:text-blue-400" href="/about-me">Learn more about the founder -{">"}</a>
      </div>
    </div>
  )
};

export default WhyChoose;
