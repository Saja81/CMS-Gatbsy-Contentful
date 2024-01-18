import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/home.module.css";

const Home = ({ data }) => {
  const om = data.allContentfulOm.nodes[0];
  return (
    <Layout>
      <Helmet>
        <title>
          Frontendutveckling med headless CMS på IT-Högskolan i Göteborg
        </title>
        <meta
          name="description"
          content="Utforska mina projekt skapade under min utbildning på IT-Högskolan i Göteborg. En projektsida skapad i en kurs för headless CMS."
        />
      </Helmet>
      <section>
        <h3>{om.titel}</h3>
        <h4>{om.subtitel}</h4>
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
