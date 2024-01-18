// gatsby-node.js

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define the template for individual projects
  const projectTemplate = path.resolve("./src/templates/ProjectPosts.js");

  // Fetch data from Contentful
  const result = await graphql(`
    {
      allContentfulProjekt {
        nodes {
          titel
          slug
          kategori
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful projects`,
      result.errors
    );
    return;
  }

  const projects = result.data.allContentfulProjekt.nodes;

  if (projects.length > 0) {
    projects.forEach((project) => {
      createPage({
        path: `/${project.slug}/`,
        component: projectTemplate,
        context: {
          slug: project.slug,
        },
      });

      createPage({
        path: `/${project.kategori.toLowerCase()}/`, // Lägg till kategori i sökvägen
        component: projectTemplate,
        context: {
          slug: project.slug,
          kategori: project.kategori, // Skicka med kategorin som en del av context
        },
      });
    });
  }
};
