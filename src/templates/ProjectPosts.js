import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { card, projTitle, templateMain } from "../styles/projekt.module.css";

const Project = ({ data }) => {
  const project = data.contentfulProjekt;
  return (
    <Layout>
      <main id={templateMain}>
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
          <a href={project.lnk} target="_blank" rel="noopener noreferrer">
            {project.lnk}
          </a>
          {project.beskrivning && project.beskrivning.raw && (
            <div>
              {documentToReactComponents(JSON.parse(project.beskrivning.raw))}
            </div>
          )}
        </div>
      </main>
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
      lnk
    }
  }
`;

export default Project;
