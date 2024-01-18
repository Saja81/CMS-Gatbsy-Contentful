import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import CategoryList from "./CategoryList";

const NotFound = ({ data }) => {
  return (
    <Layout>
      <div>
        <h2>404</h2>
        <p>Sorry, that page doesn't exist (yet)!</p>
        {/* <CategoryList data={data} /> */}
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

export default NotFound;
