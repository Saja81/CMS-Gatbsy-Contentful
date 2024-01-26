const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define the template for individual projects
  const projectTemplate = path.resolve("./src/templates/ProjectPosts.js");

  // Define the template for individual meny posts
  const menyTemplate = path.resolve("./src/templates/MenyPosts.js");

  // Fetch data from Contentful for projects
  const projectsResult = await graphql(`
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

  if (projectsResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful projects`,
      projectsResult.errors
    );
    return;
  }

  const projects = projectsResult.data.allContentfulProjekt.nodes;

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

  // Fetch data from Contentful for meny posts
  const menyResult = await graphql(`
    {
      allContentfulMenyV1 {
        nodes {
          dag
          slug
        }
      }
    }
  `);

  if (menyResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful meny posts`,
      menyResult.errors
    );
    return;
  }

  const menyPosts = menyResult.data.allContentfulMenyV1.nodes;

  if (menyPosts.length > 0) {
    menyPosts.forEach((post) => {
      createPage({
        path: `/meny/${post.slug}/`,
        component: menyTemplate,
        context: {
          slug: post.slug,
        },
      });
    });
  }
};
