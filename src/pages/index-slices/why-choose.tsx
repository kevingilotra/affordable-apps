import React, { FunctionComponent } from "react";
import { CtaButton } from "../../components/cta-button";

const whyChooseData = {
  section1: {
    points: [
      "Aa OFFERS the LOWEST PRICE you will find on the internet for med school application editing and interview preparation services",
      "Aa PROVIDES unlimited rounds of edits for each of your application documents and consistent support throughout the ENTIRE application process",
      "Aa GUARANTEES 100% of your money REFUNDED back if you’re completely unsatisfied with the services provided",
      "Aa DONATES 50% of annual proceeds to the National Pediatric Cancer Foundation",
    ],
    cta: ""
  },
  section2: {
    title: "Aa helps students apply to foreign & domestic schools!",
    img: {
      src: "/images/home/domestic-foreign.jpg",
      alt: "Affordable Apps helps students with domestic & foreign med schools!",
    },
    caption: "Applying to medical schools outside your home country is hard. Lucky for you, I received interviews and acceptances at several schools in the US despite being a Canadian applicant. By applying the knowledge from my past experiences, my service can effectively raise your chances of attaining a seat at med schools across North America regardless of your citizenship!"
  }
};

const WhyChoose: FunctionComponent = () => {
  return (
    <div>
      <div className="md:-mx-10 p-10 bg-yellow-100 mb-15">
        <h2 className="text-2xl md:text-4xl mb-5 font-bold italic">Why Choose Affordable Apps (Aa)?</h2>
        <ul className="mb-5">
          {whyChooseData?.section1?.points.map((point, index) => (
            <li className="list-disc list-inside mb-4" key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex justify-center">
          <CtaButton classes="bg-white border border-black text-black hover:bg-black hover:text-white focus:bg-black focus:text-white"/>
        </div>
      </div>
      <div className="md:p-10 p-5 border-4 border-blue-500 mb-15 rounded-lg">
        <h2 className="text-2xl md:text-4xl mb-5 font-bold italic text-blue-500">{whyChooseData?.section2?.title}</h2>
        <img src={whyChooseData?.section2?.img?.src}
         alt={whyChooseData?.section2?.img?.alt} />
        <p className="my-5">{whyChooseData?.section2?.caption}</p>
        <a className="text-blue-600 underline hover:text-blue-400 focus:text-blue-400" href="/about-me">Learn more about the founder -{">"}</a>
      </div>
    </div>
  )
};

export default WhyChoose;
