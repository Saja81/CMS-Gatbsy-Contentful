import React from "react";
import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";
import { cvAsideContainer, profileImage } from "../styles/cv.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Contact = ({ data }) => {
  const om = data.allContentfulOm.nodes[0];
  return (
    <Layout>
      <main>
        <section>
          <div>
            <GatsbyImage
              className={profileImage}
              image={getImage(om.image.gatsbyImageData)}
              alt={om.image.title || ""}
              style={{ maxWidth: "50%" }}
            />
          </div>

          <div className={cvAsideContainer}>
            <p>{om.lder}</p>
            <p>{om.linkedIn}</p>
            <p>{om.email}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulOm {
      nodes {
        titel
        subtitel
        image {
          gatsbyImageData
        }
        lder
        telefon
        linkedIn
        email
        beskrivning {
          raw
        }
      }
    }
  }
`;

export default Contact;
