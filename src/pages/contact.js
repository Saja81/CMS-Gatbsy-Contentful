import React from "react";
import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";
import {
  HomeContainer,
  bodyStyle,
  HomeSection,
  HomeDiv,
  profileImage,
  SymbolContainer,
  symbolText,
} from "../styles/test.module.css";

const Contact = ({ data }) => {
  const om = data.allContentfulOm.nodes[0];
  return (
    <Layout>
      <main className={HomeContainer}>
        <section className={HomeSection}>
          <div>
            <img
              className={profileImage}
              src={om.image.file.url}
              alt={om.namn}
            />
          </div>
          <div className={HomeDiv}>
            <p>{om.lder}</p>
            <p>{om.linkedIn}</p>
            <p>{om.email}</p>
          </div>
          <div className={SymbolContainer}>
            <p className={symbolText}>Hem</p>
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

document.body.classList.add(bodyStyle);
