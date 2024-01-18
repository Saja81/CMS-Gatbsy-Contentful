import { graphql, Link } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { Link } from "gatsby";
import Layout from "../components/Layout";
import LayoutTwo from "../components/LayoutTwo";
import {
  homeMainSection,
  homeInfo,
  homeNav,
  homeContainer,
  homeInnerContainer,
} from "../styles/home.module.css";

const Home = ({ data }) => {
  const om = data.allContentfulOm.nodes[0];
  return (
    <LayoutTwo>
      <section id={homeContainer}>
        <Helmet>
          <title>
            Frontendutveckling med headless CMS på IT-Högskolan i Göteborg
          </title>
          <meta
            name="description"
            content="Utforska mina projekt skapade under min utbildning på IT-Högskolan i Göteborg. En projektsida skapad i en kurs för headless CMS."
          />
        </Helmet>

        <div id={homeInnerContainer}>
          <div id={homeMainSection}>
            <div id={homeInfo}>
              <h3>{om.titel}</h3>
              <h4>{om.subtitel}</h4>
              <div>
                {documentToReactComponents(JSON.parse(om.beskrivning.raw))}
              </div>
            </div>
            <div id={homeNav}>
              <nav>
                {data.site.siteMetadata.menuLinks.map((link) => (
                  <Link to={link.link} key={link.name}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </LayoutTwo>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
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
