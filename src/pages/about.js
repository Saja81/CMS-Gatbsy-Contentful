import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { StaticImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  const om = data.contentfulOmMig;
  return (
    <Layout>
      <h2>{om.title}</h2>
      <div>{documentToReactComponents(JSON.parse(om.description.raw))}</div>
      <img
        src={om.image.file.url}
        alt={om.namn}
        style={{ width: "100px", height: "100px" }}
      />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    contentfulOmMig {
      title
      description {
        raw
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

export default About;
