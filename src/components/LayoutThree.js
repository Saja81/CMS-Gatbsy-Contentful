import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <body>
      <header className="mainheader">
        <Link to="/meny" className="logo">
          <h1>Meny</h1>
        </Link>

        <nav>
          <ul className="nav-links-meny">
            <li>
              <Link to="/menyv1">Vecka 1</Link>
            </li>
            <li>
              <Link to="/menyv2">Vecka 2</Link>
            </li>
            <li>
              <Link to="/menyv3">Vecka 3</Link>
            </li>
            <li>
              <Link to="/menyv4">Vecka 4</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Sandra Jakobsson - Meny för den utan idéer</p>
      </footer>
    </body>
  );
}
