import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { card, cardContainer } from "../styles/projekt.module.css";

const Projects = ({ data }) => {
  const projectsNodes = data.allContentfulProjekt.nodes;

  projectsNodes.sort((a, b) => {
    const titleA = parseInt(a.titel.substring(0, 1), 10);
    const titleB = parseInt(b.titel.substring(0, 1), 10);
    return titleA - titleB;
  });

  return (
    <Layout>
      <div className={cardContainer}>
        {projectsNodes.map((project, index) => (
          <div key={index} className={card}>
            <h1>
              <Link to={`/${project.slug}`}>{project.titel}</Link>
            </h1>
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
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulProjekt {
      nodes {
        titel
        slug
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
  }
`;

export default Projects;
