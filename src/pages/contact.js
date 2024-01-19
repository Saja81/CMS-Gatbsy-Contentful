import * as React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import LayoutTwo from "../components/LayoutTwo";

import {
  homeMainSection,
  homeInfo,
  homeNav,
  homeContainer,
  homeInnerContainer,
  cvAsideContainer,
  profileImage,
} from "../styles/home.module.css";

const Contact = ({ data }) => {
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
          <Link style={{ color: "#b98c04", textDecoration: "none" }} to="/">
            <p>Tillbaka hem</p>
          </Link>
          <div id={homeMainSection}>
            <div id={homeInfo}>
              <GatsbyImage
                className={profileImage}
                image={getImage(om.image.gatsbyImageData)}
                alt={om.image.title || ""}
                style={{ maxWidth: "50%" }}
              />
            </div>
            <div id={homeNav}>
              <div className={cvAsideContainer}>
                <p>{om.lder}</p>
                <p>{om.linkedIn}</p>
                <p>{om.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutTwo>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulOm {
      nodes {
        titel
        subtitel
        image {
          gatsbyImageData
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

export default Contact;
