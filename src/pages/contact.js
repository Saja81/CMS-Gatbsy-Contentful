import React from "react";
import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";
import { cvAsideContainer, profileImage } from "../styles/cv.module.css";

const Contact = ({ data }) => {
  const om = data.allContentfulOm.nodes[0];
  return (
    <Layout>
      <main>
        <section>
          <div>
            <img
              className={profileImage}
              src={om.image.file.url}
              alt={om.namn}
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
          file {
            url
          }
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
