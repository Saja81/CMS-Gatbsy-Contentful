import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../styles/global.css";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allContentfulNavigation {
  //       nodes {
  //         lnk
  //         namn
  //       }
  //     }
  //   }
  // `);

  // const menuLinks = data.allContentfulNavigation.nodes;
  return (
    <body className="body">
      <header className="mainheader">
        <h1 className="logo">Sandra Jakobsson</h1>
        <nav>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <Link to={link.link}>{link.name}</Link>
          ))}
        </nav>
        {/* <nav>
          {menuLinks.map((link) => (
            <Link to={link.lnk} key={link.lnk}>
              {link.namn}
            </Link>
          ))}
        </nav> */}
      </header>

      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Sandra Jakobsson. Alla rättigheter förbehållna.</p>
      </footer>
    </body>
  );
}
