import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Testimonials } from "../createPages/templates/testimonials";
import { Testimonial } from "../types";

export const pageQuery = graphql`
  {
    testimonials: allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___publishedDate], order: DESC }
      filter: { frontmatter: { template: { eq: "testimonial" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            body
            rating
            imgAlt
            publishedDate
            img {
              childImageSharp {
                fluid(maxWidth: 2400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface Service {
  title: string;
  description?: string;
  href: string;
}

interface TestimonialData {
  node: {
    id: string;
    frontmatter: {
      name: string;
      body: string;
      rating: number;
      publishedDate: string;
      img: { childImageSharp: { fluid: FluidObject } };
      imgAlt: string;
    };
  };
}

interface QueryData {
  testimonials: {
    edges: TestimonialData[];
  };
}

interface Index {
  data: QueryData;
}

const hero = {
  text1: "Need help editing your med school applications?",
  text2:
    "Can’t afford companies charging $1000s for a task that only takes 1-2 hours?",
  text3: "AFFORDABLE APPS is the right place for you!",
  img: {
    src: "/images/home/hero.jpg",
    alt: "Laptop and Stethoscope",
  },
};

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

const services = [
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

export const AboutMe: FunctionComponent = () => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl mb-5 font-bold">About Me</h2>
      <p>{aboutMe?.text}</p>
    </div>
  );
};

export const Services: FunctionComponent = () => {
  return (
    <div className="mb-10">
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
            className="p-5 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white"
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

const Index: FunctionComponent<Index> = ({ data }) => {
  const mapTestimonialData = ({ node }: { node: TestimonialData["node"] }) => ({
    name: node.frontmatter.name,
    body: node.frontmatter.body,
    rating: node.frontmatter.rating,
    img: node?.frontmatter?.img?.childImageSharp?.fluid,
    imgAlt: node?.frontmatter?.imgAlt,
    publishedDate: new Date(node.frontmatter.publishedDate),
  });

  const testimonials: Testimonial[] = data.testimonials.edges.map(
    mapTestimonialData
  );

  return (
    <>
      <SEO title="Home" image="/logo.png" />
      <Layout>
        <div className="flex md:flex-row flex-col justify-center items-center mb-10">
          <div className="w-full my-12 md:mr-6">
            <img
              className="w-full rounded-lg"
              src="/images/home/hero.jpg"
              alt="Laptop and Stethoscope"
            />
          </div>
          <div
            className="flex flex-col md:mb-12 mb-12 md:ml-6 font-bold"
            style={{ fontSize: "1.25rem" }}
          >
            <p className="mb-10">{hero?.text1}</p>
            <p className="mb-10">{hero?.text2}</p>
            <p>{hero?.text3}</p>
          </div>
        </div>
        <AboutMe />
        <Services />
        <Testimonials testimonials={testimonials} />
      </Layout>
    </>
  );
};

export default Index;
