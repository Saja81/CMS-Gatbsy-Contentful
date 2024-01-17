// import { graphql } from "gatsby";
// import * as React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import "../styles/global.css";
// import { Link } from "gatsby";
// import LayoutTwo from "../components/LayoutTwo";
// import {
//   HomeContainer,
//   HomeTitle,
//   HomeNav,
//   bodyStyle,
//   HomeSection,
//   HomeDiv,
// } from "../styles/test.module.css";

// const TestPage = ({ data }) => {
//   // console.log("GraphQL data:", data);

//   return (
//     // <LayoutTwo>
//     <main className={HomeContainer}>
//       <section className={HomeSection}>
//         <div className={HomeTitle}>
//           <h1>Sandra Jakobsson</h1>
//         </div>
//         <div>
//           <nav className={HomeNav}>
//             <Link to="/">Hem</Link>
//             <Link to="/cv">CV</Link>
//             <Link to="/about">Om mig</Link>
//             <Link to="/MyProjects">Mina projekt</Link>
//             <Link to="/contact">Kontakt</Link>
//           </nav>
//         </div>
//       </section>
//     </main>
//     // </LayoutTwo>
//   );
// };

// export const query = graphql`
//   query MyQuery {
//     allContentfulPost(sort: { fields: createdAt, order: ASC }) {
//       nodes {
//         title
//         slug
//         content {
//           raw
//         }
//         category
//         description
//         image {
//           gatsbyImageData
//         }
//         subtitle
//       }
//     }
//   }
// `;

// export default TestPage;

// document.body.classList.add(bodyStyle);
