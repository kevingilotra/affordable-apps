import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Testimonial } from "../types";
import Testimonials from "../createPages/templates/testimonials";
import Hero from "./index-slices/hero";
import Services from "./index-slices/services";
import WhyChoose from "./index-slices/why-choose";
import { CtaButton } from "../components/cta-button";

export const pageQuery = graphql`
  {
    testimonials: allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___publishedDate], order: DESC }
      filter: { frontmatter: { template: { eq: "testimonials" } } }
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Services />
          <WhyChoose />
          <div className="mb-15">
            <p className="font-bold text-red-500 text-2xl">The ULTIMATE goal of Affordable Apps is to...</p>
            <div className="bg-red-400 p-10 rounded-lg ">
              <p className="font-bold text-4xl text-white">increase the diversity of future physicians by supporting underrepresented minorities</p>
            </div>
            <p className="mt-8 font-bold text-red-500 text-2xl">And...</p>
            <div className="bg-yellow-200 p-10 rounded-lg">
              <p className="font-bold text-4xl text-gray-500">
                <span>50% of the service fees given to AffordableApps will be donated to the </span>
                <a className="underline hover:text-gray-400 focus:gray-400" href="https://nationalpcf.org/" target="_blank">National Pediatric Cancer Foundation</a>
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <CtaButton cta="Get application help and support NPCF!" classes="bg-red-500 border border-red-500 text-white hover:bg-white hover:text-red-500 focus:bg-white focus:text-red-500 text-2xl"/>
            </div>
          </div>
          <Testimonials testimonials={testimonials} />
        </div>
      </Layout>
    </>
  );
};

export default Index;
