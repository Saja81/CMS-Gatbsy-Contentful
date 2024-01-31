import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { menyContainer, veckoMeny, menyItem } from "../styles/meny.module.css";

const Meny = ({ data }) => {
  const sorteringsfunktion = (a, b) => {
    const siffraA = parseInt(a.dag, 10);
    const siffraB = parseInt(b.dag, 10);

    if (siffraA < siffraB) {
      return -1;
    }
    if (siffraA > siffraB) {
      return 1;
    }
    return 0;
  };

  const menyNodes = data.allContentfulMenyV2.nodes.sort(sorteringsfunktion);

  return (
    <Layout>
      <Helmet>
        <title>Meny - Din Sida Titel Här</title>
        {/* Lägg till eventuella meta-tagg beskrivningar eller andra SEO-relaterade taggar här */}
      </Helmet>
      <div className={menyContainer}>
        <h2>Meny V.2</h2>
        <div className={veckoMeny}>
          {menyNodes.map((post, index) => (
            <div key={index} className={menyItem}>
              <Link to={`/menyv2/${post.slug}/`} className="meny-link">
                <h4>{post.dag}</h4>
                <p>{post.rtt}</p>
                <div>
                  <img
                    src={post.bild.file.url}
                    alt="Bildbeskrivning"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulMenyV2 {
      nodes {
        dag
        rtt
        bild {
          file {
            url
          }
        }
        slug
      }
    }
  }
`;

export default Meny;
