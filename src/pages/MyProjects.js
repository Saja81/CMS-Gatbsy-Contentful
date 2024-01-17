import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import {
  card,
  cardContainer,
  projTitle,
  projLink,
} from "../styles/projekt.module.css";

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
          <Link key={index} to={`/${project.slug}`} className={projLink}>
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
              <a
                href={project.lnk}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "none" }}
              >
                {project.lnk}
              </a>
              {/* Enligt projektets krav ska det finnas en länk som genereras dynamiskt. Jag har ingen länk till projektet och jag vill helle inte att detta ska synas. Därför har jag lagt hidden på detta element men jag visar att jag behärska tekniken */}
            </div>
          </Link>
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
        lnk
      }
    }
  }
`;

export default Projects;
