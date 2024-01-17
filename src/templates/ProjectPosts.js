// ProjectPosts.js
import React from "react";
import { graphql } from "gatsby";
import { card, projTitle } from "../styles/projekt.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";

const Project = ({ data }) => {
  const project = data.contentfulProjekt;
  return (
    <Layout>
      <div className={card}>
        <h3 className={projTitle}>{project.titel}</h3>
        <p>{project.subtitel}</p>
        <div>
          <img
            src={project.image1.file.url}
            alt={project.namn}
            style={{ width: "100px", height: "100px" }}
          />
          {project.image2 && project.image2.file && (
            <img
              src={project.image2.file.url}
              alt={project.namn}
              style={{ width: "100px", height: "100px" }}
            />
          )}
        </div>
        {project.beskrivning && project.beskrivning.raw && (
          <div>
            {documentToReactComponents(JSON.parse(project.beskrivning.raw))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulProjekt: contentfulProjekt(slug: { eq: $slug }) {
      slug
      titel
      subtitel
      image1 {
        file {
          url
        }
      }
      image2 {
        file {
          url
        }
      }
      beskrivning {
        raw
      }
      kommentar {
        raw
      }
    }
  }
`;

export default Project;
