/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    title: `My portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "Hem",
        link: "/",
      },
      {
        name: "CV",
        link: "/cv",
      },
      {
        name: "Mina Projekt",
        link: "/MyProjects",
      },
      {
        name: "Kontakt",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fält att indexera
        fields: ["titel", "subtitel", "slug"],

        // Hur man löser varje fälts värde för en understödd nodtyp
        resolvers: {
          ContentfulProjekt: {
            // Observera att jag ändrade från ContentfulPost till ContentfulProjekt
            titel: (node) => node.titel,
            subtitel: (node) => node.subtitel,
            slug: (node) => node.slug,
          },
        },
      },
    },

    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "flUiYqJe0SD-5eooxELyOPI5gLyXzFxJniPVDnYcipk",
        spaceId: "yg61i7e220ut",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
  ],
};
