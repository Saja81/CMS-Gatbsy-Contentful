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
        name: "Om mig",
        link: "/about",
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
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "flUiYqJe0SD-5eooxELyOPI5gLyXzFxJniPVDnYcipk",
        spaceId: "yg61i7e220ut",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
