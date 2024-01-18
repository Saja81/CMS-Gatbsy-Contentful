// layout.js

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../styles/global.css";
// import "../styles/layout.module.css";

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
  return (
    <body className="body">
      <header className="mainheader">
        <h1 className="logo">Sandra Jakobsson</h1>
        <nav>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <Link to={link.link}>{link.name}</Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Sandra Jakobsson. Alla rättigheter förbehållna.</p>
      </footer>
    </body>
  );
}
