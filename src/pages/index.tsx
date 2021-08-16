import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Testimonial } from "../types";
import Testimonials from "../createPages/templates/testimonials";
import Hero from "./index-slices/hero";
import Services from "./index-slices/services";
import AboutMe from "./index-slices/about-me";

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
          <AboutMe />
          <Testimonials testimonials={testimonials} />
        </div>
      </Layout>
    </>
  );
};

export default Index;
