import React from "react";
import { graphql, navigate } from "gatsby";
import Search from "../components/search";

const CategoryList = ({ data }) => {
  const projects = data.allContentfulProjekt.nodes;
  const categories = Array.from(
    new Set(projects.map((projekt) => projekt.kategori))
  );

  return (
    <div>
      <Search searchIndex={data.siteSearchIndex.index} />
      <p>Eller välj i listan</p>
      <select onChange={(e) => navigate(`/${e.target.value}/`)}>
        <option value="" disabled selected>
          Välj en kategori
        </option>
        {categories.map((kategori) => (
          <option key={kategori} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    siteSearchIndex {
      index
    }
    allContentfulProjekt {
      nodes {
        kategori
      }
    }
  }
`;

export default CategoryList;
