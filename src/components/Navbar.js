import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { logo } from "../styles/navbar.module.css";

export default function Navbar() {
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
    <header>
      <nav>
        <h1 className={logo}>Sandra Jakobsson</h1>
        <div>
          {/* <Link to="/">Hem</Link>
        <Link to="/cv">CV</Link>
        <Link to="/about">Om mig</Link>
        <Link to="/MyProjects">Mina projekt</Link>
        <Link to="/contact">Kontakt</Link> */}
          {data.site.siteMetadata.menuLinks.map((link) => (
            <Link to={link.link}>{link.name}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
