import { graphql } from "gatsby";
import * as React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Link } from "gatsby";
import Layout from "../components/Layout";
import { mainSection } from "../styles/home.module.css";

const Home = ({ data }) => {
  const om = data.allContentfulOm.nodes[0];
  return (
    <Layout>
      <section className={mainSection}>
        <h1>{om.titel}</h1>
        <h3>{om.subtitel}</h3>
      </section>
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

export default Home;
