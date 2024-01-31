import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const MenyPost = ({ data }) => {
  const { dag, ingredienser, rtt, grSHr, lnk } = data.contentfulMenyV1; // Hämta data för den specifika menyposten

  return (
    <Layout>
      <Helmet>
        <title>{dag} - Din Sida Titel Här</title>
        {/* Lägg till eventuella meta-tagg beskrivningar eller andra SEO-relaterade taggar här */}
      </Helmet>
      <div>
        <h2>{dag}</h2>
        <p>{rtt}</p>
        <h3>ingredienser</h3>
        <div>{documentToReactComponents(JSON.parse(ingredienser.raw))}</div>
        <h3>Gör så här</h3>
        <div>{documentToReactComponents(JSON.parse(grSHr.raw))}</div>
        <p>{lnk}</p>
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
      slug
      lnk
    }
  }
`;

export default MenyPost;
