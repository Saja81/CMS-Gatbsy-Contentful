import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Search from "../components/search";

const NotFound = ({ data }) => {
  return (
    <Layout>
      <div>
        <h2>404</h2>
        <p>Sorry, that page doesn't exist (yet)!</p>
        <Search searchIndex={data.siteSearchIndex.index} />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#b98c04",
            fontWeight: "bold",
          }}
        >
          Tillbaka hem
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    siteSearchIndex {
      index
    }
  }
`;

export default NotFound;
