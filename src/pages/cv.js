import React, { useState } from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";
import CvHeaderSection from "../components/CvHeaderComponent";
import CvContactSection from "../components/CvContactComponent";
import CvWorkSection from "../components/CvWorkComponent";
import CvEducationSection from "../components/CvEducationComponent";

import { profileImage } from "../styles/cv.module.css";

const CvHeader = ({ data }) => {
  const kontakt = data.kontakt.nodes[0];

  return (
    // <Layout>
    <section>
      {/* Row 1 */}
      <div>
        <CvHeaderSection kontakt={kontakt} />
      </div>

      {/* Row 2 */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Column 1 */}
        <div style={{ flex: 1 }}>
          <CvContactSection kontakt={kontakt} />
        </div>

        {/* Column 2 */}
        <div style={{ flex: 1 }}>
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
  }
`;

export default CvHeader;
