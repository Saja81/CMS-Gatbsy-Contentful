import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { cardContainer, projTitle } from "../styles/projekt.module.css";

const MenyPosts = ({ data }) => {
  const { dag, ingredienser, rtt, grSHr, bild } = data.contentfulMenyV1;

  return (
    <Layout>
      <Helmet>
        <title>Meny - Din Sida Titel Här</title>
      </Helmet>
      <div className={cardContainer}>
        <div className={projTitle}>
          <h3>{dag}</h3>
          <p>{rtt}</p>
          <div>
            <img
              src={bild.file.url}
              alt="Bildbeskrivning"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div>
            <h3>Ingredienser</h3>
            {ingredienser && (
              <div>
                {documentToReactComponents(JSON.parse(ingredienser.raw))}
              </div>
            )}
          </div>
          <div>
            <h3>Gör så här</h3>
            {grSHr && (
              <div>{documentToReactComponents(JSON.parse(grSHr.raw))}</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulMenyV1(slug: { eq: $slug }) {
      dag
      rtt
      ingredienser {
        raw
      }
      grSHr {
        raw
      }
      bild {
        file {
          url
        }
      }
      slug
    }
  }
`;

export default MenyPosts;
