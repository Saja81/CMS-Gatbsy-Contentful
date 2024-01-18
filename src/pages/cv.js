import React from "react";
import { graphql, Link } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import Layout from "../components/Layout";
import CvHeaderSection from "../components/CvHeaderComponent";
import CvContactSection from "../components/CvContactComponent";
import CvWorkSection from "../components/CvWorkComponent";
import CvEducationSection from "../components/CvEducationComponent";
import { Helmet } from "react-helmet";

import {
  profileImage,
  cvHeader,
  cvMain,
  cvAside,
  cvArticles,
} from "../styles/cv.module.css";

const CvHeader = ({ data }) => {
  const kontakt = data.kontakt.nodes[0];
  const kompetenserNodes = data.kompetenser.nodes;

  return (
    // <Layout>
    <section>
      <Helmet>
        <title>CV - Frontendutvecklare</title>
        <meta
          name="description"
          content="Utforska mitt CV och mina erfarenheter inom administration, reception, ledarskap och frontendutveckling. Jag har tidigare arbetat som driftsamordnare, administratör, receptionist och föreningssekreterare. Mina kompetenser inkluderar administration, reception, ledarskap, BRP Systems, samordning, coaching, evenemangsplanering och journalsystemet Webdoc."
        />
      </Helmet>
      <div id={cvHeader}>
        <Link to="/">
          <p>Tillbaka hem</p>
        </Link>
        <CvHeaderSection kontakt={kontakt} />
      </div>
      <div>
        <img
          className={profileImage}
          src={kontakt.image.file.url}
          alt={kontakt.namn}
        />
      </div>
      <div id={cvMain}>
        <div id={cvAside}>
          <CvContactSection
            kontakt={kontakt}
            kompetenserNodes={kompetenserNodes}
          />
        </div>
        <div id={cvArticles}>
          <CvWorkSection data={data} />
          <CvEducationSection data={data} />
        </div>
      </div>
    </section>
    // </Layout>
  );
};

export const query = graphql`
  query {
    kontakt: allContentfulKontakt {
      nodes {
        namn
        subtitle
        lder
        linkedIn
        mail
        telefonnummer
        image {
          file {
            url
          }
        }
      }
    }

    arbete: allContentfulArbete {
      nodes {
        fretag
        titel
        startdatum
        slutdatum
        subtitle
        beskrivning {
          raw
        }
        kompetenser
      }
    }

    utbildning: allContentfulUtbildning {
      nodes {
        skola
        utbildning
        datum
        beskrivning {
          raw
        }
      }
    }

    kompetenser: allContentfulKompetenser {
      nodes {
        titel
        beskrivning {
          raw
        }
      }
    }
  }
`;

export default CvHeader;
